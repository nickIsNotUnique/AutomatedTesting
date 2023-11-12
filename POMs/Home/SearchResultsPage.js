import {expect, test} from "@playwright/test";

export class SearchResultsPage {
    constructor(page) {
        this.page = page

        this.searchResults = this.page.locator('[data-testid="object-list-display-options-container"] ~ div > div > div').all()
        this.linkToLot = this.page.locator('div > a')
    }

    async selectSearchResult(position){
        return this.searchResults[position-1]
    }

    async openLotDetails(searchResult){
        await test.step(`Open the Details for the lot #${this.searchResults.indexOf(searchResult)+1}`, () => {})
        let link = await searchResult.locator(this.linkToLot).getAttribute('href')

        const detailsRequest = this.page.waitForResponse(
            response => response.url() === link && response.status() === 200
        )
        await searchResult.click()
        await detailsRequest
    }
}