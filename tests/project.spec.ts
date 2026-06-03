import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { ProjectScreen } from '../pages/Project/ProjectScreen';
import { ProjectLocators } from '../pages/Project/ProjectLocators';

/**
 * Author: Romina Olaeta
 */

const projectData = {
  name: `Proyecto QA`,
  currency: 'ARS',
  country: 'Argentina',
  state: 'Buenos Aires',
  city: 'La Plata',
  street: 'Arriola',
  number: '2500',
  startDate: '03/06/2026',
  endDate: '03/12/2026',
  constructionType: 'Casa',
  adjustmentMode: 'Provisorio',
  company: `CRIBA S.A.`,
};

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginScreen(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await expect(
    page.getByRole('button', { name: 'Agregar proyecto' }).first()
  ).toBeVisible();
});

test(
  '[P0] [CP-PROY-001] Visualizar pantalla principal #project #smoke #regression',
  async ({ page }) => {
    await expect(
      page.locator(ProjectLocators.addProjectButton).first()
    ).toBeVisible();
  }
);

test(
  '[P0] [CP-PROY-002] Acceder a la pantalla Agregar proyecto #project #smoke #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();

    await expect(page.locator(ProjectLocators.nameProject)).toBeVisible();
    await expect(page.locator(ProjectLocators.currencyDropdown)).toBeVisible();
    await expect(page.locator(ProjectLocators.registerButton)).toBeVisible();
  }
);

test(
  '[P0] [CP-PROY-003] Crear proyecto exitosamente #project #positive #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();
    await projectPage.createProject(projectData);

    await expect(page.getByText(projectData.name)).toBeVisible();
  }
);

test(
  '[P1] [CP-PROY-004] Validar campos obligatorios vacíos #project #negative #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();

    await expect(
      page.locator(ProjectLocators.registerButton)
    ).toBeDisabled();

    await expect(page.locator(ProjectLocators.nameProject)).toBeVisible();
    await expect(page.locator(ProjectLocators.currencyDropdown)).toBeVisible();
    await expect(page.locator(ProjectLocators.countryDropdown)).toBeVisible();
  }
);

test(
  '[P2] [CP-PROY-005] Validar carga de logo del proyecto #project #positive',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();

    await projectPage.uploadLogo('image-logo/lebane_app_logo.jpg');

    await expect(
      page.locator('img[alt="Uploaded Logo"]')
    ).toBeVisible();
  }
);

test(
  '[P1] [CP-PROY-006] Validar dependencia entre país, estado y ciudad #project #negative #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();

    await expect(page.locator(ProjectLocators.stateDropdown)).toBeVisible();
    await expect(page.locator(ProjectLocators.cityDropdown)).toBeVisible();

    await projectPage.selectCountry(projectData.country);
    await expect(page.locator(ProjectLocators.stateDropdown)).toBeVisible();

    await projectPage.selectState(projectData.state);
    await expect(page.locator(ProjectLocators.cityDropdown)).toBeVisible();
  }
);

test(
  '[P2] [CP-PROY-007] Validar mensaje al ingresar moneda inexistente #project #negative #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);

    await projectPage.clickAddProject();

    await page.locator(ProjectLocators.currencyDropdown).fill('MONEDA_INEXISTENTE');

    await expect(
      page.getByText('No se encontraron opciones disponibles')
    ).toBeVisible();
  }
);