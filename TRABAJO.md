# Informe del trabajo: portafolio personal

## Objetivo

Desarrollar un portafolio personal con Angular y Bootstrap, utilizar JSON para administrar su contenido, documentar el desarrollo en Markdown y preparar la publicación en GitHub Pages.

## Material recibido

Se recibió `Laura.zip`, una plantilla de BootstrapMade. Sus archivos se trataron como recursos y referencias, no como instrucciones del usuario. El espacio de trabajo pertenece a SmartCampus, por lo que la aplicación se creó en un directorio independiente, `portafolio-personal`.

## Diseño

Se conserva la organización de Laura: inicio, perfil, trayectoria, proyectos y contacto. Paleta: azul pizarra `#243746`, blanco `#ffffff`, gris claro `#f2f5f6`, amarillo `#ffbb27`, texto `#455463`. Georgia se utiliza en títulos y Segoe UI en el cuerpo. La portada destaca el nombre y el retrato tiene un espacio propio. Se eliminaron testimonios, cifras y servicios de ejemplo que podrían atribuir experiencia inexistente.

## Implementación

1. Se configuró una aplicación Angular 21 con componentes standalone, TypeScript estricto y HttpClient.
2. Se incorporaron localmente Bootstrap 5.3.3, Bootstrap Icons y el CSS original de Laura, manteniendo sus avisos y crédito.
3. Se creó un modelo tipado y un archivo JSON para perfil, herramientas, formación, proyectos y redes.
4. Angular carga el JSON al iniciar y renderiza las listas con `@for` y las condiciones con `@if`.
5. Se implementaron menú móvil, filtros de proyectos, estados de carga/error, reintento y sustitutos para imágenes ausentes.
6. Se incluyeron navegación por teclado, enlace para saltar al contenido, textos alternativos y respeto de movimiento reducido.
7. Se reemplazó el formulario PHP por contacto mediante correo, compatible con hosting estático.
8. Se creó un workflow que valida datos, compila y publica el artefacto en Pages, ajustando automáticamente la ruta base.

## Archivos principales

| Archivo | Función |
| --- | --- |
| `src/app/app.component.ts` | Carga, filtros, menú y validación de enlaces |
| `src/app/app.component.html` | Presentación de las secciones |
| `src/app/portfolio.model.ts` | Estructura tipada del contenido |
| `src/styles.css` | Adaptación visual y responsive |
| `public/data/portfolio.json` | Datos editables |
| `public/assets/img/` | Fotografías personales y capturas |
| `scripts/check-data.mjs` | Comprueba estructura, rutas y enlaces del JSON |
| `.github/workflows/pages.yml` | Compilación y despliegue |

## Pendientes de contenido y publicación

Se incorporaron los datos confirmados por el usuario: Sebastian Rocha, ingeniero de sistemas y `sebastianrv2004@gmail.com`. Faltan fotos, una presentación más detallada, formación, proyectos reales y repositorio de destino. No se inventa experiencia. Preparar un workflow no equivale a publicar: el despliegue solo se confirma cuando GitHub devuelve un resultado correcto y una URL accesible.

## Verificación

- `npm run check:data`: correcto. Se valida el perfil confirmado, tres herramientas y listas vacías de proyectos y formación.
- `npm run build -- --base-href /portafolio-personal/`: correcto. Angular genera el artefacto de producción en `dist/portafolio/browser` (493,01 kB iniciales; transferencia estimada 81,72 kB).
- Servidor local: respuestas HTTP 200 para la página y el JSON.
- Navegador: se verificó la carga del nombre, profesión, secciones y enlace de correo; portada revisada visualmente en escritorio.
- Vista de 390 × 844: menú móvil abre y cierra al seleccionar Contacto; la URL cambia a `#contacto`. Se revisó la disposición visual y se restauró el tamaño original.
- No se comprobó el filtro con proyectos reales porque aún no se han recibido. No se realizó un envío de correo: el contacto abre el cliente del visitante.

El código se subió a un repositorio independiente: https://github.com/sebaselprogramador/portafolio-sebastian-rocha. Se activó GitHub Actions como fuente de GitHub Pages. La verificación final del despliegue está en curso.
