/// <reference types="cypress" />

describe('hurricane insurance building materials page', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/')
        cy.get('.MuiInputBase-input').type('68046')
        cy.contains('Get a quote').click()
    })
    
    it('Customer successfully receives Straw building material with Yes Water Proximity quote', () => {
        //Straw Building Material with Yes Water Proximity quote
        cy.contains('Straw').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.contains('Yes').click()
        cy.contains('Next').click()
        cy.contains('Your available plans')
        //Standard Package Quote Option Appaers
        cy.get('.jss47 > .MuiTypography-root').should('have.text', 'Standard')
        cy.get('.jss48 > .MuiTypography-root').should('have.text', '$1360')
        cy.get('.jss49 > .MuiTypography-root').should('have.text', 'Basic protection of your home against wind damage caused by hurricanes and other storms.')
        cy.get('.jss50 > .MuiButtonBase-root').should('have.text', 'Choose Standard')
        
        //Advanced Package Quote Option Appaers
        cy.get('.jss52 > .MuiTypography-root').should('have.text', 'Complete')
        cy.get('.jss53 > .MuiTypography-root').should('have.text', '$2267')
        cy.get('.jss54 > .MuiTypography-root').should('have.text', 'Extra protection against wind damage caused by hurricanes and other storms.')
        cy.get('.jss55 > .MuiTypography-root').should('have.text', 'Covers your home, as well as other structures on your property including sheds, garages, and fences.')
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Include Flood Protection (+$971)')
        cy.get('.jss61 > .MuiButtonBase-root').should('have.text', 'Choose Complete')
    })

    it('Customer successfully receives Straw building material with No Water Proximity quote', () => {
        //Straw Building Material with No Water Proximity quote
        cy.contains('Straw').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.contains('No').click()
        cy.contains('Next').click()
        cy.contains('Your available plans')
        //Standard Package Quote Option Appaers
        cy.get('.jss47 > .MuiTypography-root').should('have.text', 'Standard')
        cy.get('.jss48 > .MuiTypography-root').should('have.text', '$1360')
        cy.get('.jss49 > .MuiTypography-root').should('have.text', 'Basic protection of your home against wind damage caused by hurricanes and other storms.')
        cy.get('.jss50 > .MuiButtonBase-root').should('have.text', 'Choose Standard')
        //Advanced Package Quote Option Appaers
        cy.get('.jss52 > .MuiTypography-root').should('have.text', 'Complete')
        cy.get('.jss53 > .MuiTypography-root').should('have.text', '$2267')
        cy.get('.jss54 > .MuiTypography-root').should('have.text', 'Extra protection against wind damage caused by hurricanes and other storms.')
        cy.get('.jss55 > .MuiTypography-root').should('have.text', 'Covers your home, as well as other structures on your property including sheds, garages, and fences.')
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Include Flood Protection (+$971)')
        cy.get('.jss61 > .MuiButtonBase-root').should('have.text', 'Choose Complete')

        //Straw Building Material with Yes Water Proximity quote
        cy.contains('Straw').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.contains('Yes').click()
        cy.contains('Next').click()
        cy.contains('Your available plans')
        //Standard Package Quote Option Appaers
        cy.get('.jss47 > .MuiTypography-root').should('have.text', 'Standard')
        cy.get('.jss48 > .MuiTypography-root').should('have.text', '$1360')
        cy.get('.jss49 > .MuiTypography-root').should('have.text', 'Basic protection of your home against wind damage caused by hurricanes and other storms.')
        cy.get('.jss50 > .MuiButtonBase-root').should('have.text', 'Choose Standard')
        //Advanced Package Quote Option Appaers
        cy.get('.jss52 > .MuiTypography-root').should('have.text', 'Complete')
        cy.get('.jss53 > .MuiTypography-root').should('have.text', '$2267')
        cy.get('.jss54 > .MuiTypography-root').should('have.text', 'Extra protection against wind damage caused by hurricanes and other storms.')
        cy.get('.jss55 > .MuiTypography-root').should('have.text', 'Covers your home, as well as other structures on your property including sheds, garages, and fences.')
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Include Flood Protection (+$971)')
        cy.get('.jss61 > .MuiButtonBase-root').should('have.text', 'Choose Complete')
    })
})