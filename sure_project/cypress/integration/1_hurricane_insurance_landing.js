/// <reference types="cypress" />

describe('Hurricane Insurance Landing Page', () => {
  beforeEach(() => {
    cy.visit('https://sure-qa-challenge.vercel.app/')
  })

  it('Hurricane Insurance Landing Page Loads', () => {
    cy.get('.jss7 > .MuiTypography-root').should('have.text', 'Hurricane Insurance')
    cy.get('.MuiInputBase-input') //Zip code text field appears
    cy.get('.MuiButton-label').should('have.text', 'Get a quote')
    cy.title().should('include', 'Hurricane Insurance') //Tab title
  })

  it('Customer submits blank zip code field returns Required message', () => {
    cy.contains('Get a quote').click()
    cy.get('.MuiFormHelperText-root').should('have.text', 'Required')
    cy.contains('What building material is your home constructed with?').should('not.exist')
  })

  it('Customer submits invalid zip code with less than 5 characters returns invalid zip code message', () => {
    //Zip Code Testing Options
    const invalidShortZipCode= '1234'
    cy.get('.MuiInputBase-input').type(`${invalidShortZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()
  })

  it('Customer submits invalid zip code with all letters returns invalid zip code message', () => {
    const invalidLetterZipCode= 'ABCDE'
    cy.get('.MuiInputBase-input').type(`${invalidLetterZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()
  })
  
  it('Customer submits invalid zip code with numbres and letters returns invalid zip code message', () => {
    const invalidLetterNumberZipCode= '12AB5'
    cy.get('.MuiInputBase-input').type(`${invalidLetterNumberZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()
  })
  
  it('Customer submits invalid zip code that includes special characters return invalid zip code message', () => {
    const invalidSpecialCharactersZipCode= '12!?*#'
    cy.get('.MuiInputBase-input').type(`${invalidSpecialCharactersZipCode}`)
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.contains('Get a quote').click()
    cy.get('.MuiInputBase-input').clear()
  })

  it('Customer submits invalid zip code longer than 5 characters returns invalid zip code message', () => {
    //BUG SURE-27 JIRA TICKET
    const invalidLongZipCode= '1234567890'
    cy.get('.MuiInputBase-input').type(`${invalidLongZipCode}`)
    cy.contains('Get a quote').click()
    cy.get('.MuiFormHelperText-root').should('have.text', 'Invalid zip code')
    cy.get('.MuiInputBase-input').clear()
  })

  it('Customer submits valid five digit zip code and moves onto the Building Materials page', () => {
    const validZipCode= '68406'
    //Valid zip code with 5 numerical digits advances to the Building Material page by clicking the Get a quote button
    cy.get('.MuiInputBase-input').type(`${validZipCode}`)
    cy.contains('Get a quote').click()
    cy.contains('What type of material is your home constructed with?') //Entering in valid zip code advances you to the Building Materials page
    cy.go('back') //Navigating back to Landing page to continue test

    //Valid zip code with 5 numerical digits advances to the Building Material page by hitting the keyboard enter button
    cy.get('.MuiInputBase-input').type(`${validZipCode}{enter}`)//typing in validZipCode and then pressing the keyboard enter button
    cy.contains('What type of material is your home constructed with?') //Entering in valid zip code advances you to the Building Materials page
  })
})