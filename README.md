# NextLevel Games - EFT Desarrollo Frontend I

Proyecto final del ramo Desarrollo Frontend I (PFY2201).

Para esta entrega seguí trabajando con NextLevel Games, una tienda de videojuegos que fui mejorando durante el ramo. La versión final está desarrollada con React y Vite, además de Bootstrap 5 y CSS para el diseño.

## Funciones del sitio

- Catálogo de videojuegos cargado desde `productos.json`.
- Tarjetas con imagen, nombre, categoría, plataforma, descripción y precios.
- Buscador de videojuegos.
- Filtro por categoría.
- Carrito de compras para agregar y eliminar productos.
- Contador de productos y total de compra.
- Sección de gestión para agregar o eliminar videojuegos del catálogo.
- Formulario de contacto con nombre, email y mensaje.
- Validación del formulario antes de mostrar el envío correcto.
- Mensajes dinámicos cuando el carrito está vacío, no hay resultados o existe un error de carga.
- Diseño adaptable a computador y celular mediante Bootstrap 5 y CSS.

## React

El proyecto está separado en componentes para que sea más ordenado y fácil de mantener.

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Catalogo.jsx
│   ├── ProductoCard.jsx
│   ├── Carrito.jsx
│   ├── GestionCatalogo.jsx
│   ├── Contacto.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

En `App.jsx` se encuentra el estado principal del catálogo, carrito, búsqueda y categoría. Los productos iniciales se cargan con `useEffect` desde el archivo JSON. La información y las funciones se envían a los demás componentes mediante props.

El formulario de contacto usa estado local para manejar los campos y validar la información ingresada.

## Instalación

Es necesario tener Node.js y npm instalados.

Desde una terminal ubicada en la carpeta del proyecto ejecutar:

```bash
npm install
```

Después iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local, normalmente:

```text
http://localhost:5173/
```

## Pruebas realizadas

Se revisó principalmente:

- Carga inicial del catálogo.
- Filtro por categoría y búsqueda.
- Agregar y eliminar productos del carrito.
- Actualización del contador y total.
- Agregar y eliminar videojuegos del catálogo.
- Validación del formulario de contacto.
- Vista responsiva en tamaño de escritorio y celular.

En `PRUEBAS.md` dejé un checklist más detallado.

## GitHub Pages

El proyecto mantiene el script de despliegue por si se quiere publicar en GitHub Pages:

```bash
npm run deploy
```

## Autor

Angelo Silva  
Desarrollo Frontend I - PFY2201
