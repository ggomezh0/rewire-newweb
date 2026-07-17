# Sitio web estático de REWIRE

Proyecto independiente, sin componentes exclusivos de ChatGPT Sites. Incluye el sitio completo, sus páginas internas mediante navegación por hash, los artículos del blog, los casos de estudio, imágenes, logotipos, estilos y scripts.

## Vista local

Puede abrir `index.html` directamente o servir esta carpeta con cualquier servidor web estático.

## Publicación en GitHub Pages

1. Cree un repositorio nuevo en GitHub.
2. Suba **el contenido de esta carpeta** a la raíz del repositorio.
3. Abra **Settings → Pages** en el repositorio.
4. En **Build and deployment**, seleccione **Deploy from a branch**.
5. Seleccione la rama **main**, la carpeta **/(root)** y pulse **Save**.

No se requiere comando de compilación, Node.js ni dependencias. El archivo `.nojekyll` evita que GitHub procese los recursos con Jekyll y `404.html` conserva una salida válida para el sitio estático.

## Dominio y SEO

Los metadatos, `robots.txt` y `sitemap.xml` están configurados para `https://www.rewire.com.co/`. Si el dominio definitivo será la dirección de GitHub Pages u otro dominio, actualice esas direcciones en `index.html`, `404.html`, `robots.txt` y `sitemap.xml`.

Si utiliza un dominio propio en GitHub Pages, configúrelo desde **Settings → Pages → Custom domain**.

## Estructura principal

- `index.html`: página de entrada.
- `css/`: estilos y sistema visual.
- `js/`: navegación, contenidos del blog e interacciones.
- `assets/`: logos, imágenes y recursos.
- `favicon.png` y `site.webmanifest`: identidad del navegador.
- `robots.txt` y `sitemap.xml`: configuración SEO.

## Formulario

El formulario prepara un correo dirigido a `contacto@rewire.com.co` en la aplicación de correo del visitante. No requiere servidor ni servicio externo de formularios.
