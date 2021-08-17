/// <reference types="cypress" />

describe('Check log in functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    })

    it('Check response with valid data for all fields', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('ll6rcv@amnesictampicobrush33.org').should('have.value','ll6rcv@amnesictampicobrush33.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
        
    })

    it('Check response with invalid email address and valid password', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('jmarcov@amnesictampicobrush.oasdf').should('have.value', 'jmarcov@amnesictampicobrush.oasdf')
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li').should('have.text', 'Invalid login or password.')
     
})
    it('Check response with valid email address and invalid password', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('jmarcov@amnesictampicobrush.org').should('have.value', 'jmarcov@amnesictampicobrush.org')
        cy.get('#pass').type('12345').should('have.value','12345')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('#advice-validate-password-pass').should('have.text', 'Please enter 6 or more characters without leading or trailing spaces.')

})
    it('Check response with password field empty', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('jmarcov@amnesictampicobrush.oasdf').should('have.value', 'jmarcov@amnesictampicobrush.oasdf')
        cy.get('#pass').should('have.not.value')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('#advice-required-entry-pass').should('have.text', 'This is a required field.')
})
    it('Check response with both empty fields', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').should('have.not.value')
        cy.get('#pass').should('have.not.value')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('#advice-required-entry-email').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-pass').should('have.text','This is a required field.')
      
})
    
})