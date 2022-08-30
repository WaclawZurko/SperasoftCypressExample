const fancyTitle = '#fancy-title-4'
const fancyDescription = '#fancy-title-5'
const leadershipTeamTitle = '#fancy-title-9'
const employees = 'div.employees-grid.employees-grid--columns-5 ul'
const ourClientsHeader = '#clients'
const ourClients = 'div.clients'

export const aboutPage = {
    checkIfFancyTitleIsDisplayed: () => {
        cy.get(fancyTitle).scrollIntoView().contains("World Class Gaming Studio")
    },

    checkIfFancyDescriptionIsDisplayed: (description) => {
        cy.get(fancyDescription).contains(description)
    },

    checkIfLeadershipTeamTitleIsDisplayed: () => {
        cy.get(leadershipTeamTitle).scrollIntoView().should("be.visible")
    },

    checkIfEmplyeeIsDisplayed: (leadershipMember) => {
        cy.get(employees).scrollIntoView().contains(leadershipMember)
    },

    checkAboutUrl: () => {
        cy.url().should('include', 'about')
    },

    checkIfOurClientsHeaderIsDisplayed: () => {
        cy.get(ourClientsHeader).scrollIntoView().should("be.visible")
    },

    checkIfOurClientsIsDisplayed: (brand) => {
        cy.get(ourClients).scrollIntoView()
        cy.contains(brand)
    }
}
