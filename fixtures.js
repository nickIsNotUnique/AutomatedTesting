import { test as base } from '@playwright/test';
import {PagesManager} from "./POMs/PagesManager";

export const test = base.extend({
    /**@type {PagesManager}*/ pagesManager: [async ({ baseURL, browser }, use) => {
        await test.step(`Create a new browser context, open the Home page, close cookies banner`, async () => {
            // Set up the fixture
            const context = await browser.newContext()
            const page = await context.newPage()

            const pom = new PagesManager(page)
            console.log('Opens the Home page...')
            await pom.page.goto(baseURL);
            await pom.homePage.closeCookiesBanner()

            // Use the fixture value in the tests
            await use(pom)
        })
    }, {scope: 'test'}]
});