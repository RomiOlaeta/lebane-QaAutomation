# Price List Test Cases

## Alcance

Casos de prueba relacionados con la gestión de listas de precios y unidades dentro de un proyecto.

---

## CP-PRICE-001 - Validar creación automática de lista de precios inicial

### Objetivo

Validar que al crear un proyecto se genere automáticamente una lista de precios inicial.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario autenticado.
* Usuario ubicado en la pantalla de creación de proyecto.

### Pasos

1. Crear un proyecto válido.
2. Ingresar al proyecto creado.
3. Acceder a la sección de listas de precios.

### Resultado esperado

* Se visualiza una lista de precios inicial asociada al proyecto.

### Automatización

Sí

## CP-PRICE-002 - Validar creación de proyecto sin nombre de lista de precios

### Objetivo

Validar que el proyecto pueda crearse aunque la lista de precios inicial no tenga nombre.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario autenticado.

### Pasos

1. Crear un proyecto sin especificar nombre para la lista de precios.
2. Finalizar la creación.

### Resultado esperado

* El proyecto se crea correctamente.
* Se genera una lista de precios inicial.

### Automatización

Sí

## CP-PRICE-003 - Crear unidad manualmente

### Objetivo

Validar que el usuario pueda crear una unidad de forma manual.

### Prioridad

P0 - Crítico

### Precondiciones

* Proyecto creado.
* Lista de precios disponible.

### Pasos

1. Acceder al proyecto.
2. Crear una unidad manualmente.
3. Guardar los cambios.

### Resultado esperado

* La unidad se crea correctamente.
* La unidad queda asociada a la lista de precios.

### Automatización

Sí

## CP-PRICE-004 - Crear unidades mediante carga de template

### Objetivo

Validar que el usuario pueda crear unidades cargando un template.

### Prioridad

P0 - Crítico

### Precondiciones

* Proyecto creado.

### Pasos

1. Acceder a la sección de unidades.
2. Cargar un template válido.
3. Confirmar la operación.

### Resultado esperado

* Las unidades se crean correctamente.
* Se genera una nueva lista de precios.

### Automatización

Sí

## CP-PRICE-005 - Modificar precio de unidad

### Objetivo

Validar que al modificar el precio de una unidad se actualice la lista de precios correspondiente.

### Prioridad

P0 - Crítico

### Precondiciones

* Unidad creada.
* Lista de precios disponible.

### Pasos

1. Seleccionar una unidad existente.
2. Modificar el precio.
3. Guardar los cambios.

### Resultado esperado

* El precio se actualiza correctamente.
* La lista de precios refleja el nuevo valor.

### Automatización

Sí

## CP-PRICE-006 - Eliminar unidad de una lista de precios

### Objetivo

Validar que una unidad pueda eliminarse utilizando el ícono de borrado.

### Prioridad

P0 - Crítico

### Precondiciones

* Lista de precios con unidades asociadas.

### Pasos

1. Seleccionar una unidad.
2. Presionar el ícono de borrado.
3. Confirmar la acción si corresponde.

### Resultado esperado

* La unidad se elimina de la lista de precios.

### Automatización

Sí

## CP-PRICE-007 - Eliminar lista de precios al quedar vacía

### Objetivo

Validar que una lista de precios sea eliminada automáticamente cuando queda sin unidades.

### Prioridad

P0 - Crítico

### Precondiciones

* Lista de precios con una única unidad.

### Pasos

1. Eliminar la última unidad de la lista.

### Resultado esperado

* La unidad se elimina correctamente.
* La lista de precios desaparece automáticamente.

### Automatización

Sí

## CP-PRICE-008 - Eliminar unidad sin listas de precios asociadas

### Objetivo

Validar que una unidad sea eliminada cuando deja de pertenecer a todas las listas de precios.

### Prioridad

P0 - Crítico

### Precondiciones

* Unidad asociada a una única lista de precios.

### Pasos

1. Eliminar la unidad de la lista de precios.

### Resultado esperado

* La unidad deja de existir en el proyecto.
* No se visualiza en ninguna lista de precios.

### Automatización

Sí

## CP-PRICE-009 - Validar creación de nueva lista de precios al cargar template

### Objetivo

Validar que al cargar un template se genere una nueva lista de precios.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Template válido disponible.

### Pasos

1. Acceder al proyecto.
2. Ingresar a la sección de unidades/lista de precios.
3. Cargar un template válido.
4. Confirmar la carga.

### Resultado esperado

- El template se procesa correctamente.
- Se crea una nueva lista de precios.
- Las unidades cargadas quedan asociadas a la nueva lista.

### Automatización

Sí

## CP-PRICE-010 - Validar que no se elimine la lista si aún contiene unidades

### Objetivo

Validar que la lista de precios permanezca activa cuando se elimina una unidad pero todavía contiene otras unidades asociadas.

### Prioridad

P1 - Alto

### Precondiciones

- Lista de precios con más de una unidad asociada.

### Pasos

1. Acceder a una lista de precios con más de una unidad.
2. Eliminar una unidad utilizando el ícono de borrado.
3. Observar el estado de la lista.

### Resultado esperado

- La unidad seleccionada se elimina de la lista.
- La lista de precios continúa visible.
- Las demás unidades permanecen asociadas a la lista.

### Automatización

Sí

## CP-PRICE-011 - Validar persistencia del precio actualizado

### Objetivo

Validar que el precio actualizado de una unidad se mantenga luego de recargar la página o volver a ingresar al proyecto.

### Prioridad

P1 - Alto

### Precondiciones

- Proyecto creado.
- Unidad asociada a una lista de precios.

### Pasos

1. Modificar el precio de una unidad.
2. Guardar los cambios.
3. Recargar la página o salir y volver a ingresar al proyecto.
4. Consultar nuevamente la lista de precios.

### Resultado esperado

- El precio actualizado se mantiene correctamente.
- No se visualiza el valor anterior.

### Automatización

Sí