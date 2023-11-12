import { test as base } from '@playwright/test';
import {HomePage} from "./POMs/Home/HomePage";

export const test = base.extend({
    /**@type {HomePage}*/ homePage: async ({ baseURL, browser }, use) => {
        // Set up the fixture
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto(baseURL);

        const pom = new HomePage(page)
        await pom.closeCookiesBanner()

        // Use the fixture value in the tests
        await use(pom)

        // Close the browser context at the end of the test
        await context.close()
    },
});