/// <reference types="cypress" />

describe('Setup for Straw Building Material Yes Water Proximity test cases', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/')
        cy.get('.MuiInputBase-input').type('68046') //Types in valid zip codoe
        cy.contains('Get a quote').click() //Submits Zip
        cy.contains('Straw').click() //Selects building material option
        cy.contains('Next').click() //Submits building material option
        cy.contains('Yes').click() //Selects water proximity option
        cy.contains('Next').click() //Submits watet proximity option
    })
    
    it('Standard Package Quote Options Appears for Straw Building Material and Yes Water Proximity values', () =>  {
        cy.get('.jss47 > .MuiTypography-root').should('have.text', 'Standard')
        cy.get('.jss48 > .MuiTypography-root').should('have.text', '$1360')
        cy.get('.jss49 > .MuiTypography-root').should('have.text', 'Basic protection of your home against wind damage caused by hurricanes and other storms.')
        cy.get('.jss50 > .MuiButtonBase-root').should('have.text', 'Choose Standard')
        cy.get('.jss44 > .MuiTypography-root').should('have.text', 'Your Available Plans') ////BUG - SURE-33
    })
    
    it('Complete Package Quote Options Appears for Straw Building Material and Yes Water Proximity values', () =>  {
        cy.get('.jss52 > .MuiTypography-root').should('have.text', 'Complete')
        cy.get('.jss53 > .MuiTypography-root').should('have.text', '$2267')
        cy.get('.jss54 > .MuiTypography-root').should('have.text', 'Extra protection against wind damage caused by hurricanes and other storms.')
        cy.get('.jss55 > .MuiTypography-root').should('have.text', 'Covers your home, as well as other structures on your property including sheds, garages, and fences.')
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Include Flood Protection (+$971)')
        cy.get('.jss60').should('not.be.checked') //Include Floood Protection checkbox should not be checked
        cy.get('.jss61 > .MuiButtonBase-root').should('have.text', 'Choose Complete')
    })
})

describe('Setup for Straw Building Material No Water Proximity test cases', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/')
        cy.get('.MuiInputBase-input').type('68046') //Types in valid zip codoe
        cy.contains('Get a quote').click() //Submits Zip
        cy.contains('Straw').click() //Selects building material option
        cy.contains('Next').click() //Submits building material option
        cy.contains('Yes').click() //Selects water proximity option
        cy.contains('Next').click() //Submits watet proximity option
    })
    
    it('Standard Package Quote Options Appears for Straw Building Material and No Water Proximity values', () =>  {
        cy.get('.jss47 > .MuiTypography-root').should('have.text', 'Standard')
        cy.get('.jss48 > .MuiTypography-root').should('have.text', '$1360')
        cy.get('.jss49 > .MuiTypography-root').should('have.text', 'Basic protection of your home against wind damage caused by hurricanes and other storms.')
        cy.get('.jss50 > .MuiButtonBase-root').should('have.text', 'Choose Standard') 
        cy.get('.jss44 > .MuiTypography-root').should('have.text', 'Your Available Plans') //BUG - SURE-33
    })

    it('Complete Package Quote Options Appears for Straw Building Material and No Water Proximity values', () =>  {
        cy.get('.jss52 > .MuiTypography-root').should('have.text', 'Complete')
        cy.get('.jss53 > .MuiTypography-root').should('have.text', '$2267') //BUG | SURE-37 SURE-38
        cy.get('.jss54 > .MuiTypography-root').should('have.text', 'Extra protection against wind damage caused by hurricanes and other storms.')
        cy.get('.jss55 > .MuiTypography-root').should('have.text', 'Covers your home, as well as other structures on your property including sheds, garages, and fences.')
        cy.get('.jss61 > .MuiButtonBase-root').should('have.text', 'Choose Complete')
        cy.get('.jss60').should('be.checked') //Flood Included Checkbox should be checked //Bug | SURE-44 
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Floood Protection Included') //BUG | SURE-45
    })
})
    
