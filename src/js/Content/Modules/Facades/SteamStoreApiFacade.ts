import BackgroundSender from "@Core/BackgroundSimple";
import {EAction} from "@Background/EAction";
import type {TAppDetail} from "@Background/Modules/Store/_types";

export default class SteamStoreApiFacade {

    static async fetchAppDetails(appid: number, filter: string|undefined=undefined): Promise<TAppDetail|null> {
        return await BackgroundSender.send2(EAction.AppDetails, {appid, filter});
    }
}
