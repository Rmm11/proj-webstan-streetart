describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h2').contains(
      'Bem-vindo ao StreetArt, a melhor loja da faculdade Eniac'
    );
  });
});
