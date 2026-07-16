# Sitio web estático de REWIRE

Proyecto independiente, sin componentes exclusivos de ChatGPT Sites. Incluye el sitio completo, sus páginas internas mediante navegación por hash, los artículos del blog, los casos de estudio, imágenes, logotipos, estilos y scripts.

## Vista local

Puede abrir `index.html` directamente o servir esta carpeta con cualquier servidor web estático.

## Publicación en Cloudflare Pages

### Desde Git

1. Suba el contenido de esta carpeta a un repositorio.
2. Cree un proyecto en Cloudflare Pages y conecte el repositorio.
3. Framework preset: **None**.
4. Build command: déjelo vacío.
5. Build output directory: **/** (raíz del repositorio) o **.** si el panel lo solicita.

### Carga directa

En Cloudflare Pages, use la opción de carga directa y seleccione esta carpeta o el ZIP. El archivo `_redirects` mantiene disponible la navegación del sitio.

## Dominio y SEO

Los metadatos, `robots.txt` y `sitemap.xml` están configurados para `https://www.rewire.com.co/`. Si se publica bajo otro dominio, actualice esas direcciones en `index.html`, `robots.txt` y `sitemap.xml`.

## Formulario

El formulario prepara un correo dirigido a `contacto@rewire.com.co` en la aplicación de correo del visitante. No requiere servidor ni servicio externo de formularios.
