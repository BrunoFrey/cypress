describe('Login', () => {
    it('Realizar login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Act
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('#login-button').click()

        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })


    it.only('Realizar login informando credenciais invalidas', () => {
         // Arrange

        cy.visit('https://www.saucedemo.com/v1/index.html')
        

        // Act

        cy.get('[data-test="username"]').type('user.invalid')

        cy.get('[data-test=password]').type('senha')

        cy.get('#login-button').click()

        // Assert
        cy.get('[data-test="error"]')
        .should(
            'contain.text',
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')

    })
})