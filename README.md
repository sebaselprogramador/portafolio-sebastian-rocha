# Portafolio personal

Aplicación Angular con Bootstrap 5.3.3, basada en la plantilla **Laura** entregada en `Laura.zip`. Los datos del perfil se cargan mediante HttpClient desde `public/data/portfolio.json`.

## Ejecutar

Requisitos: Node.js 20.19 o superior de la rama 20, 22.12 o superior de la rama 22, o Node.js 24; npm. Se utiliza Angular 21 para ser compatible con el Node.js 20.20.2 del equipo.

```bash
cd portafolio-personal
npm ci
npm start
```

Abrir la dirección indicada por Angular CLI, normalmente `http://127.0.0.1:4200`.

```bash
npm run check:data
npm run build
```

El resultado está en `dist/portafolio/browser`. No se abre como un archivo local: necesita un servidor HTTP.

## Personalizar

Editar `public/data/portfolio.json`: `profile` contiene nombre, presentación, correo, ubicación y rutas de fotos; `education`, formación; `projects`, proyectos; `socials`, redes. `skills` describe las herramientas de este trabajo, no acredita experiencia profesional.

Copiar las fotos a `public/assets/img/`. En el JSON, usar rutas relativas como `assets/img/retrato.jpg`, sin `/` inicial, para que funcionen en GitHub Pages. `photo` es el retrato; `heroPhoto` es el fondo de inicio. Se conservan vacías hasta recibir fotos personales. Usar imágenes optimizadas y un texto alternativo descriptivo.

Ejemplo de proyecto para añadir dentro de `projects`, sustituyendo todos los datos por los reales:

```json
{
  "id": "mi-proyecto",
  "title": "Nombre del proyecto",
  "category": "Web",
  "description": "Qué problema resuelve y cuál fue mi participación.",
  "image": "assets/img/mi-proyecto.jpg",
  "imageAlt": "Descripción de la captura del proyecto",
  "technologies": ["Angular", "Bootstrap"],
  "url": "https://github.com/usuario/repositorio"
}
```

Para formación: `{ "title": "Carrera o curso", "institution": "Institución", "period": "Periodo", "description": "Descripción" }`. Para redes: `{ "label": "GitHub", "url": "https://github.com/usuario" }`.

El contacto usa `mailto:`; abre el cliente de correo y no simula un envío. GitHub Pages no ejecuta el PHP de Laura.

## GitHub Pages

Este directorio está preparado para ser la **raíz de un repositorio independiente**. Su carpeta `.github/workflows` debe quedar en la raíz de ese repositorio para que GitHub ejecute el despliegue. El repositorio SmartCampus del espacio de trabajo no se ha reemplazado.

1. Crear o indicar el repositorio público del portafolio.
2. Subir el contenido de este directorio, incluido `package-lock.json`, a su rama `main`.
3. En GitHub, abrir **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Ejecutar el workflow **Publicar portafolio en GitHub Pages**, o subir un cambio a `main`.
5. Verificar que finalice correctamente y abrir la URL del entorno `github-pages`.

El workflow calcula el `base-href` con `configure-pages`; así sirve tanto para una ruta de proyecto como para la raíz de un dominio. La aplicación utiliza anclas, sin rutas Angular que requieran redirecciones de servidor.

Guías oficiales: [compatibilidad Angular](https://angular.dev/reference/versions), [workflows de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Créditos

Laura, de [BootstrapMade](https://bootstrapmade.com/laura-free-creative-bootstrap-theme/). Se conserva el crédito visible y la cabecera original del CSS. Bootstrap e iconos se distribuyen localmente desde la plantilla. Consultar [THIRD_PARTY.md](THIRD_PARTY.md) y [TRABAJO.md](TRABAJO.md).
