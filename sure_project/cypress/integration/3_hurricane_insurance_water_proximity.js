/// <reference types="cypress" />

describe('hurricane insurance building materials page', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/water-proximity')
        })

    it('Building Materials Page Loads', () => {
        cy.get('.MuiFormControlLabel-root').first().should('have.text', 'Yes')
        cy.get('.MuiFormControlLabel-root').last().should('have.text', 'No')
        cy.get('.MuiButton-label').should('have.text', 'Next')
        // Test below is a known failure due to a bug. SURE-29 JIRA TICKET. 
        cy.get('.jss5 > .MuiTypography-root').should('have.text', 'Is your home located within 1 mile of a body of water?')
        })
    
    it('Customer submits without selecting a building material option', () => {
        //Next button dooesn't have a disabled UI or UX state. SURE-28 JIRA TICKET.
        cy.contains('Next').click()
        cy.get('.jss5 > .MuiTypography-root').should('have.text', 'Is your home located within 1 mile of a body of water?') //since there is no UX message telling users they need to select an option, i'm validating the header on the current page doesn't show up
        cy.get('.jss5 > .MuiTypography-root').should('not.have.text', 'Your available plans') //since there is no UX message telling users they need to select an option, i'm validating the header on the next page doesn't show up
    })

    it('Customer successfully submits water proximity and advances to the Quote page', () => {
        //Selecting the YES water proximity value advances you to the Quote screen
        cy.contains('Yes').click()
        cy.contains('Next').click()
        cy.get('.jss18 > .MuiTypography-root').should('have.text', 'Your available plans')
        cy.go('back') //Navigating back to Building Materials page to continue test
        
        //Selecting the NO water proximity value advances you to the Quote screen
        cy.contains('No').click()
        cy.contains('Next').click()
        cy.get('.jss36 > .MuiTypography-root').should('have.text', 'Your available plans')
    })
})