# MEAN FULLSTACK

## Instalación de Node.js, Angular CLI v17, MongoDB y MongoDB Compass

### 1. Node.js

Para instalar Node.js, visita el [sitio oficial de Node.js](https://nodejs.org/) y descarga la versión LTS (Long Term Support). Sigue las instrucciones del instalador.

### 2. Angular CLI v17

Instala Angular CLI globalmente ejecutando el siguiente comando en tu terminal:

```bash
npm install -g @angular/cli@17
```

### 3. MongoDB

Descarga e instala MongoDB desde el [sitio oficial de MongoDB](https://www.mongodb.com/try/download/community). Sigue las instrucciones de instalación para tu sistema operativo.

### 4. MongoDB Compass

MongoDB Compass es una interfaz gráfica para MongoDB. Puedes descargarlo desde el [sitio oficial de MongoDB Compass](https://www.mongodb.com/try/download/compass).

---

## Configuración del Proyecto MEAN Fullstack

### Backend

1. Crea un nuevo proyecto de Node.js:

```bash
npm init -y
```

2. Crea las carpetas y archivos necesarios:

```bash
mkdir config controllers models routes
```

Crea los archivos `.env` y `server.js`.

3. Instala los paquetes necesarios:

```bash
npm install express mongoose nodemon dotenv cors
```

En el archivo `package.json`, agrega `"type": "module"` al nivel superior.

4. Configura el entorno del backend:

- Crea el archivo `db.js` en la carpeta `config`.
- Crea el modelo en la carpeta `models`.
- Crea el controlador en la carpeta `controllers`.
- Crea las rutas en la carpeta `routes`.

5. Inicia el backend:

```bash
npx nodemon server
```

### Frontend

1. Crea un nuevo proyecto Angular:

```bash
ng new frontend
```

2. Configura la estructura de carpetas y crea los archivos necesarios:

```bash
mkdir src/app/components src/app/pages src/app/models src/app/services
```

3. Crea los componentes y servicios necesarios:

```bash
ng g c pages/show
ng g c pages/create
ng g c pages/edit
ng g c components/generic-form
ng generate class models/task --type=model
ng g s services/crud
ng g s services/alertify
```

4. Instala Bootstrap:

```bash
npm install bootstrap --save
```

Agrega `"node_modules/bootstrap/dist/css/bootstrap.min.css"` a la sección `styles` del archivo `angular.json`.

5. Instala FontAwesome:

```bash
ng add @fortawesome/angular-fontawesome
```

Asegúrate de que `"strict": false` en el archivo `tsconfig.json`.

6. Instala Alertify:

```bash
npm install alertifyjs --save
```

Agrega las siguientes líneas en el archivo `styles.css`:

```css
@import "alertifyjs/build/css/alertify.min.css";
@import "alertifyjs/build/css/themes/bootstrap.rtl.min.css";
```

---

¡Tu entorno MEAN Fullstack está configurado! Ahora puedes desarrollar tu aplicación de gestión de tareas utilizando este stack tecnológico.
