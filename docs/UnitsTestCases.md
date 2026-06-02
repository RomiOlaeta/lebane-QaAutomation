# Units Test Cases

## Alcance

Casos de prueba relacionados con la configuración inicial de unidades dentro de un proyecto.

---

## CP-UNIT-001 - Validar campos obligatorios vacíos

### Objetivo

Validar que el sistema no permita guardar la configuración de unidades si los campos obligatorios no fueron completados.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Usuario ubicado en la sección "Unidades".

### Pasos

1. Acceder a la sección "Unidades".
2. Dejar vacíos los campos obligatorios.
3. Presionar "Guardar".

### Resultado esperado

- La configuración no se guarda.
- Se visualizan mensajes de validación en los campos obligatorios.

### Automatización

Sí

## CP-UNIT-002 - Guardar configuración de unidades exitosamente

### Objetivo

Validar que el usuario pueda completar los datos requeridos y guardar la configuración de unidades correctamente.

### Prioridad

P0 - Crítico

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Usuario ubicado en la sección "Unidades".

### Pasos

1. Completar los campos obligatorios.
2. Presionar "Guardar".

### Resultado esperado

- La configuración se guarda correctamente.
- Se visualiza un mensaje de confirmación.

### Automatización

Sí

## CP-UNIT-003 - Validar campos numéricos

### Objetivo

Validar que los campos numéricos no permitan ingresar texto.

### Prioridad

P1 - Alto

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Usuario ubicado en la sección "Unidades".

### Pasos

1. Ingresar texto en campos numéricos como:
   - Precio lista M2
   - Rend. esp. (%)
   - Cantidad de pisos
   - Cantidad de subsuelos
   - Unidades por piso
   - Cocheras
2. Observar el comportamiento del sistema.

### Resultado esperado

- El sistema no permite ingresar caracteres alfabéticos en campos numéricos.
- Los campos aceptan únicamente valores numéricos.

### Automatización

Sí

## CP-UNIT-004 - Validar moneda ingresada

### Objetivo

Validar que la moneda asociada al proyecto se visualice correctamente en la pantalla de unidades.

### Prioridad

P1 - Alto

### Precondiciones

- Usuario autenticado.
- Proyecto creado con una moneda seleccionada.
- Usuario ubicado en la sección "Unidades".

### Pasos

1. Acceder a la sección "Unidades".
2. Verificar el campo "Moneda".

### Resultado esperado

- Se visualiza la moneda seleccionada durante la creación del proyecto.
- El campo moneda no permite seleccionar un valor diferente si corresponde a un dato heredado del proyecto.

### Automatización

Sí

## CP-UNIT-005 - Validar botón de cruz para borrar campos opcionales

### Objetivo

Validar que el botón de cruz permita borrar el contenido de los campos opcionales.

### Prioridad

P2 - Medio

### Precondiciones

- Usuario autenticado.
- Proyecto creado.
- Usuario ubicado en la sección "Unidades".

### Pasos

1. Completar los siguientes campos opcionales:
   - Sub-Estados Unidades
   - Planos
   - Renders
   - Presentaciones
   - Videos
   - Boleto módulo
   - Lugares de interés cerca
2. Presionar el botón de cruz en cada campo.
3. Observar el resultado.

### Resultado esperado

- El contenido del campo se elimina correctamente.
- El campo queda vacío.
- No se eliminan datos de otros campos.

### Automatización

Sí