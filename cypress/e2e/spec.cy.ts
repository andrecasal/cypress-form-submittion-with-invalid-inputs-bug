describe('User registration', () => {
	it('Shows error if password is less than 8 characters', () => {
		cy.visit('http://localhost:3000/create-account')
		cy.get('html').should('have.class', 'hydrated')

		cy.findByLabelText('Email').click().type('someemail@email.com')
		cy.findByLabelText('Password').click().type('1234567')
		cy.findByText('Criar conta').click()

		cy.findByLabelText('Password').click().invoke('prop', 'validity').should('deep.include', { tooShort: true })
	})
})
