describe('My First Test', () => {
  it('Pagina Inicial', () => {
    cy.visit('/')
  })
  it('Link 1', ()=>{
    cy.contains('Camaras').click()
  })
  it('Link 2', ()=>{
    cy.contains('Quiénes somos').click()
  })
  it('Link 3', ()=>{
    cy.contains('Contacto').click()
  })
  it('Funcionan el Formulario', ()=>{
    cy.get('input[id="form1"]').type('Sergio')
    cy.get('input[id="form2"]').type('slloves101@gmail.com')
    cy.get('textarea[id="form3"]').type('Funciona Correctamente')
  })
  it('Redes Sociales', ()=>{
    cy.get('a[id="facebook"]').click()
    cy.get('a[id="twitter"]').click()
    cy.get('a[id="instagram"]').click()
    cy.get('a[id="tumblr"]').click()
  })
});

