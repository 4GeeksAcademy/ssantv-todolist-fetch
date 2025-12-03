# To-Do con Usuarios — Añadir, Editar, Completar y Borrar Tareas

Esta aplicación es una **lista de tareas dinámica en React**, conectada a la **API de To-Do de 4Geeks**, que permite gestionar tareas por usuario: añadir, completar, editar, eliminar y administrar usuarios.

---

## Características principales

### 1. Gestión de usuario
- El usuario debe introducir su nombre antes de usar la aplicación.
- Si el usuario **no existe**, la app lo crea automáticamente en la API.
- Una vez logueado:
  - Se cargan sus tareas.
  - Puede cambiar de usuario con **“¿No eres tú?”**.
  - Puede eliminar su cuenta y todas sus tareas.

### 2. Añadir tareas
- Añadir tareas mediante botón **"Enviar"** o tecla **Enter**.
- Validaciones:
  - No se permite añadir tareas sin usuario.
  - No se permite enviar un input vacío.
- La tarea se guarda en la API y se recarga la lista de manera automática.

### 3. Marcar tareas como completadas
- Clic sobre una tarea → alterna entre completada y no completada.
- Se actualiza en la API mediante un request `PUT`.

### 4. Editar tareas
- Cada tarea tiene botón **“Editar”**.
- Se abre un modal usando **SweetAlert2**.
- Se actualiza el contenido tanto en la API como en el estado local.

### 5. Eliminar tareas
- Botón **“Borrar”** por cada tarea.
- Elimina la tarea en la API y en el estado local de inmediato.

### 6. Contador de tareas pendientes
- Muestra cuántas tareas quedan por completar.
- Se actualiza automáticamente al modificar la lista.

### 7. Sistema de mensajes de alerta
Mensajes dinámicos según la situación:
- Usuario creado automáticamente.
- Usuario eliminado.
- Error por no introducir usuario.
- Error por no introducir tarea.

## Cómo usar la aplicación

1. Introduce tu nombre de usuario.
2. Añade tareas usando el input.
3. Haz clic sobre una tarea para marcarla como completada.
4. Presiona **Editar** para modificar una tarea.
5. Presiona **Borrar** para eliminarla.
6. Cambia de usuario con **“¿No eres tú?”**.
7. Elimina el usuario para borrar todas las tareas.
8. Observa el contador de tareas pendientes bajo la lista.

---

## Mejoras futuras sugeridas

- Filtros: **todas / completadas / pendientes**.
- Animaciones al añadir y eliminar tareas.
- Búsqueda de duplicados.
- Sugerencias de tareas.