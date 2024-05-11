import FConfirmDeleteComment from "./FConfirmDeleteComment";
import FHideSpamComments from "./FHideSpamComments";
import type Feature from "@Content/Modules/Context/Feature";
import type Context from "@Content/Modules/Context/Context";
import CBase from "@Content/Features/Common/CBase";
import {ContextType} from "@Content/Modules/Context/ContextType";
import {FFavoriteEmoticons} from "./FFavoriteEmoticons.svelte";

export default class CCommunityBase extends CBase {

    constructor(type = ContextType.COMMUNITY_DEFAULT, features: (typeof Feature<Context>[]) = []) {

        features.push(
            FConfirmDeleteComment,
            FHideSpamComments,
            FFavoriteEmoticons,
        );

        super(type, features);
    }
}
