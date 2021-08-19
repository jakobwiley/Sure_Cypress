/// <reference types="cypress" />

describe('Hurricane Insurance Water Proximity page', () => {
    beforeEach(() => {
        //Going directly to this page since workflows aren't dependent on Water Proximity page
        cy.visit('https://sure-qa-challenge.vercel.app/water-proximity')
    })

    it('Water Proximity Page Loads', () => {
        cy.get('.MuiFormControlLabel-root').first().should('have.text', 'Yes') //confirming the Yes option appears first
        cy.get('.MuiFormControlLabel-root').last().should('have.text', 'No') //confirming the No option appears last
        cy.get('.MuiButton-label').should('have.text', 'Next') //Water Proximity Submit button check
        cy.get('.jss5 > .MuiTypography-root').should('have.text', 'Is your home located within 1 mile of a body of water?') 
        })
    
    it('Customer clicks Next without selecting a water proximity option', () => {
        //Next button dooesn't have a disabled UI or UX state. SURE-31 JIRA TICKET.
        cy.contains('Next').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('not.be.checked') //Confirming Yes radio is not checked
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('not.be.checked') //Confirming No radio is not checked
        cy.contains('Standard').should('not.exist') //since there is no UX message telling users they need to select an option, i'm validating the header on the next page doesn't show up
        cy.contains('Is your home located within 1 mile of a body of water?') //since there is no UX message telling users they need to select an option, i'm validating the header on the current page displays
    })

    it('Customer successfully selects and submits YES water proximity option and advances to the Quote page', () => {
        //Selecting the YES water proximity value advances you to the Quote screen
        cy.contains('Yes').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('be.checked') //Confirming Yes radio is checked
        cy.contains('Next').click()
        cy.contains('Standard') //Confirming user advances to the Qutoes screen
    })
    
    it('Customer successfully selects and submits NO water proximity option and advances to the Quote page', () => {
        //Selecting the NO water proximity value advances you to the Quote screen
        cy.contains('No').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('be.checked') //Confirming No radio is checked
        cy.contains('Next').click()
        cy.contains('Standard') //Confirming user advances to the Qutoes screen
    }) 
})