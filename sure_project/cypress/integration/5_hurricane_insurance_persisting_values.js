describe('Setup for persisting values test cases for the Building Materials page', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/')
        cy.get('.MuiInputBase-input').type('68046') //Types in valid zip codoe
        cy.contains('Get a quote').click() //Submits Zip
    })

    it('Building Materials Straw value remain after navigation', () => {
        cy.contains('Straw').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss22').should('have.value','straw').should('be.checked') //Confirming Straw radio is checked
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.go('back')
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss50').should('have.value','straw').should('be.checked') //Confirming Straw radio remains is checked
    })

    it('Building Materials Straw value remain after refresh', () => {
        cy.contains('Straw').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss22').should('have.value','straw').should('be.checked') //Confirming Straw radio is checked
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
        cy.go('back')
        cy.reload()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','straw').should('be.checked') //Confirming Straw radio remains is checked
    })
})

describe('Setup for persisting values test cases for the Water Proximity page', () => {
    beforeEach(() => {
        cy.visit('https://sure-qa-challenge.vercel.app/')
        cy.get('.MuiInputBase-input').type('68046') //Types in valid zip codoe
        cy.contains('Get a quote').click() //Submits Zip
        cy.contains('Straw').click()
        cy.contains('Next').click()
        cy.contains('Is your home located within 1 mile of a body of water?') //validating user advances to next step/page
    })

    it('Water Proximity Yes value remains after navigation', () => {
        cy.contains('Yes').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').should('have.value','true').should('be.checked') //Confirming Straw radio is checked
        cy.contains('Next').click()
        cy.contains('Standard') //validating user advances to next step/page
        cy.go('back')
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss71').should('have.value','true').should('be.checked') //Confirming Straw radio remains is checked
    })

    it('Water Proximity Yes value remain after refresh', () => {
        cy.contains('Yes').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').should('have.value','true').should('be.checked') //Confirming Straw radio is checked
        cy.contains('Next').click()
        cy.contains('Standard') //validating user advances to next step/page
        cy.go('back')
        cy.reload()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss10').should('have.value','true').should('be.checked') //Confirming Straw radio remains is checked
    })
})

