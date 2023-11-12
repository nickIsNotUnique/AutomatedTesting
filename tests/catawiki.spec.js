const { test, expect } = require('./../fixtures.js');

/** @type String */ let lot
/** @type Number */ let position
/** @type Array */ let details
test('Smoke test: Search for a Lot', async ({ pagesManager }) => {
    lot = 'train'
    position = 2
    details = ['lotName', 'favouriteCounter', 'currentBid']

    await test.step(`Search for the ${lot} lot from the Home Page`, async () => {
        await pagesManager.homePage.searchByKeyword(lot)
    })

    await test.step(`Open the Lot Details Page for ${position} lot from the Search Results Page`, async () => {
        let result = await pagesManager.searchResults.selectSearchResult(position)
        await pagesManager.searchResults.openLotDetails(result)
    })

    await test.step(`Verify the set of details of the lot: ${details}`, async () => {
    })
})