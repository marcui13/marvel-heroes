# Marvel Heroes App

![Ionic](https://img.shields.io/badge/Ionic-7-blue) ![Angular](https://img.shields.io/badge/Angular-15-red) ![Capacitor](https://img.shields.io/badge/Capacitor-6-green)

## Descripción

`Marvel Heroes App` es una aplicación desarrollada con Ionic 7, Angular y Capacitor que muestra una lista de héroes de Marvel utilizando la [API de Marvel](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0). Los usuarios pueden ver una lista de héroes con sus nombres y miniaturas, así como detalles adicionales de cada héroe, como su nombre, imagen, cantidad de cómics, series y historias disponibles.

## Características

- Muestra una lista de héroes de Marvel con sus nombres y miniaturas.
- Permite navegar a los detalles de cada héroe.
- Muestra información detallada de cada héroe, incluyendo su nombre, imagen, cómics, series y historias disponibles.
- Traduce los textos según el idioma del dispositivo (inglés / español), utilizando ngx-translate.  

## Requisitos

- [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) (recomendado usar la versión LTS).
- [Ionic CLI](https://ionicframework.com/docs/cli) instalado globalmente: `npm install -g @ionic/cli`
- [Capacitor](https://capacitorjs.com/) integrado a la aplicación.

## Configuración inicial

1. **Clonar el repositorio**:
   ```
   git clone https://github.com/marcui13/marvel-heroes.git
   
   cd marvel-heroes
   ```
2. **Instalar dependencias**:
  `npm install`
  
3. **Correr la aplicación**:
  `ionic serve`
## **Estructura del Proyecto**:
- src/app/: Contiene los archivos y directorios de la aplicación Angular.
- src/app/services/marvel-api.service.ts: Servicio que se conecta a la API de Marvel para obtener datos de héroes.
- src/app/pages/heroes-list/: Página que muestra la lista de héroes.
- src/app/pages/hero-details/: Página que muestra los detalles de un héroe.
- src/environments/environment.ts: Archivo de configuración con claves de API.

## Autor
Marvel Heroes App fue desarrollada por [Agustín Marquardt](https://www.linkedin.com/in/agust%C3%ADn-marquardt-0015611b3/) en 2024.

¡Gracias por visitar! Si tienes alguna pregunta o sugerencia, por favor, abre un issue o contáctame.
