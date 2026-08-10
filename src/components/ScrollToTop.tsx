"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 240);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button className={`back-to-top ${visible ? "is-visible" : ""}`} type="button" aria-label="Volver arriba" title="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
