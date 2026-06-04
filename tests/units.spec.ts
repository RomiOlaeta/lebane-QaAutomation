import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { ProjectScreen } from '../pages/Project/ProjectScreen';
import { UnitsScreen } from '../pages/Units/UnitsScreen';
import { UnitsLocators } from '../pages/Units/UnitsLocators';

test.setTimeout(60000);

const projectData = {
  name: `Proyecto QA - ${Date.now()}-${Math.floor(Math.random() * 1000)}`,
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
  company: 'CRIBA S.A.',
};

const unitData = {
  pricePerSquareMeter: '1500',
  expectedProfit: '20',
  floors: '10',
  basements: '2',
  typology: 'Monoambiente',
  unitsPerFloor: '4',
  parkingSpaces: '20',
  unitSubstate: 'Disponible',
  plan: 'Plano QA',
  render: 'Render QA',
  presentation: 'Presentación QA',
  video: 'Video QA',
  modelContract: 'Boleto QA',
  streetView: 'https://www.google.com/maps',
  googleMaps: 'https://www.google.com/maps',
  pointOfInterest: 'Cerca del centro',
  priceListVersion: 'Lista QA',
};

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginScreen(page);
  

  await loginPage.navigate();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  const projectPage = new ProjectScreen(page);

  await projectPage.clickAddProject();
  await projectPage.createProject(projectData);

  await expect(page).toHaveURL(/\/proyecto\/\d+$/, {
    timeout: 30000,
  });

  await projectPage.navigateToUnits();
});

test(
  '[P0] [CP-UNIT-001] Validar campos obligatorios vacíos #units #negative #regression',
  async ({ page }) => {
    const unitsPage = new UnitsScreen(page);

    await unitsPage.clickSave();

    await expect(
      page.locator(UnitsLocators.saveButton)
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
    const unitsPage = new UnitsScreen(page);

    await unitsPage.enterPricePerSquareMeter('abc');
    await unitsPage.enterExpectedProfit('abc');
    await unitsPage.enterFloors('abc');
    await unitsPage.enterBasements('abc');
    await unitsPage.enterUnitsPerFloor('abc');
    await unitsPage.enterParkingSpaces('abc');

    await expect(
      page.locator(UnitsLocators.pricePerSquareMeterBox)
    ).toHaveValue('');

    await expect(
      page.locator(UnitsLocators.expectedProfitBox)
    ).toHaveValue('');

    await expect(
      page.locator(UnitsLocators.floorsBox)
    ).toHaveValue('');
  }
);

test(
  '[P1] [CP-UNIT-004] Validar moneda ingresada #units #positive #regression',
  async ({ page }) => {
    await expect(
      page.locator(UnitsLocators.currencyDropdown)
    ).toHaveValue('ARS');

    await expect(
      page.locator(UnitsLocators.currencyDropdown)
    ).toBeDisabled();
  }
);

test.skip(
  '[P2] [CP-UNIT-005] Validar botón de cruz para borrar campos opcionales #units #regression',
  async ({ page }) => {
   
  }
);