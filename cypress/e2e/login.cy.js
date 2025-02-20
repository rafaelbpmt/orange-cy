<<<<<<< HEAD
=======
import userData from '../fixtures/user-data.json'

>>>>>>> cd88710 (Added userdata)
describe('Orange HRM Tests', () => {

/* objeto */
const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
<<<<<<< HEAD
=======
  dashboardGrid: ".orangehrm-dashboard-grid",
>>>>>>> cd88710 (Added userdata)
  wrongCredentialAlert: "[role='alert']"
} 

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
<<<<<<< HEAD
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
=======
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
>>>>>>> cd88710 (Added userdata)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
<<<<<<< HEAD
    cy.get(selectorsList.usernameField).type('Admin1')
    cy.get(selectorsList.passwordField).type('admin123')
=======
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
>>>>>>> cd88710 (Added userdata)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)  
  })

  })


