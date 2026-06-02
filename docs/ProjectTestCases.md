# Project Test Cases

## Alcance

Casos de prueba relacionados con la visualización de la pantalla principal, acceso a la creación de proyectos, creación de proyectos y validaciones del formulario.

---

## CP-PROY-001 - Visualizar pantalla principal

### Objetivo

Validar que luego de iniciar sesión el usuario visualice correctamente la pantalla principal de la aplicación.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario autenticado en la aplicación.

### Pasos

1. Iniciar sesión con credenciales válidas.
2. Esperar la carga de la pantalla principal.

### Resultado esperado

* Se visualiza el saludo al usuario.
* Se visualiza la sección "Inmobiliaria".
* Se visualiza la sección "Proyectos".
* Se visualiza el listado de proyectos disponibles.
* Se visualiza el botón "Agregar proyecto".

### Automatización

Sí

## CP-PROY-002 - Acceder a la pantalla Agregar proyecto

### Objetivo

Validar que el botón "Agregar proyecto" permita acceder al formulario de creación de proyectos.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla principal.

### Pasos

1. Visualizar la pantalla principal.
2. Presionar el botón "Agregar proyecto".

### Resultado esperado

* El usuario es redirigido al formulario de creación de proyecto.
* Se visualizan los campos obligatorios para cargar los datos del proyecto.

### Automatización

Sí

## CP-PROY-003 - Crear proyecto exitosamente

### Objetivo

Validar que el usuario pueda completar los campos obligatorios y registrar un proyecto correctamente.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Completar el campo "Nombre del proyecto".
2. Seleccionar moneda.
3. Completar o validar tipo de cambio.
4. Seleccionar país, estado y ciudad.
5. Completar dirección y número.
6. Completar fecha de inicio y fecha de finalización.
7. Seleccionar tipo de construcción.
8. Seleccionar modalidad de ajuste.
9. Completar razón social.
10. Completar los campos adicionales de razón social, si corresponde.
11. Presionar "Registrar".
12. Validar mensaje exitoso

### Resultado esperado

* El proyecto se crea correctamente.
* El usuario es redirigido al proyecto creado.
* El proyecto se visualiza dentro de la sección "Proyectos".

### Automatización

Sí

## CP-PROY-004 - Validar campos obligatorios vacíos

### Objetivo

Validar que el sistema no permita registrar un proyecto si los campos obligatorios no fueron completados.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Dejar vacíos los campos obligatorios.
2. Presionar "Registrar".

### Resultado esperado

* El proyecto no se registra.
* Se visualizan mensajes de validación en los campos obligatorios.

### Automatización

Sí

## CP-PROY-005 - Validar generación de lista de precios inicial

### Objetivo

Validar que al crear un proyecto se genere automáticamente una lista de precios inicial.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario autenticado en la aplicación.
* Proyecto creado correctamente.

### Pasos

1. Crear un nuevo proyecto.
2. Ingresar al proyecto creado.
3. Acceder a la sección de unidades/lista de precios.

### Resultado esperado

* Se visualiza una lista de precios inicial asociada al proyecto.

### Automatización

Sí

## CP-PROY-006 - Validar carga de logo del proyecto

### Objetivo

Validar que el usuario pueda cargar una imagen como logo del proyecto.

### Prioridad

P2 - Medio

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".
* Archivo de imagen válido disponible.

### Pasos

1. Presionar la opción "Subir logo del proyecto".
2. Seleccionar una imagen válida.
3. Confirmar la carga.

### Resultado esperado

* La imagen se carga correctamente.
* El logo se visualiza en el formulario del proyecto.

### Automatización

No

## CP-PROY-007 - Validar dependencia entre país, estado y ciudad

### Objetivo

Validar que los campos "Estado" y "Ciudad" dependan de la selección previa de un país.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Verificar el estado inicial de los campos "Estado" y "Ciudad".
2. Intentar seleccionar "Estado" sin haber seleccionado un país.
3. Seleccionar un país.
4. Verificar que el campo "Estado" quede habilitado.
5. Seleccionar un estado.
6. Verificar que el campo "Ciudad" quede habilitado.

### Resultado esperado

* No se permite seleccionar estado ni ciudad sin haber seleccionado previamente un país.
* Luego de seleccionar un país, se habilita el campo "Estado".
* Luego de seleccionar un estado, se habilita el campo "Ciudad".

