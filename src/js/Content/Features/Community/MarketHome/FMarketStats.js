import {HTML, LocalStorage, Localization, SyncedStorage, TimeUtils} from "../../../../modulesCore";
import {CurrencyManager, Feature, Price, RequestData, User} from "../../../modulesContent";

export default class FMarketStats extends Feature {

    checkPrerequisites() {
        return User.isSignedIn;
    }

    apply() {

        HTML.beforeBegin("#findItems",
            `<div id="es_summary">
                <div class="market_search_sidebar_contents">
                    <h2 class="market_section_title">${Localization.str.market_transactions}</h2>
                    <div id="es_market_summary_status">
                        <a class="btnv6_grey_black ico_hover btn_small_thin" id="es_market_summary_button">
                            <span>${Localization.str.load_market_stats}</span>
                        </a>
                    </div>
                </div>
            </div>`);

        document.getElementById("es_market_summary_button").addEventListener("click", () => { this._startLoading(); });

        if (SyncedStorage.get("showmarkettotal")) {
            this._startLoading();
        }
    }

    async _startLoading() {

        const statusNode = document.getElementById("es_market_summary_status");

        HTML.inner(statusNode,
            `<img id="es_market_summary_throbber" src="//community.cloudflare.steamstatic.com/public/images/login/throbber.gif">
            <span>
                <span id="esi_market_stats_progress_description">${Localization.str.loading} </span>
                <span id="esi_market_stats_progress"></span>
            </span>`);

        HTML.afterEnd(statusNode, '<div class="market_search_game_button_group" id="es_market_summary"></div>');

        if (await this._load()) {
            statusNode.remove();
        } else {
            document.getElementById("es_market_summary_throbber").remove();
            document.getElementById("esi_market_stats_progress_description").remove();
        }
    }

