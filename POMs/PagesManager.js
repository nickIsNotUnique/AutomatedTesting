import {expect, test} from "@playwright/test";
import {HomePage} from "./Home/HomePage";
import {SearchResultsPage} from "./Home/SearchResultsPage";
import {LotDetailsPage} from "./Home/LotDetailsPage";

export class PagesManager{
    constructor(page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.searchResultsPage = new SearchResultsPage(this.page)
        this.lotDetailsPage = new LotDetailsPage(this.page)
    }
}