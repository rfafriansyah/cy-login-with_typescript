import {LoginPage} from './LoginPage/login_pages.cy'
 
const loginPage = new LoginPage

it("login tes", function() {
  
  loginPage.navigate("https://trytestingthis.netlify.app/")
  loginPage.enterUsername('test')
  loginPage.enterPassword('test')
  loginPage.clickLogin()
})