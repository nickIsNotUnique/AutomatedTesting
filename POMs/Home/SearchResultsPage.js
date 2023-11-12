import {expect, test} from "@playwright/test";

export class SearchResultsPage {
    constructor(page) {
        this.page = page

        // this.searchResults = this.page.locator('[data-testid="object-list-display-options-container"] ~ div > div > div').all()
    }
}