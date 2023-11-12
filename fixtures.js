import { test as base } from '@playwright/test';
import {PagesManager} from "./POMs/PagesManager";

export const test = base.extend({
    /**@type {PagesManager}*/ pagesManager: async ({ baseURL, browser }, use) => {
        // Set up the fixture
        const context = await browser.newContext()
        const page = await context.newPage()

        const pom = new PagesManager(page)
        await pom.page.goto(baseURL);
        await pom.homePage.closeCookiesBanner()

        // Use the fixture value in the tests
        await use(pom)

        // Close the browser context at the end of the test
        await context.close()
    },
});