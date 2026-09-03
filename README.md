# Proyecto Final CSS Essentials — Guía "MiniAcad"

Sitio estático con la guía del proyecto final del curso **CSS Essentials**
(Cisco Networking Academy) de la Academia Cisco CEAC.

## Contenido

```
.
├── index.html          Guía completa
├── css/estilos.css     Hoja de estilos
├── js/script.js        Menú del índice y apartado actual
└── README.md
```

## Cómo publicarlo en GitHub Pages

1. Cree un repositorio **público** en GitHub, por ejemplo `proyecto-css-essentials`.
2. Suba estos archivos con `index.html` en la raíz del repositorio.
3. Entre a **Settings → Pages**.
4. En "Source" elija **Deploy from a branch**.
5. Seleccione la rama `main` y la carpeta `/ (root)`. Guarde.
6. Espere unos minutos. El sitio quedará en
   `https://usuario.github.io/proyecto-css-essentials/`

## Notas técnicas

- No requiere servidor ni compilación: abra `index.html` en el navegador.
- Tipografías cargadas desde Google Fonts. Sin conexión, el navegador usa las de respaldo.
- El cuerpo de texto usa **Atkinson Hyperlegible**, diseñada por el Braille Institute
  para lectores con baja visión.
- Incluye enlace de salto al contenido, foco visible, marcado semántico,
  soporte de `prefers-reduced-motion`, `prefers-contrast` y estilos de impresión.
