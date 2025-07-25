describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('Test 123')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get("[data-qa='comment-text']").contains('Test 123')
    cy.get("[data-qa='comment-text']").each(($element) => {
      if ($element.text() === 'Test 123') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})
// Caso de teste:
// Acessar a página: localhost:5173/
// Escrever “Test 123” no primeiro campo de comentário
// Publicar o comentário
// Verificar se ele aparece na lista de comentários
// Procurar esse comentário e clicar no botão de deletar correspondente