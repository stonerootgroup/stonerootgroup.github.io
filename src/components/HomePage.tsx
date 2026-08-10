import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";

const flow = [
  ["Captura", "Web, formulario, CRM o WhatsApp", "Conectado"],
  ["Automatización", "Reglas, tareas, integraciones y alertas", "Activo"],
  ["Inteligencia artificial", "Clasificación, asistentes y agentes", "Inteligente"],
  ["Seguimiento", "Datos, dashboards y experiencia", "Visible"],
];

export function HomePage() {
  return (
    <>
      <section className="hero section" id="inicio">
        <Image
          className="hero-image"
          src="/images/stoneroot-hero-v4.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-copy">
          <h1>Procesos inteligentes. <em>Soluciones que escalan.</em></h1>
          <p className="lead">Automatización, inteligencia artificial y soluciones digitales para operar mejor.</p>
          <Link className="button hero-cta" href="/contact">
            Hablemos <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section" id="servicios">
        <p className="kicker">01 / QUÉ HACEMOS</p>
        <div className="section-heading"><h2>Tecnología enfocada en resolver problemas reales del negocio.</h2><p>No vendemos herramientas por venderlas. Diseñamos soluciones alrededor de tus procesos, tus clientes y tus objetivos.</p></div>
        <div className="service-grid">{siteContent.services.map((service, index) => <article key={service.title}><span>{service.icon}</span><h3>{service.title}</h3><p>{service.body}</p><b>{String(index + 1).padStart(2, "0")}</b></article>)}</div>
      </section>

      <section className="section solutions" id="soluciones">
        <p className="kicker">02 / SOLUCIONES PARA ARRANCAR</p>
        <div className="section-heading"><h2>Empieza con un problema concreto. Nosotros construimos el camino.</h2><p>Paquetes pensados para reducir fricción y acelerar la entrega de valor desde el primer proyecto.</p></div>
        <div className="solution-list">{siteContent.solutions.map((solution, index) => <article key={solution.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{solution.title}</h3><p>{solution.body}</p></div><small>{solution.tag}</small></article>)}</div>
        <Link className="text-link" href="/solutions#soluciones-top">Ver soluciones en detalle <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="section why" id="nosotros">
        <div><p className="kicker">03 / POR QUÉ STONEROOT</p><h2>No empezamos por la tecnología. Empezamos por conocerte.</h2><p className="lead">Una buena solución no solo resuelve el problema de hoy. Deja una base para automatizar más, integrar mejor y aprovechar IA en el futuro.</p><div className="metric"><b>1→∞</b><span>Construimos para que puedas crecer.</span></div></div>
        <div className="principles"><article><b>01</b><h3>Visión de negocio + ejecución técnica</h3><p>Entendemos el proceso antes de diseñar la solución.</p></article><article><b>02</b><h3>Soluciones integradas</h3><p>Web, CRM, automatización, datos e IA como un solo sistema.</p></article><article><b>03</b><h3>Entrega incremental</h3><p>Priorizamos valor temprano en lugar de proyectos eternos.</p></article><article><b>04</b><h3>Tecnología con propósito</h3><p>Elegimos las herramientas que mejor encajan con tu negocio.</p></article></div>
      </section>

      <section className="section" id="proceso">
        <p className="kicker">04 / CÓMO TRABAJAMOS</p>
        <div className="section-heading"><h2>De una necesidad a una solución funcionando.</h2><p>Un proceso simple para reducir incertidumbre, acelerar decisiones y mantener el foco en resultados.</p></div>
        <div className="steps"><article><b>01</b><small>ENTENDER</small><h3>Discovery</h3><p>Entendemos el problema, los usuarios y el resultado esperado.</p></article><article><b>02</b><small>DISEÑAR</small><h3>Solution Blueprint</h3><p>Definimos la solución, alcance, integraciones y prioridades.</p></article><article><b>03</b><small>CONSTRUIR</small><h3>Build & Automate</h3><p>Desarrollamos, configuramos, integramos y probamos.</p></article><article><b>04</b><small>ESCALAR</small><h3>Launch & Improve</h3><p>Publicamos, medimos resultados y evolucionamos.</p></article></div>
        <div className="system-card process-system" aria-label="Flujo de transformación digital">
          <div>
            <div className="card-top"><span className="signal" /><span>MODELO DE OPERACIÓN CONECTADA</span></div>
            <h2>Personas, procesos, datos e IA trabajando como un solo sistema.</h2>
          </div>
          <div className="flow">{flow.map(([title, body, state], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{title}</strong><small>{body}</small></span><i>{state}</i></article>)}</div>
        </div>
      </section>

      <section className="contact section" id="contacto"><p className="kicker">05 / CONTÁCTANOS</p><h2>¿Qué proceso, idea o problema quieres <em>mejorar?</em></h2><p>Cuéntanos dónde estás perdiendo tiempo, clientes o visibilidad. Lo convertimos en una solución concreta.</p><Link className="contact-link" href="/contact"><span>Iniciar una conversación</span><ArrowUpRight aria-hidden="true" /></Link></section>
    </>
  );
}
