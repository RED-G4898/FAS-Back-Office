# Examen 1
**Desarrollo de Aplicaciones 2**

**Por:** Rodrigo Eduardo Delgadillo González

**Profesor:** Mtr. Alfonso Gregorio Rivero Duarte

El código de este proyecto corresponde al primer examen de evalución de la asignatura, el mismo corresponde a una aplicación web basada en un CRUD para interactuar con una base de datos en MongoDB.

## Dependencias
- Express.js: Framework web para gestionar peticiones HTTP.
- Mongoose: Herramienta para facilitar el modelado de datos con MongoDB.
- Axios: Alternativa de Fetch API y httpRequeest para facilitar el manejo de peticiones HTTP del lado del cliente.
- CORS: Se relaciona con la interacción hacia el exterior, ya sea a nivel de puertos, nombre de dominio o de dirección.
- react-router-dom: Proporciona métodos para facilitar la configuración de endpoints y la navegación dentro de la aplicación.
- Tailwind CSS: Framework CSS para la gestión de estilos a partir de clases.

## Árbol de Archivos

📦examen-1          // Raíz del proyecto

 ┣ 📂node_modules   // Módulos de node

 ┣ 📂public

 ┃ ┗ 📜vite.svg

 ┣ 📂src            // Carpeta principal

 ┃ ┣ 📂client       // Front-end

 ┃ ┃ ┣ 📂controllers

 ┃ ┃ ┃ ┗ 📂contexts

 ┃ ┃ ┃   ┗ 📜SidebarContextProvider.jsx

 ┃ ┃ ┣ 📂views

 ┃ ┃ ┃ ┣ 📂components


 ┃ ┃ ┃ ┃ ┣ 📂footer

 ┃ ┃ ┃ ┃ ┣ 📂header

 ┃ ┃ ┃ ┃ ┃ ┣ 📜Header.jsx

 ┃ ┃ ┃ ┃ ┃ ┣ 📜Navbar.jsx

 ┃ ┃ ┃ ┃ ┃ ┗ 📜NavbarLink.jsx

 ┃ ┃ ┃ ┃ ┣ 📂main

 ┃ ┃ ┃ ┃ ┃ ┗ 📂products

 ┃ ┃ ┃ ┃ ┃   ┣ 📜AddProducts.jsx

 ┃ ┃ ┃ ┃ ┃   ┣ 📜DeleteProducts.jsx

 ┃ ┃ ┃ ┃ ┃   ┣ 📜GetProducts.jsx

 ┃ ┃ ┃ ┃ ┃   ┣ 📜Products.jsx

 ┃ ┃ ┃ ┃ ┃   ┗ 📜UpdateProducts.jsx

 ┃ ┃ ┃ ┃ ┣ 📂shared

 ┃ ┃ ┃ ┃ ┃ ┣ 📜MenuOption.jsx

 ┃ ┃ ┃ ┃ ┃ ┣ 📜Sidebar.jsx

 ┃ ┃ ┃ ┃ ┃ ┗ 📜SidebarOption.jsx

 ┃ ┃ ┃ ┃ ┗ 📜App.jsx

 ┃ ┃ ┃ ┗ 📂css

 ┃ ┃ ┃   ┣ 📜App.css

 ┃ ┃ ┃   ┣ 📜index.css

 ┃ ┃ ┃   📜main.jsx

 ┃ ┣ 📂server // Back-end

 ┃ ┃ ┣ 📂config

 ┃ ┃ ┃ ┣ 📜db.mjs

 ┃ ┃ ┃ ┗ 📜server.mjs

 ┃ ┃ ┣ 📂controllers

 ┃ ┃ ┣ 📂model

 ┃ ┃ ┃ ┗ 📜Products.mjs

 ┃ ┃ ┗ 📂routes

 ┃ ┃   ┣ 📜index.mjs

 ┃ ┃   ┗ 📜products.mjs

 ┃ ┗ 📂shared

 ┃   ┗ 📂assets

 ┃     ┗ 📜react.svg

 ┣ 📜.env           // Variables de entorno

 ┣ 📜.gitignore

 ┣ 📜index.html

 ┣ 📜package-lock.json

 ┣ 📜package.json

 ┣ 📜postcss.config.cjs

 ┣ 📜readme.md

 ┣ 📜tailwind.config.cjs

 ┗ 📜vite.config.js