    async _load() {

        let {startListing, purchaseTotal, saleTotal} = LocalStorage.get("market_stats");
        let curStartListing = null;
        const transactions = new Set();
        let stop = false;

        // If startListing is missing, reset cached data to avoid inaccurate results.
        if (startListing === null && (purchaseTotal !== null || saleTotal !== null)) { // TODO when is startListing `null`?
            purchaseTotal = {};
            saleTotal = {};
        }

        function updatePrices(dom, start) {

            const nodes = dom.querySelectorAll(".market_listing_row");
            for (const node of nodes) {
                if (node.id) {
                    if (transactions.has(node.id)) {

                        // Duplicate transaction, don't count in totals twice.
                        continue;
                    } else {
                        transactions.add(node.id);
                    }
                } else {
                    console.error("Could not find id of transaction", node); // TODO are there any implications?
                }
                const type = node.querySelector(".market_listing_gainorloss").textContent;
                let isPurchase;
                if (type.includes("+")) {
                    isPurchase = true;
                } else if (type.includes("-")) {
                    isPurchase = false;
                } else {
                    continue;
                }
                if (!curStartListing && start === 0) {
                    curStartListing = node.id;
                }

                // Stop when cached data is reached.
                if (node.id === startListing) {
                    stop = true;
                    break;
                }

                const priceNode = node.querySelector(".market_listing_price");
                if (!priceNode) { continue; }

                // TODO: CNY and JPY share the same symbol, so will return CNY for both.
                // Only is an issue where account changes from one to the other.
                const symbol = CurrencyManager.getCurrencySymbolFromString(priceNode.textContent);
                const price = Price.parseFromString(priceNode.textContent, CurrencyManager.fromSymbol(symbol).abbr);

                if (isPurchase) {
                    purchaseTotal[price.currency] = (purchaseTotal[price.currency] || 0) + price.value;
                } else {
                    saleTotal[price.currency] = (saleTotal[price.currency] || 0) + price.value;
                }
            }

            const net = {};
            const allCurrencies = new Set([...Object.keys(saleTotal), ...Object.keys(purchaseTotal)]);
            allCurrencies.forEach((currency) => {
                net[currency] = (saleTotal[currency] || 0) - (purchaseTotal[currency] || 0);
            });

            let netText = Localization.str.net_gain;

            HTML.inner("#es_market_summary",
                `<div>
                    ${Localization.str.purchase_total}
                    ${Object.entries(purchaseTotal).map(([currency, value]) => (
                        `<span class="es_market_summary_item">
                            ${new Price(value, currency)}
                        </span>`
                    )).join("\n")}
                </div>
                <div>
                    ${Localization.str.sales_total}
                    ${Object.entries(saleTotal).map(([currency, value]) => (
                        `<span class="es_market_summary_item">
                            ${new Price(value, currency)}
                        </span>`
                    )).join("\n")}
                </div>
                <div>
                    ${netText}
                    ${Object.entries(net).map(([currency, value]) => (
                        `<span class="es_market_summary_item" style="color: ${value < 0 ? "red" : "green"};">
                            ${new Price(value, currency)}
                        </span>`
                    )).join("\n")}
                </div>`);
        }

        const pageSize = 500; // Max number of transactions Steam allows to fetch per request
        let pages = -1;
        let currentPage = 0;
        let totalCount = null;
        const pageRequests = [];
        let failedRequests = 0;

        const progressNode = document.querySelector("#esi_market_stats_progress");
        const url = new URL("/market/myhistory/render/", "https://steamcommunity.com/");
        url.searchParams.set("count", pageSize);

        async function nextRequest() {
            const request = pageRequests.shift();
            url.searchParams.set("start", request.start);
            request.attempt += 1;
            request.lastAttempt = Date.now(); // TODO this field is set but never read
            if (request.attempt > 1) {
                await TimeUtils.timer(2000);
            } else if (request.attempt > 4) {

                // Give up after four tries
                throw new Error(`Failed to load market history page ${url}`);
            }

            const data = await RequestData.getJson(url.toString());
            const dom = HTML.toDom(data.results_html); // TODO use DOMParser since there's no need to sanitize?

            /*
             * Request may fail with results_html === "\t\t\t\t\t\t<div class=\"market_listing_table_message\">
             * There was an error loading your market history. Please try again later.</div>\r\n\t"
             * Note the error message is localized!
             */
            if (dom.querySelector(".market_listing_table_message") !== null) {
                pageRequests.push(request);
                failedRequests += 1; // TODO what if this request succeeds in later attempts?
                return null; // TODO change the return type to avoid implicit conversions on line 189 ?
            }

            updatePrices(dom, request.start);

            return data.total_count;
        }

        try {
            pageRequests.push({"start": 0, "attempt": 0, "lastAttempt": 0});

            /*
             * TODO this should be rewritten, this disable here is not necessary. Also functions should be split,
             *  they are intervowen between regular code
             */
            // eslint-disable-next-line no-unmodified-loop-condition -- stop is modified in updatePrices, called by nextRequest
            while (pageRequests.length > 0 && !stop) {
                const t = await nextRequest();
                if (pages < 0 && t > 0) {
                    totalCount = t;
                    pages = Math.ceil(totalCount / pageSize);
                    for (let start = pageSize; start < totalCount; start += pageSize) {
                        pageRequests.push({"start": start, "attempt": 0, "lastAttempt": 0});
                    }
                }

                progressNode.textContent = `${++currentPage}${failedRequests > 0 ? -failedRequests : ""}/${pages < 0 ? "?" : pages} (${transactions.size}/${totalCount})`;
            }
        } catch (err) {
            failedRequests += 1;
            console.error(err);
        }

        if (failedRequests === 0) {
            progressNode.textContent = "";
            LocalStorage.set("market_stats", {"startListing": curStartListing, purchaseTotal, saleTotal});
            return true;
        }

        /**
         * TODOs to consider
         * 1. Store failed ranges separately so they can be retried later, and/or add a "refresh" button to recalculate from scratch
         * 2. After testing, Steam starts throwing 429s after 30 requests (30 * 500 = 15000 items), sometimes earlier.
         *  Add a "continue" button to allow continuing where we left off.
         */
        progressNode.textContent = Localization.str.transactionStatus
            .replace("__failed__", failedRequests)
            .replace("__size__", transactions.size)
            .replace("__total__", totalCount);
        return false;
    }
}
