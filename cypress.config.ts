import { defineConfig } from 'cypress'
import { seed, deleteTestUser, deleteAllUserSubjects } from 'prisma/seed'

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				async seed() {
					await seed()
					return null
				},
				async deleteTestUser() {
					await deleteTestUser()
					return null
				},
				async deleteAllUserSubjects() {
					await deleteAllUserSubjects()
					return null
				},
			})
		},
	},
})
