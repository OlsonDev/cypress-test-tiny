/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.intercept('GET', 'https://cataas.com/cat').as('cat')
    cy.wait(2000) // For you to get a window over Cypress
    cy.visit('./global-loading.html')
    cy.get('#load-content').click()
    cy.wait('@cat')
    cy.get('#new-btn').click()
    cy.contains('Hello Cypress!').should('be.visible')
  })
})