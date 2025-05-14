# CryptoMillion

CryptoMillion es una aplicación móvil desarrollada con **React Native** como parte de una prueba técnica. Su propósito es satisfacer los requisitos de una gran empresa de bienes raíces que necesita una herramienta para consultar información sobre criptomonedas en USD.

### Funcionalidades principales:
- Visualización del tipo de cambio en USD.
- Filtrado de la lista de criptomonedas.
- Detalles específicos de cada criptomoneda.

---

## Tabla de Contenidos

- [CryptoMillion](#cryptomillion)
		- [Funcionalidades principales:](#funcionalidades-principales)
	- [Tabla de Contenidos](#tabla-de-contenidos)
	- [Instalación](#instalación)
	- [Uso](#uso)
	- [Scripts Disponibles](#scripts-disponibles)
	- [Configuración](#configuración)
		- [Variables de Entorno](#variables-de-entorno)
	- [Sobre Mí](#sobre-mí)
	- [Licencia](#licencia)

---

## Instalación

1. Clona este repositorio:

	 ```sh
	 git clone https://github.com/jesusorejarena/crypto-million.git
	 cd CryptoMillion
	 ```

2. Instala las dependencias y los pods necesarios para ejecutar el proyecto:

	 ```sh
	 npm run m-install-all
	 ```

---

## Uso

1. Inicia el servidor Metro:

	 ```sh
	 npm start
	 ```

2. Ejecuta la aplicación en Android:

	 ```sh
	 npm run android
	 ```

3. Ejecuta la aplicación en iOS:

	 ```sh
	 npm run ios
	 ```

4. Ejecuta la aplicación en Android e iOS simultáneamente:

	 ```sh
	 npm run m-android-ios
	 ```

---

## Scripts Disponibles

En el archivo [`package.json`](package.json) se encuentran los siguientes scripts útiles:

- **`npm run android`**: Ejecuta la aplicación en un emulador o dispositivo Android.
- **`npm run ios`**: Ejecuta la aplicación en un simulador o dispositivo iOS.
- **`npm run m-android-ios`**: Ejecuta la aplicación en emuladores o dispositivos Android e iOS.
- **`npm run android-prod-apk`**: Genera un archivo APK para producción.
- **`npm run android-prod-aab`**: Genera un archivo AAB para Google Play.
- **`npm run l-clean`**: Limpia el entorno de Android en Linux.
- **`npm run m-clean`**: Limpia el entorno de Android e iOS en macOS.
- **`npm run pods`**: Instala los pods necesarios para iOS en macOS.
- **`npm run l-install-all`**: Instala dependencias y limpia el entorno de Android en Linux.
- **`npm run m-install-all`**: Instala dependencias, pods y limpia el entorno de Android e iOS en macOS.
- **`npm run lint`**: Ejecuta ESLint para verificar errores de estilo.
- **`npm run test`**: Ejecuta las pruebas con Jest.

---

## Configuración

### Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para la configuración de la aplicación. Asegúrate de crearlo o modificarlo según tus necesidades.

Ejemplo:

```env
ENV=development
BACKEND_URL=https://api.coinlore.net/api/
IMAGE_COIN_URL=https://api.coingecko.com/api/v3/coins/
```

---

## Sobre Mí

Puedes encontrar más información sobre mí en los siguientes enlaces:

- [GitHub](https://github.com/jesusorejarena)
- [Página Web](https://jesusorejarena.dev)
- [LinkedIn](https://www.linkedin.com/in/jesusorejarena/)
