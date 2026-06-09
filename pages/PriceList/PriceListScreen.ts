import { Page, expect } from '@playwright/test';
import { PriceListLocators } from './PriceListLocators';

export class PriceListScreen {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateInitialPriceListIsVisible() {
    await expect(this.page.getByText('Nombre de la lista de precios')).toBeVisible({ timeout: 10000 });
    await expect(this.page.locator('input[value*="Lista precios"]')).toBeVisible({ timeout: 10000 });
  }

  async modifyUnitPrice(newPrice: string) {
  const row101 = this.page
    .getByRole('row')
    .filter({ has: this.page.getByText('101', { exact: true }) });

  const priceCell = row101.getByRole('cell').nth(12);

  await priceCell.scrollIntoViewIfNeeded();

  let priceInput = this.page.locator('input[placeholder="Valor..."]');

  for (let i = 0; i < 3; i++) {
    await priceCell.dblclick();

    if (await priceInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      break;
    }
  }

  await expect(priceInput).toBeVisible({ timeout: 10000 });

  await priceInput.fill(newPrice);
  await priceInput.press('Enter');

  await expect(this.page.getByText('150.000')).toBeVisible({ timeout: 10000 });
}
  async validateUpdatedPrice() {
    await expect(this.page.getByText('150.000')).toBeVisible({ timeout: 10000 });
  }

  async clickUnitsTab() {
    await this.page.locator(PriceListLocators.unitsTab).click();
  }
async clickTemplates() {
  await this.page.locator(PriceListLocators.templatesButton).click();
}

async clickUploadUnitsTemplate() {
  await this.page.getByRole('button', {
    name: 'Cargar Template de Unidades',
    exact: true,
  }).click();
}

  async uploadTemplate(filePath: string) {
    await this.page.locator(PriceListLocators.fileInput).setInputFiles(filePath);
  }

  async validateTemplateUnitsWereCreated() {
    await expect(this.page.getByText('49 filas')).toBeVisible({ timeout: 30000 });
  }

  async validateNewPriceListIsCreated() {
    await expect(this.page.getByRole('button', { name: /Lista precios/i })).toBeVisible({ timeout: 30000 });
  }
async deleteFirstUnitFromPriceList() {
  await this.page
    .getByRole('button', { name: 'Eliminar' })
    .first()
    .click();

  const confirmButton = this.page.getByRole('button', {
    name: 'Confirmar',
  });

  await expect(confirmButton).toBeVisible({ timeout: 10000 });

  await confirmButton.click();
}

async validateUnitWasRemoved() {
  await expect(
    this.page.getByText(/Unidad eliminada de la lista de precios/i)
  ).toBeVisible({ timeout: 30000 });

  await expect(
    this.page.getByText('48 filas')
  ).toBeVisible({ timeout: 30000 });
}
}