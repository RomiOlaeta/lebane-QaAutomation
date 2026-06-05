import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { ProjectScreen } from '../pages/Project/ProjectScreen';
import { UnitsScreen } from '../pages/Units/UnitsScreen';
import { UnitsLocators } from '../pages/Units/UnitsLocators';

test.setTimeout(60000);

function createProjectData() {
  return {
    name: `Proyecto QA - ${Date.now()}-${Math.floor(Math.random() * 100000)}`,
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
}

const unitData = {
  number: `101-${Date.now()}`,
  priceSale: '150000',
  coveredMeters: '40',
  semiCoveredMeters: '5',
  uncoveredMeters: '10',
  commonMeters: '3',
  description: 'Departamento QA automatizado',
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
    page.getByRole('button', { name: 'Agregar unidad' })
  ).toBeVisible({ timeout: 30000 });
});

test(
  '[P0] [CP-UNIT-001] Validar campos obligatorios vacíos #units #negative #regression',
  async ({ page }) => {
    await page.getByRole('button', { name: 'Agregar unidad' }).click();

    const modal = page.getByRole('dialog');

    await expect(modal).toBeVisible();

    await modal.getByRole('button', { name: 'Agregar' }).click();

    await expect(modal.getByText('Número *')).toBeVisible();
    await expect(modal.getByText('Tipo *')).toBeVisible();
    await expect(modal.getByText('Oficinas *')).toBeVisible();
  }
);

test(
  '[P0] [CP-UNIT-002] Guardar configuración de unidad exitosamente #units #positive #regression',
  async ({ page }) => {
    const unitsPage = new UnitsScreen(page);

    await unitsPage.clickAddUnit();

    const modal = page.getByRole('dialog');

    await expect(modal).toBeVisible();

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

    await unitsPage.clickAddUnit();

    const modal = page.getByRole('dialog');

    await expect(modal).toBeVisible();

    await unitsPage.enterSalePrice('abc');
    await unitsPage.enterCoveredMeters('abc');

    await expect(
      modal.getByText('Precio Venta *').locator('..').getByRole('textbox')
    ).toHaveValue('');

    await expect(
      modal.getByText('Metros cubiertos').locator('..').getByRole('textbox')
    ).toHaveValue('');
  }
);

test(
  '[P1] [CP-UNIT-004] Validar moneda ingresada #units #positive #regression',
  async ({ page }) => {
    await page.getByRole('button', { name: 'Agregar unidad' }).click();

    const modal = page.getByRole('dialog');

    await expect(modal).toBeVisible();

    await expect(
      modal.getByText('Moneda *')
    ).toBeVisible();

    await expect(
      modal.getByRole('combobox', { name: 'Seleccionar' }).first()
    ).toBeVisible();
  }
);

test.skip(
  '[P2] [CP-UNIT-005] Validar botón de cruz para borrar campos opcionales #units #regression',
  async ({ page }) => {}
);