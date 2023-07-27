import loc from "../support/locators"

describe('template spec', () => {

  beforeEach(() => {

    cy.visit('/')
    
  });
  
  it('Valid Login', () => {

    cy.accesslogin(loc.LOGIN.USER, loc.LOGIN.PASSWORD)

  })

  it('Invalid User Login', ()=> {

    cy.accesslogin(loc.LOGIN.INVALID_USER, loc.LOGIN.PASSWORD)

  })

  it('Invalid Password Login', () => {

    cy.accesslogin(loc.LOGIN.USER, loc.LOGIN.W_PASSWORD)
    
  });

})