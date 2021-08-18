/// <reference types="cypress" />

describe('Hurricane Insurance Water Proximity page', () => {
    beforeEach(() => {
        //Going directly to this page since workflows aren't dependent on Water Proximity page
        cy.visit('https://sure-qa-challenge.vercel.app/water-proximity')
    })

    it('Water Proximity Page Loads', () => {
        cy.get('.MuiFormControlLabel-root').first().should('have.text', 'Yes') //confirming the Yes option appears first
        cy.get('.MuiFormControlLabel-root').last().should('have.text', 'No') //confirming the No option appears last
        cy.get('.MuiButton-label').should('have.text', 'Next')
        cy.contains('Is your home located within 1 mile of a body of water?')
        })
    
    it('Customer submits without selecting a water proximity option', () => {
        //Next button dooesn't have a disabled UI or UX state. SURE-31 JIRA TICKET.
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //since there is no UX message telling users they need to select an option, i'm validating the header on the current page doesn't show up
        cy.contains('Your available plans').should('not.exist') //since there is no UX message telling users they need to select an option, i'm validating the header on the next page doesn't show up
    })

    it('Customer successfully submits water proximity and advances to the Quote page', () => {
        //Selecting the YES water proximity value advances you to the Quote screen
        cy.contains('Yes').click()
        cy.contains('Next').click()
        cy.contains('Standard') //Confirming user advances to the Qutoes page
        cy.go('back') //Navigating back to Water Proximity page to continue test
        
        //Selecting the NO water proximity value advances you to the Quote screen
        cy.contains('No').click()
        cy.contains('Next').click()
        cy.contains('Standard') //Confirming user advances to the Qutoes page
    }) 
})