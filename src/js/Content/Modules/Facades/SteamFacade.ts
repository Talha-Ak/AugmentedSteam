import Messenger from "@Content/Modules/Messaging/Messenger";
import {MessageHandler} from "@Content/Modules/Messaging/MessageHandler";

export default class SteamFacade {

    // variables

    static global<T=any>(name: string): Promise<T> {
        return Messenger.get(MessageHandler.SteamFacade, "global", [name]);
    }

    static globalSet(name: string, value: any): void {
        Messenger.call(MessageHandler.SteamFacade, "globalSet", [name, value]);
    }

    // dialogs

    static showDialog(strTitle: string, strDescription: string, rgModalParams: any=undefined): void {
        Messenger.call(MessageHandler.SteamFacade, "showDialog", [strTitle, strDescription, rgModalParams]);
    }

    static showConfirmDialog(
        strTitle: string,
        strDescription: string,
        strOKButton: string|null=null,
        strCancelButton: string|null=null,
        strSecondaryActionButton: string|null=null
    ): Promise<"OK"|"SECONDARY"|"CANCEL"> {
        return Messenger.get(MessageHandler.SteamFacade, "showConfirmDialog", [
            strTitle, strDescription, strOKButton, strCancelButton, strSecondaryActionButton
        ]);
    }

    static showAlertDialog(
        strTitle: string,
        strDescription: string,
        strOKButton: string|null=null
    ): Promise<void> {
        return Messenger.get(MessageHandler.SteamFacade, "showAlertDialog", [
            strTitle, strDescription, strOKButton
        ]);
    }

    static showBlockingWaitDialog(strTitle: string, strDescription: string): void {
        Messenger.call(MessageHandler.SteamFacade, "showBlockingWaitDialog", [
            strTitle, strDescription
        ]);
    }

//    static showNicknameModal() {
//        return ShowNicknameModal();
//    }

    static dismissActiveModal() {
        Messenger.call(MessageHandler.SteamFacade, "dismissActiveModal");
    }

    // menu

    static showMenu(elemLink: string, elemPopup: string, align: string, valign: string, bLinkHasBorder: boolean): void {
        Messenger.call(MessageHandler.SteamFacade, "showMenu", [elemLink, elemPopup, align, valign, bLinkHasBorder]);
    }

    static hideMenu(elemLink: string, elemPopup: string): void {
        Messenger.call(MessageHandler.SteamFacade, "hideMenu", [elemLink, elemPopup]);
    }

    static changeLanguage(strTargetLanguage: string, bStayOnPage: boolean): void {
        Messenger.call(MessageHandler.SteamFacade, "changeLanguage", [strTargetLanguage, bStayOnPage]);
    }

    // app pages

    static collapseLongStrings(selector: string): void {
        Messenger.call(MessageHandler.SteamFacade, "collapseLongStrings", [selector]);
    }

//    static updatePlaytimeFilterValues(hourMin, hourMax) {
//        return UpdatePlaytimeFilterValues(hourMin, hourMax);
//    }

//    // @param appid required, rest is optional
//    static removeFromWishlist(appid, divToHide, divToShowSuccess, divToShowError, navref, divToHide2) {
//        return RemoveFromWishlist(appid, divToHide, divToShowSuccess, divToShowError, navref, divToHide2);
//    }

//    // @param subid can be number or array
//    static addItemToCart(subid, bundleid, navdata) {
//        return window.AddItemToCart(subid, bundleid, navdata);
//    }

//    // events

    static bindAutoFlyoutEvents(): void {
        Messenger.call(MessageHandler.SteamFacade, "bindAutoFlyoutEvents");
    }

//    // dynamic store

//    static dynamicStoreInvalidateCache() {
//        return GDynamicStore.InvalidateCache();
//    }

//    static dynamicStoreDecorateItems(selector, bForceRecalculate) {
//        return GDynamicStore.DecorateDynamicItems($J(selector), bForceRecalculate);
//    }

//    static storeItemDataBindHover(selector, unAppID, unPackageID, unBundleID, rgAdditionalParams) {
//        GStoreItemData.BindHoverEvents($J(selector), unAppID, unPackageID, unBundleID, rgAdditionalParams);
//    }

//    // tooltips

    static vTooltip(selector: string, isHtml: boolean = false): void {
        Messenger.call(MessageHandler.SteamFacade, "vTooltip", [selector, isHtml]);
    }

//    // market

    static calculateFeeAmount(amount: number, publisherFee: number): Promise<{
        amount: number,
        fees: number
    }> {
        return Messenger.get(MessageHandler.SteamFacade, "calculateFeeAmount", [amount, publisherFee]);
    }

//    static calculateAmountToSendForDesiredReceivedAmount(receivedAmount, publisherFee) {
//        return CalculateAmountToSendForDesiredReceivedAmount(receivedAmount, publisherFee);
//    }

    static vCurrencyFormat(amount: number, currencyCode: string): Promise<string> {
        return Messenger.get(MessageHandler.SteamFacade, "vCurrencyFormat", [amount, currencyCode])
    }

//    // community

//    static initMiniprofileHovers() {
//        return InitMiniprofileHovers();
//    }

//    static execFriendAction(action, navid) {
//        return ExecFriendAction(action, navid);
//    }

//    static loadImageGroupOnScroll(elTarget, strGroup) {
//        LoadImageGroupOnScroll(elTarget, strGroup);
//    }

//    static showModalContent(url, titleBarText, titleBarURL, sizeToFit) {
//        ShowModalContent(url, titleBarText, titleBarURL, sizeToFit);
//    }

//    // selections

//    static updateSelection() {
//        return UpdateSelection();
//    }

//    static selectAll() {
//        return SelectAll();
//    }

//    static selectNone() {
//        return SelectNone();
//    }

//    static selectInverse() {
//        return SelectInverse();
//    }

//    // Wishlist

//    static wishlistOnScroll() {
//        return g_Wishlist.OnScroll();
//    }

//    // jQuery functions

//    static jq(selector) {
//        return $J(selector);
//    }

//    static jqOnClick(selector, callback) {
//        $J(selector).on("click", callback);
//    }

//    static jqAjax(settings) {
//        return $J.ajax(settings);
//    }

//    static jqGet(url, settings) {
//        return $J.get(url, settings);
//    }

//    static jqPost(url, settings) {
//        return $J.post(url, settings);
//    }
}
