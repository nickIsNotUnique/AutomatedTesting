const { test, expect } = require('./../fixtures.js');

/** @type String */ let lot
test('Smoke test: Search for a Lot', async ({ homePage }) => {
    lot = 'train'

    await test.step('Search on the Home Page', async () => {
        await homePage.searchByKeyword(lot)
        console.log('Test settings')
    })
})