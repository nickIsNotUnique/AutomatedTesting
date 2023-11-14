import {expect, test} from "@playwright/test";

export class LotDetailsPage {
    constructor(page) {
        this.page = page

        this.lotDetails = {
            lotName: this.page.locator(),
            favouriteCounter: this.page.locator(),
            currentBid: this.page.locator()
        }
    }

    async getDetail(detail){
        let result
        await test.step(`Get the ${detail} detail from the GUI`, async()=> {
            await this.lotDetails[detail].waitFor()
            result = await this.lotDetails[detail].textContent()
        })
        return result
    }

    async getListOfDetails(list){
        let details
        await test.step(`Get the ${list} details from the GUI`, async()=> {
            for (let element of list){
                details[element] = await this.getDetail(element)
            }
        })
        return details
    }

    async verifyLotDetails(expected){
        await this.page.waitForLoadState('domcontentloaded')

        let actual
        await test.step(`Verify this list of details for the lot: ${list}`, async()=> {
            actual = await this.getListOfDetails(Object.keys(expected))

            for (let key of Object.keys(expected)){
                expect(actual[key], `Actual: ${actual[key]} vs. Expected: ${expected[key]}`).toEqual(expected[key])
            }
        })
    }
}