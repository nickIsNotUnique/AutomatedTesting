import {expect, test} from "@playwright/test";

export class SearchResultsPage {
    constructor(page) {
        this.page = page
        this.title = this.page.locator('h1')
        // this.total = this.page.locator('h2#lot-list')
        this.searchResults = this.page.locator('div.c-extended-lot-card')
        this.linkToLot = this.page.locator('a')
    }

    async selectSearchResult(position){
        await this.page.waitForSelector('h2#lot-list', {state: 'visible'})
        let results = await this.searchResults.all()
        return results[position-1]
    }

    async openLotDetails(searchResult){
        await test.step(`Open the Details for the found lot`, async () => {
            let link = await searchResult.locator(this.linkToLot).getAttribute('href')
            await searchResult.click()
            let pageUrl = await this.page.url()
            expect(pageUrl, 'The Lot Details Page has been opened').toEqual(link)
        })
    }
}