import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { ProjectScreen } from '../pages/Project/ProjectScreen';
import { UnitsScreen } from '../pages/Units/UnitsScreen';
import { UnitsLocators } from '../pages/Units/UnitsLocators';
import { createProjectData, createUnitData } from '../data/testData';

test.setTimeout(60000);

const unitData = {
  pricePerSquareMeter: '1500',
  expectedProfit: '20',
  floors: '10',
  basements: '2',
  typology: 'Monoambiente',
  unitsPerFloor: '4',
  parkingSpaces: '20',
  streetView: 'https://www.google.com/maps',
  googleMaps: 'https://www.google.com/maps',
  priceListVersion: 'Lista QA',
};

test.beforeEach(async ({ page }) => {
  const projectData = createProjectData();

  const loginPage = new LoginScreen(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  const projectPage = new ProjectScreen(page);

  await projectPage.clickAddProject();

  await projectPage.createProject(projectData);

  await expect(
    page.getByText(projectData.name, { exact: true }).first()
  ).toBeVisible({ timeout: 60000 });

  await projectPage.navigateToUnits();

  await expect(
    page.getByText('Actualizar datos del proyecto')
  ).toBeVisible({ timeout: 30000 });
});

test(
  '[P0] [CP-UNIT-001] Validar campos obligatorios vacíos #units #negative #regression',
  async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Guardar' })
    ).toBeVisible();

    await expect(
      page.locator(UnitsLocators.pricePerSquareMeterBox)
    ).toBeVisible();

    await expect(
      page.locator(UnitsLocators.floorsBox)
    ).toBeVisible();

    await expect(
      page.locator(UnitsLocators.typologiesDropdown)
    ).toBeVisible();

    await expect(
      page.locator(UnitsLocators.unitsPerFloorBox)
    ).toBeVisible();
  }
);

test(
  '[P0] [CP-UNIT-002] Guardar configuración de unidades exitosamente #units #positive #regression',
  async ({ page }) => {
    const unitsPage = new UnitsScreen(page);

    await unitsPage.completeRequiredFields(unitData);

    await unitsPage.clickSave();

    await expect(
      page.getByText('Error al actualizar los datos del proyecto')
    ).not.toBeVisible({ timeout: 15000 });
  }
);

test(
  '[P1] [CP-UNIT-003] Validar campos numéricos #units #negative #regression',
  async ({ page }) => {
    await page.locator(UnitsLocators.pricePerSquareMeterBox).fill('abc');
    await page.locator(UnitsLocators.floorsBox).fill('abc');
    await page.locator(UnitsLocators.unitsPerFloorBox).fill('abc');

    await expect(
      page.locator(UnitsLocators.pricePerSquareMeterBox)
    ).toHaveValue('');

    await expect(
      page.locator(UnitsLocators.floorsBox)
    ).toHaveValue('');

    await expect(
      page.locator(UnitsLocators.unitsPerFloorBox)
    ).toHaveValue('');
  }
);

test(
  '[P1] [CP-UNIT-004] Validar moneda ingresada #units #positive #regression',
  async ({ page }) => {
    await expect(
      page.getByText('Moneda')
    ).toBeVisible();

    await expect(
  page.locator(UnitsLocators.currencyDropdown)
).toHaveValue('ARS');
  }
);
