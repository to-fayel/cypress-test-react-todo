/* eslint-disable no-undef */
/// <reference types="Cypress"/>


describe('App Component', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('http://localhost:3000')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
    })

    it('Verify URL and TITLE', () => {
        cy.url().should('include', 'localhost')
        cy.url().should('eq', 'http://localhost:3000/')

        cy.title().should('include', 'React')
        cy.title().should('eq', 'React App')
    })

    it('Verify input and button', () => {
        // eslint-disable-next-line no-undef
        cy.get('input').type('todo-1')
        cy.get("[type='submit']").click()
        cy.get('p').should('have.text', 'todo-1')
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get("input[type='checkbox']").uncheck()
        cy.get('#edit').click()
        cy.get("[type='submit']").click()
        cy.get('#dlt').click()
    })

    it('Verify pendingBar and clearItems', () => {
        cy.get('input').type('todo-1')
        cy.get("[type='submit']").click()
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get('.message').should('have.text', 'You have no pending task')
        cy.get('#remove').click()
    })

})