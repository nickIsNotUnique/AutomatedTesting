import {expect, test} from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page
        this.pageName = 'Home'

        this.cookiesBanner = {
            close: this.page.locator('div.cw-cookies-bar').getByRole('button', {name: 'Continue without accepting'})
        }

        this.seachForm = {
            submit: this.page.locator('[class*="main-wrapper"] [data-react-component-assets="Search"]')
                .locator('div[data-testid="text-field-prefix"] button'),
            input: this.page.locator('[class*="main-wrapper"] [data-react-component-assets="Search"]')
                .getByPlaceholder('Search for brand, model, artist...')
        }
        this.searchForm = this.page.locator('[class*="main-wrapper"] [data-react-component-assets="Search"]')
    }

    /**
     * @returns {void}
     */
    async closeCookiesBanner(){
        await test.step(`Close the cookies banner if present`,async () => {
            await this.page.waitForTimeout(2000)

            if (this.cookiesBanner.close.isVisible()){
                console.log(`${this.pageName}: Close the cookies banner`)
                await this.cookiesBanner.close.click()
            }
        })
    }

    /**
     * @param keyword
     * @returns {void}
     */
    async searchByKeyword(keyword){
        await test.step(`Search by a ${keyword} keyword`,async () => {
            await this.searchForm.waitFor()
            await this.seachForm.input.fill(keyword)
            await this.seachForm.submit.click()
            await this.page.wait
            let pageUrl = await this.page.url()
            console.log('Opens the Search Results page...')
            expect(pageUrl, 'The Search Page has been opened').toContain(`/s/?q=${keyword}`)
        })
    }
}