import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://tst.lebane.app/sign-in');
  }

  async enterEmail(email: string) {
    await this.page.locator('input[name="email"]').fill(email);
  }
}