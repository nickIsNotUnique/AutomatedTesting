const { test, expect } = require('./../fixtures.js');

let keyword = 'train'
let position = 2
let details = ['lotName', 'favouriteCounter', 'currentBid']

test(`Smoke test: Search for a Lot by a keyword: ${keyword}`, async ({ pagesManager }) => {
    await test.step(`Search for the ${keyword} lot from the Home Page`, async () => {
        await pagesManager.homePage.searchByKeyword(keyword)
    })

    await test.step(`Open the Lot Details Page for ${position} lot from the Search Results Page`, async () => {
        let result = await pagesManager.searchResultsPage.selectSearchResult(position)
        await pagesManager.searchResultsPage.openLotDetails(result)
    })

    await test.step(`Get the set of details of the lot: ${details}`, async () => {
        let lotDetails = await pagesManager.lotDetailsPage.getListOfDetails(details)
        test.expect(lotDetails, `The list of details of the selected lot: ${JSON.stringify(lotDetails)}`).toBeDefined()
        console.log(`The list of details of the selected lot: ${JSON.stringify(lotDetails)}`)
    })
})