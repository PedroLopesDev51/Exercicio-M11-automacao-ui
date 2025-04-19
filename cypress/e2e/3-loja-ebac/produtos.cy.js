/// <reference types="cypress"/>


describe('funcionalidade: Produtos', () => {
   
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
   
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
        .contains('Aero Daily Fitness Tee')
            .click()

            cy.get('#tab-title-description > a') .should('contain', 'Descrição')

        
    });
});