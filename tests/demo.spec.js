import { test } from '@playwright/test';
import{LoginPage} from '../Pages/LoginPage';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login('hcarduser1', 'GHX!test01');
  await loginPage.navigateToAdminManager();
  await loginPage.navigateToUserContactManager();
});