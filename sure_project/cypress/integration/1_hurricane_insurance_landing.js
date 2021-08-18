/// <reference types="cypress" />

describe('Hurricane Insurance Landing Page', () => {
  beforeEach(() => {
    cy.visit('https://sure-qa-challenge.vercel.app/')
  })

  it('Hurricane Insurance Landing Page Loads', () => {
    cy.get('.jss7 > .MuiTypography-root').should('have.text', 'Hurricane Insurance')
    cy.get('.MuiInputBase-input') //Zip code text field appears
    cy.get('.MuiButton-label').should('have.text', 'Get a quote')
  })

  it('Customer submits blank zip code field', () => {
    cy.contains('Get a quote').click()
    cy.get('.MuiFormHelperText-root').should('have.text', 'Required')
  })

  it('Customer submits invalid zip coode', () => {
    //Zip Code Testing Options
    const invalidShortZipCode= '1234'
    const invalidLetterNumberZipCode= '12AB5'
    const invalidLetterZipCode= 'ABCDE'
    const invalidLongZipCode= '1234567890'

    //Zip codes with less than 5 characters return invalid zip code message
    cy.get('.MuiInputBase-input').type(`${invalidShortZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()

    //Zip codes including letters return invalid zip code message
    cy.get('.MuiInputBase-input').type(`${invalidLetterZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()

    //Zip codes including letters and numbers return invalid zip code message
    cy.get('.MuiInputBase-input').type(`${invalidLetterNumberZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()
   
    //Zip codes longer than 5 characters return invalid zip code message
    //BUG SURE-27 JIRA TICKET
    cy.get('.MuiInputBase-input').type(`${invalidLongZipCode}`)
    cy.contains('Get a quote').click()
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.get('.MuiInputBase-input').clear()
  })

  it('Customer submites valid zip code', () => {
    const validZipCode= '68406'
    //Valid zip code with 5 numerical digits advances to the Building Material page by clicking the Get a quote button
    cy.get('.MuiInputBase-input').type(`${validZipCode}`)
    cy.contains('Get a quote').click()
    cy.contains('What type of material is your home constructed with?') //Entering in valid zip code advances you to the Building Materials page
    cy.go('back') //Navigating back to Landing page to continue test

    //Valid zip code with 5 numerical digits advances to the Building Material page by clicking the Get a quote button
    cy.get('.MuiInputBase-input').type(`${validZipCode}{enter}`)//typing in validZipCode and then pressing the keyboard enter button
    cy.contains('What type of material is your home constructed with?') //Entering in valid zip code advances you to the Building Materials page
  })
})