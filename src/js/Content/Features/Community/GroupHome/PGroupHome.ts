/**
 * @contentScript
 * @match *://steamcommunity.com/groups/*
 */

import CommunityPage from "../../CommunityPage";
import CGroupHome from "./CGroupHome";

(new CommunityPage()).run(() => new CGroupHome());
