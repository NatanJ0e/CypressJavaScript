// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loc from "./locators"


Cypress.Commands.add('accesslogin', (user, pass) => {

    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(pass)
    cy.get('[data-test="login-button"]').click()
    if(user == loc.LOGIN.USER && pass == loc.LOGIN.PASSWORD){
        cy.get('.title')
        .should('have.text', 'Products')
    }else{
        cy.get('[data-test="error"]')
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

})