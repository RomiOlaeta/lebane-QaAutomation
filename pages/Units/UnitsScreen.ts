import { Page } from '@playwright/test';
import { UnitsLocators } from './UnitsLocators';

export class UnitsScreen {
  constructor(private page: Page) {}

  async enterPricePerSquareMeter(value: string) {
    await this.page.locator(UnitsLocators.pricePerSquareMeterBox).fill(value);
  }

  async enterExpectedProfit(value: string) {
    await this.page.locator(UnitsLocators.expectedProfitBox).fill(value);
  }

  async enterFloors(value: string) {
    await this.page.locator(UnitsLocators.floorsBox).fill(value);
  }

  async enterBasements(value: string) {
    await this.page.locator(UnitsLocators.basementsBox).fill(value);
  }

  async selectTypology(typology: string) {
  const dropdown = this.page.locator(UnitsLocators.typologiesDropdown);

  await dropdown.click();
  await dropdown.fill(typology);

  await this.page
    .getByRole('option', {
      name: typology,
      exact: true,
    })
    .click();
}
  async enterUnitsPerFloor(value: string) {
    await this.page.locator(UnitsLocators.unitsPerFloorBox).fill(value);
  }

  async enterParkingSpaces(value: string) {
    await this.page.locator(UnitsLocators.parkingSpacesBox).fill(value);
  }

  async enterStreetView(value: string) {
    await this.page.locator(UnitsLocators.streetViewBox).fill(value);
  }

  async enterGoogleMaps(value: string) {
    await this.page.locator(UnitsLocators.googleMapsBox).fill(value);
  }

  async enterPriceListVersion(value: string) {
    await this.page.locator(UnitsLocators.priceListVersionBox).fill(value);
  }

  async clickSave() {
    await this.page.getByRole('button', { name: 'Guardar' }).click();
  }

  async completeRequiredFields(unitData: {
    pricePerSquareMeter: string;
    expectedProfit: string;
    floors: string;
    basements: string;
    typology: string;
    unitsPerFloor: string;
    parkingSpaces: string;
    streetView: string;
    googleMaps: string;
    priceListVersion: string;
  }) {
    await this.enterPricePerSquareMeter(unitData.pricePerSquareMeter);
    await this.enterExpectedProfit(unitData.expectedProfit);
    await this.enterFloors(unitData.floors);
    await this.enterBasements(unitData.basements);
    await this.selectTypology(unitData.typology);
    await this.enterUnitsPerFloor(unitData.unitsPerFloor);
    await this.enterParkingSpaces(unitData.parkingSpaces);
    await this.enterStreetView(unitData.streetView);
    await this.enterGoogleMaps(unitData.googleMaps);
    await this.enterPriceListVersion(unitData.priceListVersion);
  }
}