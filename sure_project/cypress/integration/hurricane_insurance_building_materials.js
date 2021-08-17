/// <reference types="cypress" />

describe('hurricane insurance building materials page', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/building-material')
        })
    
    it('Building Materials Page Loads', () => {
        cy.get('.MuiFormControlLabel-root').first().should('have.text', 'Straw')
        cy.contains('Sticks') //NEED TO CLEAN UP ASSERTION METHOD
        cy.get('.MuiFormControlLabel-root').last().should('have.text', 'Bricks')
        cy.get('.MuiButton-label').should('have.text', 'Next')
        // Test below is a known failure due to a bug. SURE-29 JIRA TICKET. 
        cy.get('.jss5 > .MuiTypography-root').should('have.text', 'What building material is your home constructed with?')
    })

    it('Customer submits without selecting a building material option', () => {
    //Next button dooesn't have a disabled UI or UX state. SURE-28 JIRA TICKET.
        cy.contains('Next').click()
        cy.get('.jss5 > .MuiTypography-root').should('not.have.text', 'Is your home located within 1 mile of a body of water?') //since there is no UX message telling users they need to select an option, i'm vailding the header on the next page doesn't show up
    })

    it('Customer successfully submits building material and advances to the Water Proximity page', () => {
        //Straw Building Material validation
        cy.contains('Straw').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.go('back') //Navigating back to Building Materials page to continue test

        //Sticks Building Material validation
        cy.contains('Sticks').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.go('back') //Navigating back to Building Materials page to continue test

        //Sticks Building Material validation
        cy.contains('Bricks').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        })
    
})