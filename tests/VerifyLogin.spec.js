import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Epay login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.login();
  await loginPage.verifyLoginSuccess();
  await loginPage.navigateToAdminManager();
  await loginPage.navigateToUserContactManager();
});
