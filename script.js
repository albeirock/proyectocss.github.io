/* =========================================================
   MiniAcad — Guía del proyecto final
   JavaScript de apoyo. Dos funciones únicamente:
   1. Abrir y cerrar el índice en pantallas pequeñas.
   2. Marcar en el índice el apartado que se está leyendo.
   El sitio funciona completo aunque este archivo no cargue.
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. Menú del índice en móvil
     ------------------------------------------------------- */

  var boton = document.getElementById("menuBoton");
  var indice = document.getElementById("indice");

  if (boton && indice) {

    boton.addEventListener("click", function () {
      var abierto = indice.classList.toggle("esta-abierto");
      // aria-expanded le dice al lector de pantalla si el panel está abierto
      boton.setAttribute("aria-expanded", String(abierto));
    });

    // Al elegir un apartado, el panel se cierra solo
    indice.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) {
        indice.classList.remove("esta-abierto");
        boton.setAttribute("aria-expanded", "false");
      }
    });

    // La tecla Escape también cierra el panel y devuelve el foco al botón
    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && indice.classList.contains("esta-abierto")) {
        indice.classList.remove("esta-abierto");
        boton.setAttribute("aria-expanded", "false");
        boton.focus();
      }
    });
  }

  /* -------------------------------------------------------
     2. Apartado actual marcado en el índice
     ------------------------------------------------------- */

  var enlaces = document.querySelectorAll(".indice__lista a");
  var secciones = document.querySelectorAll(".seccion");

  if (!enlaces.length || !secciones.length || !("IntersectionObserver" in window)) {
    return;
  }

  function marcar(id) {
    enlaces.forEach(function (enlace) {
      if (enlace.getAttribute("href") === "#" + id) {
        enlace.setAttribute("aria-current", "true");
      } else {
        enlace.removeAttribute("aria-current");
      }
    });
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        marcar(entrada.target.id);
      }
    });
  }, {
    // Considera "actual" la sección que cruza la franja superior de la pantalla
    rootMargin: "-15% 0px -70% 0px",
    threshold: 0
  });

  secciones.forEach(function (seccion) {
    observador.observe(seccion);
  });

}());
