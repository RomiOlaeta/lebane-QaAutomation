import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';

 /**
 * Author: Romina Olaeta
 */
// 
  test(
   
    '[P0] [CP-LOGIN-001] Login exitoso #login #regression #smoke',
  async ({ page }) => {

      const loginPage = new LoginScreen(page);

      await loginPage.navigate();

      await loginPage.login(
        process.env.USER_EMAIL!,
        process.env.USER_PASSWORD!
      );

      await expect(
        await loginPage.getSuccessLoginMessage()
      ).toBeVisible();
    }
     );
test(
  '[P1] [CP-LOGIN-002] Usuario inexistente #login #negative #regression',
  async ({ page }) => {
    const loginPage = new LoginScreen(page);

    await loginPage.navigate();

    await loginPage.login(
      'usuario.inexistente@lebane.app',
      process.env.USER_PASSWORD!
    );

    await expect(
      await loginPage.getInvalidCredentialsMessage()
    ).toBeVisible();
  }
);

test(
  '[P1] [CP-LOGIN-003] Contraseña incorrecta #login #negative #regression',
  async ({ page }) => {
    const loginPage = new LoginScreen(page);

    await loginPage.navigate();

    await loginPage.login(
      process.env.USER_EMAIL!,
      'PasswordIncorrecta123'
    );

    await expect(
      await loginPage.getInvalidCredentialsMessage()
    ).toBeVisible();
  }
);

test(
  '[P2] [CP-LOGIN-004] Campos obligatorios vacíos #login #negative #regression',
  async ({ page }) => {
    const loginPage = new LoginScreen(page);

    await loginPage.navigate();
    await loginPage.clickLogin();

    await expect(
      await loginPage.getRequiredEmailMessage()
    ).toBeVisible();

    await expect(
      await loginPage.getRequiredPasswordMessage()
    ).toBeVisible();
  }
);

test(
  '[P2] [CP-LOGIN-005] Formato de email inválido #login #negative #regression',
  async ({ page }) => {
    const loginPage = new LoginScreen(page);

    await loginPage.navigate();

    await loginPage.login(
      'emailinvalido',
      process.env.USER_PASSWORD!
    );

    await expect(
      await loginPage.getInvalidEmailFormatMessage()
    ).toBeVisible();
  }

  );