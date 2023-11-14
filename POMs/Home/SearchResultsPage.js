import {expect, test} from "@playwright/test";

export class SearchResultsPage {
    constructor(page) {
        this.page = page
        this.title = this.page.locator('h1')
        this.searchResults = this.page.locator('div.c-extended-lot-card')
        this.linkToLot = this.page.locator('a')
    }

    /**
     * @param position
     * @returns {element}
     */
    async selectSearchResult(position){
        let results
        await test.step(`Select the lot n. ${position}`, async () => {
            await this.page.waitForSelector('h2#lot-list', {state: 'visible'})
            results = await this.searchResults.all()
        })
        return results[position - 1]
    }

    /**
     * @param searchResult
     * @returns {void}
     */
    async openLotDetails(searchResult){
        await test.step(`Open the Details for the found lot`, async () => {
            let link = await searchResult.locator(this.linkToLot).getAttribute('href')
            await searchResult.click()
            let pageUrl = await this.page.url()
            expect(pageUrl, 'The Lot Details Page has been opened').toEqual(link)
        })
    }
}