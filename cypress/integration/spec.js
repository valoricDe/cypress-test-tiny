describe('user > login', () => {
  beforeEach(() => {
    cy.visit('https://advisor.fortunica-app.com/login')
  })

  const fillForm = () => ({
    email: cy.get('input[name="u"]').type('abc@example.com'),
    password: cy.get('input[name="p"]').type('asdfghjkl'),
  })

  it('foobar', () => {
    const { email, password } = fillForm()
    console.log(email, password)
    email.should('have.value', 'abc@example.com')
    password.should('have.value', 'asdfghjkl')
  })
})
