# DLIFE Technologies · sitio de desarrollo

Sitio estático multipágina para presentar equipos, reparaciones y accesorios. El catálogo y las solicitudes existentes se conectan a Supabase; las solicitudes también pueden abrir WhatsApp. Esta rama de desarrollo es independiente del sitio público principal.

## Archivos principales

| Archivo | Función |
| --- | --- |
| `index.html` | Inicio, productos destacados y enlaces a los servicios. |
| `ventas.html` | Selección de equipos y formulario de solicitud. |
| `reparacion.html` | Formulario y vista previa de reparación. |
| `accesorios.html` | Catálogo y carrusel de accesorios. |
| `styles.css` | Estilos existentes compartidos por las páginas públicas. |
| `design-system.css` | Capa visual compartida: navegación, materiales, inicio y accesibilidad. |
| `ui.js` | Menú común y controles del carrusel de inicio. |
| `admin/index.html` | Panel administrativo con sus propios estilos y lógica. |

Algunas páginas aún incluyen estilos y scripts específicos dentro del HTML. Añadir estilos compartidos a `design-system.css` y reservar los estilos locales para diferencias propias de cada página ayuda a mantenerlas coherentes. Los cambios deben respetar la lógica existente de Supabase, las órdenes y el panel.

## Dirección visual

- Fondo oscuro, texto claro y acentos naranja cósmico; las variables `--dl-*` concentran los colores compartidos.
- Transparencias y desenfoque en navegación y contenido destacado; superficies más sólidas para catálogos y formularios.
- Controles accesibles por teclado, foco visible, enlaces descriptivos y adaptación a movimiento o transparencia reducidos cuando el navegador lo admite.
- Mantener el contenido legible sobre imágenes y probar el diseño en distintos anchos antes de publicar.

## Vista local

Desde esta carpeta, ejecutar `python3 -m http.server 8000` y abrir `http://localhost:8000/`. El catálogo requiere conexión a Supabase; fuentes, iconos e imágenes externas también necesitan conexión. No enviar formularios de prueba a la base de datos real ni a WhatsApp sin una estrategia de datos de prueba.

## Referencias de diseño

- [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass)
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)
- [MDN: preferencias de accesibilidad en CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
- [Vercel: Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- [Anthropic: frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
