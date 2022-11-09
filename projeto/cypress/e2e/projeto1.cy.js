/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Teste no site My Anime List', () => {

  it("Caso de teste: Realizando Registro com Falha(sem Senha)", () => {
    cy.visit("https://myanimelist.net/")
    cy.get('.btn-signup').click()
    let usuario = criaUsuario()
    cy.get('#loginEmail').type(usuario[2])
    cy.get(':nth-child(2) > .inputtext').type(usuario[0])
    cy.get('#password').click()
    cy.get('#create-account').should('be.disabled')
    cy.wait(500)
  })

  it("Caso de teste: Realizando Registro com Falha(Usuario Ja Existe)", () => {
    cy.visit("https://myanimelist.net/")
    cy.get('.btn-signup').click()
    let usuario = criaUsuario()
    cy.get('#loginEmail').type(usuario[2])
    cy.get(':nth-child(2) > .inputtext').type("Amiiya")
    cy.get('#password').type(usuario[1])
    cy.get('#create-account').should('be.disabled')
    cy.get('.username_checker_result_text').should("contain.text", "The username already exists")
    cy.wait(500)
  })

  it("Caso de teste: Login com falha(Usuario e Senha Incorretos)", () => {
    cy.visit("https://myanimelist.net/")
    cy.get('.header-menu-login > #malLogin').click()
    cy.get('#loginUserName').type("EsteUsuarioNaoExiste")
    cy.get('#login-password').type("EstaSenhaNaoExiste")
    cy.get('.pt16.ac > .inputButton').click()
    cy.get('.badresult').should('be.visible')
    cy.wait(500)
  })

  it("Caso de teste: Testa o botao de 'Forgot Username' e 'Forgot Password'", () =>{
    cy.visit("https://myanimelist.net/")
    cy.get('.header-menu-login > #malLogin').click()
    cy.get('[href="https://myanimelist.net/password.php?username=1&from=%2F"]').click()
    cy.get('.h1').should('contain.text', "Recover Username")
    cy.get('.pb8 > a').click()
    cy.get('.h1').should('contain.text', 'Recover Password')
  })

  it("Caso de teste: Testa se as obras da categoria de fantasia estao classificados como fantasia", ()=>{
    cy.visit("https://myanimelist.net/")
    cy.get(':nth-child(2) > .non-link').click()
    cy.get("#nav > li:nth-child(2) > ul > li:nth-child(1) > a").click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .genre-name-link').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .title > .title-text > .h2_manga_title > .link-title').click()
    cy.wait(1000)
    cy.get('.leftside > :nth-child(20)').should("contain.text", "Fantasy")
    cy.wait(500)
  })

  it("Caso de teste: Testa feramenta de busca do site para retornar o mesmo resultado em 2 linguas diferentes", ()=>{
    cy.visit("https://myanimelist.net/")
    cy.get('#topSearchText').type("Fullmetal Alchemist")
    cy.wait(2000)
    cy.get("#topSearchResultList > div:nth-child(2) > div > a > div > div").should("contain.text", "Fullmetal Alchemist")
    cy.get('#topSearchText').clear()
    cy.get('#topSearchText').type("Hagane no Renkinjutsushi")
    cy.wait(2000)
    cy.get("#topSearchResultList > div:nth-child(2) > div > a > div > div").should("contain.text", "Fullmetal Alchemist")
    cy.wait(500)

  })

})

function criaUsuario() {

  let hours = new Date().getHours().toString()
  let mins = new Date().getMinutes().toString()
  let segs = new Date().getSeconds().toString()

  let user = hours * mins + segs + 'Reviewer'
  let email = 'emailTeste'+ hours + mins * segs + '@gmail.com'
  let password = hours * mins * segs + 'testeSenha'
  let userInfo = [user,password,email]
  return userInfo
}