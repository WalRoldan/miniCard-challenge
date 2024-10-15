# Proyecto Mini card - Responsive

Este proyecto es un componente responsivo de un banner publicitario que cambia su diseño y dimensiones dependiendo del dispositivo (desktop y mobile). El proyecto incluye botones que cambian de color al ser clickeados y se ajusta a las mejores prácticas de desarrollo como BEM, SCSS y jQuery, con una organización modular y limpia del código.

## Tecnologías utilizadas

- **HTML5**: Estructura de la página.
- **SCSS**: Estilización del componente y sus estados responsivos.
- **JavaScript (jQuery)**: Control de eventos y manejo de interacciones (cambio de color del botón).
- **Metodología BEM**: Para un nombramiento coherente y escalable de clases CSS.
- **Fuente Nunito**: Fuente utilizada para cumplir con los requisitos de diseño.

### Librerías

- **jQuery**: Se utiliza para manejar las interacciones del DOM y simplificar el manejo de eventos.

```bash
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## Estructura del proyecto

El proyecto sigue una estructura básica y modular para facilitar la mantenibilidad y escalabilidad.

```bash
- /css
    - style.css          # Archivo CSS generado a partir de SCSS
- /js
    - app.js             # Código JavaScript que maneja las interacciones
- /scss
    - style.scss         # Estilos escritos en SCSS utilizando BEM
- index.html             # Archivo HTML principal
```

### Funcionalidades del proyecto

1. **Responsividad del Banner**:
   - El componente cambia de diseño entre versiones desktop y mobile basado en un punto de quiebre de 768px.
   - Las dimensiones del banner se ajustan según el dispositivo.
2. **Interacción de los Botones**:
   - Al hacer clic en los botones del banner, estos alternan entre dos colores: `#7AB800` y `#CC292B`.
3. **Diseño Responsivo**:
   - Se adapta a pantallas grandes y pequeñas utilizando `media queries` en SCSS.

## Instrucciones para Ejecutar el Proyecto

### Clonar el repositorio

```bash
git clone https://github.com/WalRoldan/miniCard-challenge.git
cd miniCard-challenge
```

### Instalación de dependencias (opcional, si utilizas un entorno local con compilador de SCSS)

Si deseas trabajar con SCSS, asegúrate de tener `sass` instalado en tu máquina:

```bash
npm install -g sass
```

Para compilar SCSS a CSS:

```bash
sass ./scss/style.scss ./css/style.css
```

### Visualización en el navegador

Puedes utilizar un servidor local para visualizar el proyecto. Si estás usando Visual Studio Code, puedes utilizar la extensión **Live Server**:

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Haz clic derecho en el archivo `index.html` y selecciona "Open with Live Server".

### Alternativa sin compilación (CSS ya incluido)

El archivo CSS compilado está incluido en el proyecto (`/css/style.css`), por lo que no es necesario compilar SCSS a menos que desees hacer modificaciones.

## Consideraciones adicionales

- **BEM**: La metodología BEM asegura que el código sea escalable y fácil de mantener. Asegúrate de seguir esta convención si deseas añadir nuevos componentes.
- **jQuery**: Dado que el proyecto usa jQuery para manejar las interacciones, si decides migrar a otra librería como React o Vue, sería recomendable manejar las interacciones de manera diferente.

## Demo

Puedes ejecutar este proyecto en tu máquina local o subirlo a un servicio de hosting como GitHub Pages, Netlify, o Vercel.

¡Gracias por revisar este proyecto!

---

### Contacto

Para cualquier consulta o sugerencia, no dudes en contactarme:

- **Desarrollador**: Walter Roldan
- **Email**: cuenta0369@hotmail.com
