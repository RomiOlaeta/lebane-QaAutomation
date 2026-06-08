import { test, expect } from '@playwright/test';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { ProjectScreen } from '../pages/Project/ProjectScreen';
import { UnitsScreen } from '../pages/Units/UnitsScreen';
import { PriceListScreen } from '../pages/PriceList/PriceListScreen';
import { createProjectData, createUnitData } from '../data/testData';

test.setTimeout(60000);

/**
 * Author: Romina Olaeta
 */

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginScreen(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await expect(
    page.getByRole('button', { name: 'Agregar proyecto' }).first()
  ).toBeVisible({ timeout: 30000 });
});

test(
  '[P0] [CP-PRICE-001] Validar creación automática de lista de precios inicial #price #smoke #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);
    const unitsPage = new UnitsScreen(page);
    const priceListPage = new PriceListScreen(page);

    const projectData = createProjectData();
    const unitData = createUnitData();

    await projectPage.clickAddProject();
    await projectPage.createProject(projectData);

    await projectPage.navigateToUnits();

    await unitsPage.completeRequiredFields(unitData);

    await priceListPage.validateInitialPriceListIsVisible();
  }
);

test(
  '[P0] [CP-PRICE-002] Modificar precio de unidad #price #positive #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);
    const unitsPage = new UnitsScreen(page);
    const priceListPage = new PriceListScreen(page);

    const projectData = createProjectData();
    const unitData = createUnitData();
    const newPrice = '150000';

    await projectPage.clickAddProject();
    await projectPage.createProject(projectData);
    await projectPage.navigateToUnits();
    await unitsPage.completeRequiredFields(unitData);
    await unitsPage.clickSave();
    await priceListPage.clickUnitsTab();
    await priceListPage.modifyUnitPrice(newPrice);
    await priceListPage.validateUpdatedPrice();
  }
);

test(
  '[P0] [CP-PRICE-003] Crear unidades mediante carga de template #price #positive #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);
    const unitsPage = new UnitsScreen(page);
    const priceListPage = new PriceListScreen(page);

    const projectData = createProjectData();
     const unitData = createUnitData();

    await projectPage.clickAddProject();
    await projectPage.createProject(projectData);
    await projectPage.navigateToUnits();
    await unitsPage.completeRequiredFields(unitData);
    await unitsPage.clickSave();
    await priceListPage.clickUnitsTab();
    await priceListPage.clickTemplates();
    await priceListPage.clickUploadUnitsTemplate();
    await priceListPage.uploadTemplate(
      'image-logo/template_unidades_05-06-2026-17_52.xlsx'
    );

    await priceListPage.validateTemplateUnitsWereCreated();
    await priceListPage.validateNewPriceListIsCreated();
  }
);

test(
  '[P0] [CP-PRICE-004] Eliminar unidad y validar comportamiento de la lista de precios #price #positive #regression',
  async ({ page }) => {
    const projectPage = new ProjectScreen(page);
    const unitsPage = new UnitsScreen(page);
    const priceListPage = new PriceListScreen(page);

    const projectData = createProjectData();
    const unitData = createUnitData();

    await projectPage.clickAddProject();
    await projectPage.createProject(projectData);

    await projectPage.navigateToUnits();

    await unitsPage.completeRequiredFields(unitData);
    await unitsPage.clickSave();

    await priceListPage.clickUnitsTab();

    await priceListPage.deleteFirstUnitFromPriceList();

    await priceListPage.validateUnitWasRemoved();
  }
);