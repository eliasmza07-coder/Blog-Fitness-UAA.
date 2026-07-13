/* Fondo interactivo compartido: el grano sigue el puntero,
   un glitch corto al tocar/clickear, y reveal-on-scroll para
   cualquier elemento con la clase .reveal. Se carga en todas las páginas. */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) {
    let raf = null;
    window.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const x = ((e.clientX / window.innerWidth) * 100).toFixed(1);
        const y = ((e.clientY / window.innerHeight) * 100).toFixed(1);
        document.documentElement.style.setProperty("--mx", x + "%");
        document.documentElement.style.setProperty("--my", y + "%");
        raf = null;
      });
    }, { passive: true });

    let glitchTimer = null;
    window.addEventListener("pointerdown", () => {
      document.body.classList.add("glitching");
      clearTimeout(glitchTimer);
      glitchTimer = setTimeout(() => document.body.classList.remove("glitching"), 180);
    });
  }

  // Reveal on scroll — aplica a cualquier elemento .reveal presente en la página
  const revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealables.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
      revealables.forEach((el) => io.observe(el));
    }
  }
})();