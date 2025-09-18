# 📊 Diagrama de Secuencia - Catálogo de Ropa

```mermaid
sequenceDiagram
    participant U as Usuario (Cliente)
    participant FE as Frontend (Catálogo)
    participant API as Backend
    participant DB as Base de Datos
    participant A as Administrador

    Note over U: Usuario entra al sitio
    U->>FE: Abre la web
    FE->>API: GET /productos
    API->>DB: SELECT * FROM productos WHERE estado = 'activo'
    DB-->>API: Devuelve lista de productos
    API-->>FE: Lista de productos
    FE-->>U: Muestra catálogo, categorías y promociones

    Note over A: Administrador inicia sesión
    A->>FE: Ingresa credenciales
    FE->>API: POST /login
    API->>DB: Verifica usuario/contraseña
    DB-->>API: Usuario válido
    API-->>FE: Devuelve token de sesión
    FE-->>A: Acceso a panel de administración

    Note over A: Administrador gestiona productos
    A->>FE: Crea/edita/elimina producto
    FE->>API: POST/PUT/DELETE /productos
    API->>DB: Actualiza datos de productos
    DB-->>API: Confirmación
    API-->>FE: Respuesta exitosa
    FE-->>A: Muestra mensaje de confirmación

    Note over U: Catálogo siempre actualizado
    U->>FE: Refresca página
    FE->>API: GET /productos
    API->>DB: SELECT * FROM productos
    DB-->>API: Lista actualizada
    API-->>FE: Envía nuevos datos
    FE-->>U: Muestra catálogo actualizado
