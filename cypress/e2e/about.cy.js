import { aboutPage } from "../pages/about";

const firstFancyDescription = require('../fixtures/fancyDescription.json')
const leadershipTeamTestData = require('../fixtures/leadershipTeam.json')
const brandsTestData = require('../fixtures/brands.json')

describe("About page", () => {
    beforeEach(() => {
        cy.visit('/about')
        aboutPage.checkAboutUrl()
        aboutPage.checkIfFancyTitleIsDisplayed()

    },

        it('Check if proper description is displayed on about page', () => {
            aboutPage.checkIfFancyDescriptionIsDisplayed(String(firstFancyDescription))
        }),

        leadershipTeamTestData.forEach((person) => {
            it(
                `Check if ${person.position} is displayed on about page`, () => {
                    aboutPage.checkIfLeadershipTeamTitleIsDisplayed()
                    aboutPage.checkIfEmplyeeIsDisplayed(person.name)

                }

            )
        }),

        brandsTestData.forEach((brand) => {
            it(`Check if brand ${brand} is displayed on about page`, () => {
                aboutPage.checkIfOurClientsHeaderIsDisplayed()
                aboutPage.checkIfOurClientsIsDisplayed(brand)
                // its just an example so it covers only 1st line of brands
            })
        })
    )
})