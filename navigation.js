const headers = document.querySelectorAll(".site-header");

headers.forEach((header) => {
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".primary-nav");

  if (!toggle || !nav) {
    return;
  }

  const setOpen = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Navigation schließen" : "Navigation öffnen");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("nav-open") || header.contains(event.target)) {
      return;
    }

    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
});
