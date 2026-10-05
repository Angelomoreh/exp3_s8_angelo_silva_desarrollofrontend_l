# NextLevel Games - Semana 8

Proyecto realizado para la actividad sumativa de la semana 8 de Desarrollo Frontend I.

Para esta actividad continué con la tienda de videojuegos NextLevel Games que venía trabajando en las semanas anteriores, pero ahora la pasé a React usando Vite.

## Funciones principales

- Catálogo de productos cargado desde un archivo JSON.
- Uso de `useEffect` para cargar los productos al iniciar la aplicación.
- Uso de `useState` para productos, carrito, búsqueda y filtro por plataforma.
- Componentes separados para ordenar mejor el proyecto.
- Props para enviar datos y funciones entre componentes.
- Carrito para agregar y eliminar productos.
- Contador y total del carrito.
- Buscador por nombre, categoría o plataforma.
- Renderizado condicional para carga, errores, búsquedas sin resultados y carrito vacío.
- El botón cambia a "En el carrito" cuando el producto ya fue agregado.
- Bootstrap 5 para mantener el sitio responsivo.

## Estructura

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Catalogo.jsx
│   ├── ProductoCard.jsx
│   ├── Carrito.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── styles.css

public/
├── productos.json
└── img/
```

## Ejecutar el proyecto

Primero instalar las dependencias:

```bash
npm install
```

Después iniciar el proyecto:

```bash
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador.

## Publicar en GitHub Pages

El proyecto ya tiene configurado el script de `gh-pages`.

Después de subir el proyecto a GitHub se puede publicar con:

```bash
npm run deploy
```

Esto genera la rama `gh-pages` con la versión compilada del proyecto.

## Capturas

En la carpeta `capturas` se pueden guardar las evidencias de:

- Catálogo cargado dinámicamente.
- Productos agregados y eliminados del carrito.
- Carrito vacío.
- Botón "En el carrito".
- Vista responsiva.

## Autor

Angelo Silva  
Desarrollo Frontend I - PFY2201
