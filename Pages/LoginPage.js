import { expect } from 'allure-playwright';
import dotenv from 'dotenv';

// Use ENV_FILE or default to envinorments/.env.tabint
const envFile = process.env.ENV_FILE || 'environments/';
dotenv.config({ path: envFile });

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[contains(@id,'_txtUserName')]");
    this.passwordField = page.locator("//input[contains(@id,'_txtPassword')]");
    this.loginButton = page.locator("//input[contains(@id,'_btnLogin')]");
    this.adminManagerLink = page.locator("//p[@id='main_body_hcard_pAdmin']/a");
    this.userContactManagerLink = page.locator("//a[@href='users_search.aspx' and contains(text(), '[User') and contains(text(), 'Contact Manager')]");
  }

  async navigateToLogin() {
    await this.page.goto(process.env.BASE_URL);
  }

  async login(username = process.env.EPAY_USERNAME, password = process.env.EPAY_PASSWORD) {
    console.log('USERNAME:', username);
    await this.usernameField.click();
    await this.usernameField.fill('');
    await this.usernameField.fill(username);
    await this.passwordField.click();
    await this.passwordField.fill('');
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    // Verify that the login was successful by checking the URL
    console.log('Current URL:', this.page.url());
    expect(this.page.url()).toBe(process.env.homePageUrl, 'Login was not successful, home page URL does not match expected value.');
    // Wait for the admin link to be visible as a sign of successful login
    return this.page.waitForSelector("//p[@id='main_body_hcard_pAdmin']/a", { state: 'visible', timeout: 10000 });
  }

  async navigateToAdminManager() {
    await this.adminManagerLink.click();
  }

  async navigateToUserContactManager() {
    await this.userContactManagerLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.userContactManagerLink.click();
  }
}