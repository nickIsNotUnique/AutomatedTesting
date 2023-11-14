const { test, expect } = require('./../fixtures.js');

let lot = 'train'
let position = 2
let details = ['lotName', 'favouriteCounter', 'currentBid']

test('Smoke test: Search for a Lot', async ({ pagesManager }) => {
    await test.step(`Search for the ${lot} lot from the Home Page`, async () => {
        await pagesManager.homePage.searchByKeyword(lot)
    })

    await test.step(`Open the Lot Details Page for ${position} lot from the Search Results Page`, async () => {
        let result = await pagesManager.searchResultsPage.selectSearchResult(position)
        await pagesManager.searchResultsPage.openLotDetails(result)
    })

    await test.step(`Verify the set of details of the lot: ${details}`, async () => {
        let lotDetails = await pagesManager.lotDetailsPage.getListOfDetails(details)
        console.log(`The list of details of the selected lot: ${JSON.stringify(lotDetails)}`)
    })
})