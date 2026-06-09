# Price List Test Cases

## Alcance

Casos de prueba relacionados con la gestión de listas de precios y unidades dentro de un proyecto.

---

## CP-PRICE-001 - Validar creación automática de lista de precios inicial

### Objetivo

Validar que al crear un proyecto se genere automáticamente una lista de precios inicial, con o sin nombre especificado.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.

### Pasos

1. Crear un nuevo proyecto.
2. Completar los datos requeridos.
3. Especificar o no un nombre para la lista de precios inicial.
4. Acceder al proyecto creado.
5. Ingresar a la sección de listas de precios.

### Resultado esperado

- Se visualiza una lista de precios inicial asociada al proyecto.
- La lista de precios se crea correctamente con nombre o sin nombre.

### Automatización

Sí
---

## CP-PRICE-002 - Modificar precio de unidad

### Objetivo

Validar que al modificar el precio de una unidad se actualice la lista de precios correspondiente.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Unidad asociada a una lista de precios.

### Pasos

1. Acceder a una unidad existente.
2. Modificar el precio de la unidad.
3. Guardar los cambios.
4. Consultar la lista de precios asociada.

### Resultado esperado

- El precio de la unidad se actualiza correctamente.
- La lista de precios refleja el nuevo valor.

### Automatización

Sí

---

## CP-PRICE-003 - Crear unidades mediante carga de template

### Objetivo

Validar que al cargar un template válido se creen unidades y se genere una nueva lista de precios.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Template válido disponible.

### Pasos

1. Acceder al proyecto.
2. Ingresar a la sección de unidades.
3. Seleccionar la opción "Templates".
4. Cargar un template válido.
5. Confirmar la operación.

### Resultado esperado

- Las unidades se crean correctamente.
- Se genera una nueva lista de precios.
- Las unidades quedan asociadas a la nueva lista de precios.

### Automatización

Sí

---

## CP-PRICE-004 - Eliminar unidad y validar comportamiento de la lista de precios

### Objetivo

Validar las reglas de negocio al eliminar una unidad de una lista de precios.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Lista de precios con unidades asociadas.

### Pasos

1. Acceder a una lista de precios.
2. Eliminar una unidad mediante el ícono de borrado.
3. Observar el comportamiento de la lista y de la unidad.

### Resultado esperado

- La unidad se elimina de la lista de precios.
- Si la lista queda vacía, la lista de precios se elimina automáticamente.
- Si la unidad queda sin listas de precios asociadas, la unidad se elimina del proyecto.

### Automatización

Sí

