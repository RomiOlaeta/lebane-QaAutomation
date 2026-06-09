# Lebane QA Automation Challenge

Automatización E2E desarrollada con Playwright y TypeScript para el challenge técnico de QA Automation.

## Tecnologías utilizadas

* Playwright
* TypeScript
* Node.js
* GitHub Actions

## Estructura del proyecto

```text
pages/
 ├── Login/
 ├── Project/
 ├── Units/
 └── PriceList/

tests/
 ├── login.spec.ts
 ├── project.spec.ts
 ├── units.spec.ts
 └── price.spec.ts
```

## Cobertura

### Login

* Login exitoso
* Usuario inexistente
* Contraseña incorrecta
* Campos obligatorios
* Formato de email inválido

### Projects

* Creación de proyectos
* Validaciones de campos obligatorios
* Escenarios positivos y negativos
* Navegación entre módulos

### Units

* Creación de unidades
* Validaciones de campos numéricos
* Escenarios positivos y negativos

### Price Lists

* Creación y validación de listas de precios
* Escenarios positivos y negativos

## Ejecución local

Instalar dependencias:

```bash
npm install
```

Ejecutar todos los tests:

```bash
npx playwright test
```

Ejecutar una suite específica:

```bash
npx playwright test tests/project.spec.ts
```

## Reportes

Generar y visualizar reporte:

```bash
npx playwright show-report
```

## Configuración

Las credenciales y configuración del ambiente se gestionan mediante variables de entorno.

Ejemplo:

```env
BASE_URL=https://tst.lebane.app
USER_EMAIL=example@lebane.app
USER_PASSWORD=password
```

## Consideraciones

* Implementación basada en Page Object Model (POM).
* Locators centralizados por módulo.
* Datos dinámicos para evitar conflictos entre ejecuciones.
* Integración con GitHub Actions para ejecución automática.
* Casos de prueba documentados dentro del repositorio.

