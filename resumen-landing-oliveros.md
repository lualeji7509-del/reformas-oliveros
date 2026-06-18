# Landing page — Instalaciones y Reformas Oliveros

## Qué es

Web de una sola página (un único archivo `index.html`) para la empresa de reformas de Oliveros (hermano de Johan / JAO Proyectos). Mismo tipo de negocio que JAO, pero con diseño propio y con la carpintería / taller propio como diferenciador.

**Objetivo:** mostrar servicios y proyectos, y captar clientes vía presupuesto.

**Detalles técnicos:**

- Un solo archivo HTML autocontenido (el logo va incrustado dentro, no hay imágenes sueltas).
- Colores de marca: azul `#1565C0` + naranja `#E8741B`.
- Tipografías: DM Sans + Archivo (se cargan desde Google Fonts).
- Secciones: hero, servicios, **taller propio**, proyectos, **cifras**, cómo trabajamos, **testimonios**, CTA, **formulario de contacto** y footer.
- Responsive (se adapta a móvil, con menú hamburguesa por debajo de 720px).

-----

## Lo que pedí y se hizo

1. **Diseño base** — azul limpio y profesional, con las secciones indicadas arriba.
2. **Diferenciarla del de Johan sin rehacerla** — se probó una versión "madera" completa que rechacé por exagerada; se volvió al original y solo se hicieron cambios pequeños:
   - Mención a carpintería con taller propio en el hero.
   - "Carpintería a medida" añadido como primer servicio.
   - Una fila de "Por qué elegirnos" destacando el taller propio.
3. **Logo** — se le quitó el fondo / recuadro blanco, se recortó limpio y se usa solo el símbolo (IR con edificio y tejado), más grande y sobresaliendo de la barra superior, con sombra suave.
4. **Iconos de servicios** — agrandados (cuadro de 72px), más visibles, con sombra de color alternando azul/naranja y un pequeño efecto al pasar el cursor. También se agrandaron los iconos del hero.

-----

## Sesión 2026-06-18 (en el Mac) — enriquecida con estructura tipo JAO

- Nuevo servicio: **Restaurantes, bares y hostelería** (montaje, reforma y mantenimiento de locales comerciales; barras a medida del taller propio). Ahora hay 8 servicios.
- **Sección Taller propio** — bloque protagonista del taller de carpintería (su diferenciador frente a JAO).
- **Banda de cifras** propia (+12 años, +150 obras, 100% presupuesto cerrado, 4,9★).
- **Testimonios** — 3 reseñas de ejemplo con estrellas y avatar (cambiar por reales).
- **Formulario de presupuesto** (nombre, teléfono, email, tipo de servicio, mensaje). Al enviar abre WhatsApp con los datos rellenados → `wa.me/34600000000` (placeholder).
- **Pulido visual**: animaciones de aparición al hacer scroll, tarjetas con hover. Menú hamburguesa ahora aparece a ≤720px (antes 640) para evitar el apretón en móvil grande.
- Verificado en desktop, tablet y móvil; sin errores de consola.

-----

## Pendiente por hacer

- [ ] **Teléfono y WhatsApp reales** — ahora son placeholder `+34 600 000 000` (aparece en los dos botones del CTA y en el footer).
- [ ] **Email real** — ahora `info@reformasoliveros.com` de ejemplo.
- [x] **Fotos** — ✅ puestas fotos reales con licencia libre de **Pexels** (cocina, cafetería, cuadro eléctrico, baño, obra, escalera, taller). Pendiente futuro: cuando Oliveros mande fotos de SUS obras reales, sustituir las de Pexels.
- [x] **Iconos** — ✅ cambiados los emojis por **iconos de línea SVG** profesionales (escuadra, casa, rayo, ladrillo, gota, rodillo, edificio, taza...). Solo se conservan las estrellas ★ de valoración.
- [x] **Publicar online** — ✅ publicada en **GitHub Pages** (gratis, sin Netlify): https://lualeji7509-del.github.io/reformas-oliveros/ · repo `lualeji7509-del/reformas-oliveros`. Para actualizar: editar `~/reformas-oliveros/index.html` y `git add -A && git commit && git push`. Para quitarla: borrar el repo en GitHub.

### Fotos usadas (Pexels, licencia libre — hotlink al CDN)
Proyectos: 7601088 (cocina), 5865422 (cafetería), 257736 (eléctrico), 7031840 (baño), 534228 (obra), 34260163 (escalera). Taller: 7484165. Si alguna dejara de cargar, buscar otra en pexels.com (mismo formato `images.pexels.com/photos/ID/pexels-photo-ID.jpeg`).

-----

## Para publicarla

**Forma rápida (Netlify Drop):**

1. Descargar el archivo `index.html`.
2. Entrar en <https://app.netlify.com/drop> desde el navegador.
3. Subir el archivo.
4. Te da un link público tipo `https://nombre-random.netlify.app`.

Como es un solo archivo llamado `index.html`, abre directo sin pasos extra.

**Opción con dominio propio:** desplegar en Railway (como JAO Proyectos) con un subdominio tipo `web.jaoproyectos.com`, o comprar un dominio propio (ej. `reformasoliveros.com`) en Namecheap (~6 €).

-----

## Archivos del proyecto

- `index.html` — la web completa (logo incrustado dentro).
- `resumen-landing-oliveros.md` — este resumen.
