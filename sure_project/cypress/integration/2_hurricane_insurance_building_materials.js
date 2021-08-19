/// <reference types="cypress" />

describe('Hurricane Insurance Building Materials page', () => {
    beforeEach(() => {
        //Going directly to this page since workflows aren't dependent on Zip Code page
        cy.visit('https://sure-qa-challenge.vercel.app/building-material')
    })
            
    it('Building Materials Page Loads', () => {
        cy.get('.MuiFormControlLabel-root').first().should('have.text', 'Straw') //Confirming Straw is the first item
        cy.contains('Sticks') //NEED TO CLEAN UP ASSERTION METHOD.
        cy.get('.MuiFormControlLabel-root').last().should('have.text', 'Bricks') //Confirming Straw is the last item
        cy.get('.MuiButton-label').should('have.text', 'Next') //Confirming Building Materials submit button copy
        // Test below is a known failure due to a bug. SURE-29 JIRA TICKET. 
        cy.get('.jss5 > .MuiTypography-root').should('have.text', 'What building material is your home constructed with?') //BUG | SURE-29
    })

    it('Customer clicks Next without selecting a building material option', () => {
    //Next button dooesn't have a disabled UI or UX state. SURE-28 JIRA TICKET.
        cy.contains('Next').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','straw').should('not.be.checked') //Confirming Straw radio is not checked
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','sticks').should('not.be.checked') //Confirming Sticks radio is not checked
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','bricks').should('not.be.checked') //Confirming Bricks radio is not checked
        cy.contains('Is your home located within 1 mile of a body of water?').should('not.exist') //since there is no UX message telling users they need to select an option, i'm validating the header on the next page doesn't show up
    })

    it('Customer successfully selects and submits straw building material options and advances to the Water Proximity page', () => {
        //Straw Building Material validation
        cy.contains('Straw').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','straw').should('be.checked') //Confirming Straw radio is checked
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
    })

    it('Customer successfully selects and submits sticks building material options and advances to the Water Proximity page', () => {
        //Sticks Building Material validation
        cy.contains('Sticks').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','sticks').should('be.checked') //Confirming Sticks radio is checked
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
    })

    it('Customer successfully selects and submits bricks building material options and advances to the Water Proximity page', () => {
        //Sticks Building Material validation
        cy.contains('Bricks').click()
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','bricks').should('be.checked') //Confirming Bricks radio is checked
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
    })
})