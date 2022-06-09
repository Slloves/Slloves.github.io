describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  })
  it('Go to another page', ()=>{
    cy.contains('Camaras').click()
  })
  it('Go to another page', ()=>{
    cy.contains('About').click()
  })
  it('Go to another page', ()=>{
    cy.contains('Contato').click()
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

