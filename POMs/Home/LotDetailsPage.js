import {expect, test} from "@playwright/test";

export class LotDetailsPage {
    constructor(page) {
        this.page = page

        this.lotDetails = {
            lotName: this.page.locator('main h1'),
            favouriteCounter: this.page.locator('main div[class*="fav-button"] span'),
            currentBid: this.page.locator('main div.be-lot-core-bidding-panel div[class*="bid-amount"]').first()
        }
    }

    /**
     * @param detail
     * @returns {string}
     */
    async getDetail(detail){
        let result
        await test.step(`Get the ${detail} detail from the GUI`, async()=> {
            await this.lotDetails[detail].waitFor()
            result = await this.lotDetails[detail].textContent()
        })
        return result
    }

    /**
     * @param list
     * @returns {array}
     */
    async getListOfDetails(list){
        let details = {}
        await test.step(`Get the ${list} details from the GUI`, async()=> {
            await this.page.waitForSelector('main div.be-lot-core-bidding-panel', {state: 'visible'})

            for (let element of list){
                details[element] = await this.getDetail(element)
            }
        })
        return details
    }

    // TODO: can be used when it needs to verify the details parsed from the page
    // /**
    //  * @param expected
    //  * @returns {void}
    //  */
    // async verifyLotDetails(expected){
    //     await this.page.waitForSelector('main div.be-lot-core-bidding-panel', {state: 'visible'})
    //
    //     let actual
    //     await test.step(`Verify this list of details for the lot: ${list}`, async()=> {
    //         actual = await this.getListOfDetails(Object.keys(expected))
    //
    //         for (let key of Object.keys(expected)){
    //             expect(actual[key], `Actual: ${actual[key]} vs. Expected: ${expected[key]}`).toEqual(expected[key])
    //         }
    //     })
    // }
}