import { Page } from '@playwright/test';

export class UnitsScreen {
  constructor(private page: Page) {}

  private modal() {
    return this.page.getByRole('dialog');
  }

  async clickAddUnit() {
    await this.page.getByRole('button', {
      name: 'Agregar unidad',
      exact: true,
    }).click();
  }

  async clickSave() {
    await this.modal().getByRole('button', { name: 'Agregar' }).click();
  }

  async enterNumber(value: string) {
    await this.modal()
      .getByRole('textbox', { name: 'Ej: 101' })
      .fill(value);
  }

  async enterSalePrice(value: string) {
    await this.modal()
      .getByText('Precio Venta *')
      .locator('..')
      .getByRole('textbox')
      .fill(value);
  }

  async enterCoveredMeters(value: string) {
    await this.modal()
      .getByText('Metros cubiertos')
      .locator('..')
      .getByRole('textbox')
      .fill(value);
  }

  async enterSemiCoveredMeters(value: string) {
    await this.modal()
      .getByText('Metros semi-cubiertos')
      .locator('..')
      .getByRole('textbox')
      .fill(value);
  }

  async enterUncoveredMeters(value: string) {
    await this.modal()
      .getByText('Metros descubiertos')
      .locator('..')
      .getByRole('textbox')
      .fill(value);
  }

  async enterCommonMeters(value: string) {
    await this.modal()
      .getByText('Metros comunes')
      .locator('..')
      .getByRole('textbox')
      .fill(value);
  }

  async enterDescription(value: string) {
    await this.modal()
      .getByRole('textbox', {
        name: 'Ej: Departamento de 3 ambientes a estrenar...',
      })
      .fill(value);
  }

  async completeRequiredFields(unitData: {
    number: string;
    priceSale: string;
    coveredMeters: string;
    semiCoveredMeters: string;
    uncoveredMeters: string;
    commonMeters: string;
    description: string;
  }) {
    await this.enterNumber(unitData.number);
    await this.enterSalePrice(unitData.priceSale);
    await this.enterCoveredMeters(unitData.coveredMeters);
    await this.enterSemiCoveredMeters(unitData.semiCoveredMeters);
    await this.enterUncoveredMeters(unitData.uncoveredMeters);
    await this.enterCommonMeters(unitData.commonMeters);
    await this.enterDescription(unitData.description);
  }
}