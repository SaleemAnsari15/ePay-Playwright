export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = page.locator('#LoginContent_txtUserName');
      this.passwordField = page.locator('#LoginContent_txtPassword');
      this.loginButton = page.locator('#LoginContent_btnLogin');
      this.adminManagerLink = page.locator("//p[@id='main_body_hcard_pAdmin']/a");
      this.userContactManagerLink = page.locator("//a[@href='users_search.aspx' and contains(text(), '[User') and contains(text(), 'Contact Manager')]");
    }
  
    async navigateToLogin() {
      await this.page.goto('https://hcard-tabint.ghx.com/content/login.aspx');
    }
  
    async login(username, password) {
      await this.usernameField.click();
      await this.usernameField.fill(username);
      await this.passwordField.click();
      await this.passwordField.fill(password);
      await this.loginButton.click();
    }
  
    async navigateToAdminManager() {
      await this.adminManagerLink.click();
    }
  
    async navigateToUserContactManager() {
      await this.userContactManagerLink.click();
    }
  }