/// <reference types="cypress" />


describe('Check the "Register"functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    })
     it('Check response with valid data for all fields', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()  
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname',{timeout:11000}).type('Elena','{ delay: 500 }').should('have.value', 'Elena')  
        cy.get('#middlename',{timeout:11000}).type('E') 
        cy.get('#lastname',{timeout:11000}).type('Loghin').should('have.value','Loghin')  
        cy.get('#email_address',{timeout:11000}).type('lorcv@amnesictampicobrush33.org').should('have.value', 'lorcv@amnesictampicobrush33.org')   
        cy.get('#password',{timeout:11000}).type('123456').should('have.value', '123456')
        cy.get('#confirmation',{timeout:11000}).type('123456').should('have.value', '123456')
        cy.get('.buttons-set > .button').click() 
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text', 'Thank you for registering with Main Website Store.')
    
    }) 
    it('Check response with valid data for requierd filds and empty not required fields', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname').type('Elena','{ delay: 500 }').should('have.value', 'Elena')
        cy.get('#middlename').should('have.not.value')
        cy.get('#lastname').type('Loghin').should('have.value','Loghin')
        cy.get('#email_address').type('llommrcov@amnesictampicobru3sh.org').should('have.value', 'llommrcov@amnesictampicobru3sh.org')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#confirmation').type('123456').should('have.value', '123456')
        cy.get('.buttons-set > .button').click() 
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text', 'Thank you for registering with Main Website Store.')
     }) 
    it('Check response only with  middle name field with data ', function(){
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname').should('have.not.value')
        cy.get('#middlename').type('E')
        cy.get('#lastname').should('have.not.value')
        cy.get('#email_address').should('have.not.value')
        cy.get('#password').should('have.not.value')
        cy.get('#confirmation').should('have.not.value')
        cy.get('.buttons-set > .button').click()
        cy.get('#advice-required-entry-firstname').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-lastname').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-email_address').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-password').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-confirmation').should('have.text', 'This is a required field.')
      })
    it('Check response with empty fields', function(){
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()   
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname').should('have.not.value')
        cy.get('#middlename').should('have.not.value')
        cy.get('#lastname').should('have.not.value')
        cy.get('#email_address').should('have.not.value')
        cy.get('#password').should('have.not.value')
        cy.get('#confirmation').should('have.not.value')
        cy.get('.buttons-set > .button').click()
        cy.get('#advice-required-entry-firstname').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-lastname').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-email_address').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-password').should('have.text', 'This is a required field.')
        cy.get('#advice-required-entry-confirmation').should('have.text', 'This is a required field.')
      })
    it('Check response with not matching password and confirm password ', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname').type('Elena','{ delay: 500 }').should('have.value', 'Elena')
        cy.get('#middlename').type('E')
        cy.get('#lastname').type('Loghin').should('have.value','Loghin')
        cy.get('#email_address').type('jomarcov@amnesicta3mpicobrush.org').should('have.value', 'jomarcov@amnesicta3mpicobrush.org')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#confirmation').type('234533').should('have.value', '234533')
        cy.get('#advice-validate-cpassword-confirmation').should('have.text','Please make sure your passwords match.')
        cy.get('.buttons-set > .button').click() 
      }) 
   it('Check response with invalid data in email address field', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click() 
        cy.get('#firstname').type('Elena','{ delay: 500 }').should('have.value', 'Elena')
        cy.get('#middlename').type('E')
        cy.get('#lastname').type('Loghin').should('have.value','Loghin')
        cy.get('#email_address').type('joomarcovamn@esictampicobrush.asdf').should('have.value', 'joomarcovamn@esictampicobrush.asdf')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#confirmation').type('123456').should('have.value', '123456')
        cy.get('.buttons-set > .button').click() 
      }) 
})
  
   