### Automatización

Sí

## CP-PROY-008 - Validar mensaje al ingresar moneda inexistente

### Objetivo

Validar que el sistema muestre un mensaje cuando se ingresa una moneda inexistente o sin opciones disponibles.

### Prioridad

P2 - Medio

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Hacer clic en el campo "Moneda".
2. Ingresar un valor inexistente.
3. Observar el resultado mostrado por el sistema.

### Resultado esperado

* Se muestra el mensaje "No se encontraron opciones disponibles".
* No se selecciona ninguna moneda inválida.

### Automatización

Sí

## CP-PROY-009 - Validar autocompletado del tipo de cambio

### Objetivo

Validar que el campo "Tipo de cambio" se complete automáticamente al utilizar la opción "Definir automáticamente".

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Seleccionar una moneda válida.
2. Activar la opción "Definir automáticamente".
3. Observar el campo "Tipo de cambio".

### Resultado esperado

* El campo "Tipo de cambio" se completa automáticamente.
* El valor no queda vacío.
* El usuario no necesita cargar el tipo de cambio manualmente.

### Automatización

Sí

## CP-PROY-010 - Visualización de campos adicionales al seleccionar Razón Social

### Objetivo

Validar que al seleccionar o crear una Razón Social se visualicen los campos adicionales requeridos para completar la información.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Completar los datos obligatorios del proyecto.
2. Seleccionar o crear una Razón Social.
3. Observar el comportamiento del formulario.

### Resultado esperado

* Se visualizan los campos adicionales asociados a la Razón Social:

  * Nombre
  * Descripción
  * Fecha de registro
  * Tipo de documento
  * Número de documento.
* Los campos quedan disponibles para su edición.

### Automatización

Sí

## CP-PROY-011 - Validar obligatoriedad de campos de Razón Social

### Objetivo

Validar que el sistema solicite los campos obligatorios de Razón Social cuando estos sean requeridos para registrar el proyecto.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado en la aplicación.
* Usuario ubicado en la pantalla "Agregar proyecto".
* Razón Social seleccionada o creada.

### Pasos

1. Seleccionar o crear una Razón Social.
2. Dejar vacíos los campos obligatorios asociados a Razón Social.
3. Presionar "Registrar".

### Resultado esperado

* El proyecto no se registra.
* Se visualizan mensajes de validación en los campos obligatorios de Razón Social.

### Automatización

Sí

## CP-PROY-012 - Validar navegación mediante botón "Volver"

### Objetivo

Validar que el botón "Volver" redirija al usuario a la pantalla anterior sin registrar el proyecto.

### Prioridad

P2 - Medio

### Precondiciones

- Usuario autenticado en la aplicación.
- Usuario ubicado en la pantalla "Agregar proyecto".

### Pasos

1. Acceder a la pantalla "Agregar proyecto".
2. Completar o no algunos campos del formulario.
3. Presionar el botón "Volver".

### Resultado esperado

- El usuario es redirigido a la pantalla anterior.
- No se registra ningún proyecto.
- Se visualiza nuevamente la pantalla de proyectos.

### Automatización

Sí
## CP-PROY-013 - Validar visualización del nombre del proyecto creado

### Objetivo

Validar que el nombre configurado durante la creación del proyecto se visualice correctamente dentro del proyecto.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado en la aplicación.
- Proyecto creado correctamente.

### Pasos

1. Crear un proyecto con un nombre específico.
2. Ingresar al proyecto creado.
3. Observar el encabezado o la información principal del proyecto.

### Resultado esperado

- Se visualiza el nombre configurado durante la creación.
- El nombre coincide exactamente con el ingresado por el usuario.

### Automatización

Sí

## CP-PROY-014 - Acceder a la sección Unidades desde el proyecto

### Objetivo

Validar que el usuario pueda acceder a la sección "Unidades" desde un proyecto creado.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado en la aplicación.
- Proyecto creado correctamente.
- Usuario ubicado dentro del proyecto.

### Pasos

1. Ingresar al proyecto creado.
2. Presionar la opción "Unidades" en el menú lateral.

### Resultado esperado

- El usuario es redirigido a la pantalla de configuración de unidades.
- La pantalla de unidades se carga correctamente.

### Automatización

Sí