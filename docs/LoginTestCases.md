# Login Test Cases

## CP-LOGIN-001 - Login exitoso

### Objetivo

Validar que un usuario con credenciales válidas pueda acceder al sistema.

### Prioridad

P0 - Crítico

### Precondiciones

* Usuario habilitado.
* Ambiente disponible.

### Pasos

1. Ingresar a la aplicación.
2. Completar email válido.
3. Completar contraseña válida.
4. Presionar "Ingresar".

### Resultado esperado

* El usuario accede correctamente al sistema.
* Se visualiza la pantalla principal de la aplicación.

### Automatización

Sí

---

## CP-LOGIN-002 - Usuario inexistente

### Objetivo

Validar que el sistema muestre un mensaje de error cuando se intenta iniciar sesión con un usuario inexistente.

### Prioridad

P1 - Alto

### Precondiciones

* Ambiente disponible.

### Pasos

1. Ingresar un email inválido.
2. Ingresar una contraseña válida.
3. Presionar "Ingresar".

### Resultado esperado

* El sistema no permite el acceso.
* Se muestra un mensaje de error indicando credenciales inválidas.

### Automatización

Sí

---

## CP-LOGIN-003 - Contraseña incorrecta

### Objetivo

Validar que el sistema muestre un mensaje de error cuando se ingresa una contraseña incorrecta.

### Prioridad

P1 - Alto

### Precondiciones

* Usuario existente.

### Pasos

1. Ingresar un email válido.
2. Ingresar una contraseña inválida.
3. Presionar "Ingresar".

### Resultado esperado

* El sistema no permite el acceso.
* Se muestra un mensaje de error indicando credenciales inválidas.

### Automatización

Sí

## CP-LOGIN-004 - Campos obligatorios vacíos

### Objetivo

Validar el comportamiento del sistema cuando los campos obligatorios no son completados.

### Prioridad

P2 - Medio

### Precondiciones

* Ambiente disponible.

### Pasos

1. Dejar vacío el campo email.
2. Dejar vacío el campo contraseña.
3. Presionar "Ingresar".

### Resultado esperado

* El sistema no permite continuar.
* Se muestran los mensajes de validación correspondientes.

### Automatización

Sí

## CP-LOGIN-005 - Formato de email inválido

### Objetivo

Validar que el sistema verifique el formato del email ingresado.

### Prioridad

P2 - Medio

### Precondiciones

* Ambiente disponible.

### Pasos

1. Ingresar un email con formato inválido.
2. Completar una contraseña.
3. Presionar "Ingresar".

### Resultado esperado

* El sistema no permite continuar.
* Se muestra un mensaje indicando que el formato del email es inválido.

### Automatización

Sí
