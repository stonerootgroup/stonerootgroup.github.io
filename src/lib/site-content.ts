export const siteContent = {
  company: {
    name: "StoneRoot Group",
    email: "comercial@stonerootgroup.com",
    phone: {
      display: "+57 313 339 5697",
      href: "tel:+573133395697",
    },
    tagline: "AI · Automatización · Soluciones Digitales",
  },
  nav: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Soluciones", href: "/#soluciones" },
    { label: "Por qué StoneRoot", href: "/#nosotros" },
    { label: "Cómo trabajamos", href: "/#proceso" },
  ],
  services: [
    { icon: "✦", title: "AI Solutions", body: "Agentes, asistentes empresariales, búsqueda inteligente, copilots y soluciones con GenAI." },
    { icon: "↻", title: "Process Automation", body: "Digitalización, aprobaciones, notificaciones, integraciones y flujos de trabajo." },
    { icon: "◎", title: "CRM & Sales", body: "Pipelines comerciales, seguimiento de leads, ventas, posventa y comunicaciones." },
    { icon: "◇", title: "Web & Digital", body: "Sitios corporativos, portales, aplicaciones web y experiencias digitales modernas." },
    { icon: "▦", title: "E-commerce", body: "Tiendas, catálogos, pagos, pedidos e integraciones listas para crecer." },
    { icon: "⌘", title: "Custom Software", body: "Aplicaciones a la medida e integración de sistemas, APIs, datos y plataformas." },
  ],
  solutions: [
    { title: "StoneRoot CRM Launch", tag: "Ventas & clientes", body: "Diseñamos tu proceso comercial y dejamos el CRM listo para operar.", items: ["Discovery y diseño del proceso", "Pipeline y automatizaciones", "Seguimiento y dashboards", "Capacitación del equipo"] },
    { title: "StoneRoot Business Website", tag: "Presencia digital", body: "Una presencia web profesional diseñada para generar confianza y oportunidades.", items: ["Diseño responsive", "SEO y analítica", "Captura de leads", "Integración con CRM"] },
    { title: "StoneRoot Automation Sprint", tag: "Eficiencia", body: "Transformamos un proceso manual en un flujo más rápido, visible y controlado.", items: ["Mapeo del proceso", "Cuellos de botella", "Automatización e integraciones", "Métricas de operación"] },
    { title: "StoneRoot AI Accelerator", tag: "Inteligencia artificial", body: "Construimos un MVP de IA para validar con usuarios reales y evolucionar a producción.", items: ["Selección del caso de uso", "Prototipo funcional", "Integración con datos", "Ruta a producción"] },
    { title: "Custom Digital Solution", tag: "A la medida", body: "Diseñamos una solución completa cuando una plantilla no basta.", items: ["Portales y aplicaciones", "Integraciones", "Dashboards y datos", "AI dentro del flujo"] },
  ],
} as const;
