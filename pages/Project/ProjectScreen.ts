import { Page } from '@playwright/test';
import { ProjectLocators } from './ProjectLocators';

export class ProjectScreen {
  constructor(private page: Page) {}

 async clickAddProject() {
  const addButton = this.page
    .getByRole('button', { name: 'Agregar proyecto' })
    .first();

  await addButton.waitFor({ state: 'visible' });
  await addButton.click();
}
  async uploadLogo(filePath: string) {
  await this.page.locator(ProjectLocators.logoUploadInput).setInputFiles(filePath);
}

  async enterProjectName(projectName: string) {
    await this.page.locator(ProjectLocators.nameProject).fill(projectName);
  }

 async selectAutocompleteOption(locator: string, value: string) {
  const input = this.page.locator(locator);

  await input.click();
  await input.fill(value);

  await this.page
    .locator('li[role="option"]')
    .filter({ hasText: value })
    .first()
    .click();
}

async selectCurrency(currency: string) {
  await this.selectAutocompleteOption(ProjectLocators.currencyDropdown, currency);
}

  async clickDefineAutomatically() {
  const checkbox = this.page.locator(ProjectLocators.defineAutomatically);

  if (!(await checkbox.isChecked())) {
    await checkbox.check();
  }
}
  async selectCountry(country: string) {
    await this.page.locator(ProjectLocators.countryDropdown).click();
    await this.page.getByText(country, { exact: true }).click();
  }

  async selectState(state: string) {
    await this.page.locator(ProjectLocators.stateDropdown).click();
    await this.page.getByText(state, { exact: true }).click();
  }

  async selectCity(city: string) {
    await this.page.locator(ProjectLocators.cityDropdown).click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async enterStreet(street: string) {
    await this.page.locator(ProjectLocators.streetBox).fill(street);
  }

  async enterNumber(number: string) {
    await this.page.locator(ProjectLocators.numberBox).fill(number);
  }

  async enterStartDate(date: string) {
    await this.page.locator(ProjectLocators.startDateBox).fill(date);
  }

async enterEndDate(date: string) {
  const endDateInput = this.page.locator(ProjectLocators.endDateBox);

  await endDateInput.click();
  await endDateInput.pressSequentially(date, { delay: 50 });
  await endDateInput.press('Tab');
}

  async selectConstructionType(type: string) {
    await this.page.locator(ProjectLocators.constructionTypeDropdown).click();
    await this.page.getByText(type, { exact: true }).click();
  }

  async selectAdjustmentMode(mode: string) {
    await this.page.locator(ProjectLocators.adjustmentModeDropdown).click();
    await this.page.getByText(mode, { exact: true }).click();
  }

  async enterCompany(company: string) {
  await this.page.locator(ProjectLocators.companyNameInput).fill(company);

  const option = this.page.getByText(company, { exact: true }).first();

  await option.waitFor();
  await option.click();
}
  async clickRegister() {
    await this.page.locator(ProjectLocators.registerButton).click();
  }

  async createProject(projectData: {
    name: string;
    currency: string;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    startDate: string;
    endDate: string;
    constructionType: string;
    adjustmentMode: string;
    company: string;
  }) {
    await this.enterProjectName(projectData.name);
    await this.selectCurrency(projectData.currency);
    await this.clickDefineAutomatically();
    await this.selectCountry(projectData.country);
    await this.selectState(projectData.state);
    await this.selectCity(projectData.city);
    await this.enterStreet(projectData.street);
    await this.enterNumber(projectData.number);
    await this.enterStartDate(projectData.startDate);
    await this.enterEndDate(projectData.endDate);
    await this.selectConstructionType(projectData.constructionType);
    await this.selectAdjustmentMode(projectData.adjustmentMode);
    await this.enterCompany(projectData.company);
    await this.clickRegister();
  }

  async getExchangeRateValue() {
  return await this.page.locator(ProjectLocators.exchangeRateInput).inputValue();
}

async clickBack() {
  await this.page.locator(ProjectLocators.backButton).click();
}

async navigateToUnits() {
  const commercialButton = this.page
    .locator('li:has-text("Comercial") button')
    .last();

  await commercialButton.click({ force: true });

  const unitsOption = this.page
    .locator('//span[normalize-space()="Unidades"]')
    .last();

  await unitsOption.evaluate((element: HTMLElement) => element.click());
}
}