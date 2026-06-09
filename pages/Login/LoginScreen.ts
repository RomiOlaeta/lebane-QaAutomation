import { Page } from '@playwright/test';
import { LoginLocators } from './LoginLocators';

export class LoginScreen {
  constructor(private page: Page) {}

 async navigate() {
  await this.page.goto('/sign-in');
  await this.page.locator(LoginLocators.emailInput).waitFor();
}

  async enterEmail(email: string) {
    await this.page.locator(LoginLocators.emailInput).fill(email);
  }

  async enterPassword(password: string) {


  await this.page.locator('input[type="password"]').click();
  await this.page.locator('input[type="password"]').fill(password);
}

  async clickLogin() {
    await this.page.locator(LoginLocators.loginButton).click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getInvalidCredentialsMessage() {
    return this.page.locator(LoginLocators.invalidCredentialsMessage);
  }

  async getRequiredEmailMessage() {
    return this.page.locator(LoginLocators.requiredEmailMessage);
  }

  async getRequiredPasswordMessage() {
    return this.page.locator(LoginLocators.requiredPasswordMessage);
  }

  async getSuccessLoginMessage() {
    return this.page.locator(LoginLocators.successLoginMessage);
  }

  async getInvalidEmailFormatMessage() {
  return this.page.locator(LoginLocators.invalidEmailFormatMessage);
}
}