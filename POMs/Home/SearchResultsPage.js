import {expect, test} from "@playwright/test";

export class SearchResultsPage {
    constructor(page) {
        this.page = page
        this.pageName = 'Search Results'
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
            console.log(`${this.pageName}: Get all the search results`)
            await this.page.waitForSelector('h2#lot-list', {state: 'visible'})
            results = await this.searchResults.all()
        })
        console.log(`${this.pageName}: select a lot n. ${position}`)
        let lot = results[position - 1]
        console.log(`${this.pageName}: The lot n. ${position} has title = ${await lot.locator('h3').textContent()}`)
        return lot
    }

    /**
     * @param searchResult
     * @returns {void}
     */
    async openLotDetails(searchResult){
        await test.step(`Open the Details for the found lot`, async () => {
            let link = await searchResult.locator(this.linkToLot).getAttribute('href')
            console.log(`${this.pageName}: The link to the lot: ${link}`)
            await searchResult.click()
            let pageUrl = await this.page.url()
            console.log('Opens the Lot Details page...')
            expect(pageUrl, 'The Lot Details Page has been opened').toEqual(link)
        })
    }
}