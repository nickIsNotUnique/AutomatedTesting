const { test, expect } = require('./../fixtures.js');

/** @type String */ let lot
/** @type Number */ let position
test('Smoke test: Search for a Lot', async ({ pagesManager }) => {
    lot = 'train'
    position = 2

    await test.step(`Search for the ${lot} lot from the Home Page`, async () => {
        await pagesManager.homePage.searchByKeyword(lot)
    })

    await test.step(`Check that the Search Results Page had been opened`, async () => {
        console.log('Test settings')
    })

    // await test.step(`Check that the Search Results Page contains the corresponding results`, async () => {
    // })

    await test.step(`Open the Lot Details Page for ${position} lot from the Search Results Page`, async () => {
        console.log('Test settings')
    })
})