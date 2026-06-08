export function createProjectData() {
  return {
    name: `Proyecto QA ${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
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

export function createUnitData() {
  return {
    pricePerSquareMeter: '2500',
    expectedProfit: '10',
    floors: '12',
    basements: '2',
    typology: 'Monoambiente',
    unitsPerFloor: '4',
    parkingSpaces: '1',
    streetView: 'https://maps.google.com',
    googleMaps: 'https://maps.google.com',
    priceListVersion: `Lista precios ${Date.now()}`,
  };
}