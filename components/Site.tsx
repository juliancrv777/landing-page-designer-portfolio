import { Reveal } from "@/components/Reveal";
import type { BusinessConfig } from "@/data/business";

function whatsappLink(phone: string, brand: string) {
  const message = encodeURIComponent(
    `Olá! Vi o site da ${brand} e gostaria de agendar uma avaliação.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

export function Site({ business }: { business: BusinessConfig }) {
  const cta = whatsappLink(business.whatsapp, business.brand);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-[#1f211f]">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/8 bg-[#f7f4ef]/85 px-5 py-3 shadow-[0_12px_50px_rgba(31,33,31,.08)] backdrop-blur-xl md:px-7">
          <a href="#inicio" className="font-serif text-xl tracking-tight md:text-2xl">
            {business.brand}
          </a>
          <nav className="hidden items-center gap-7 text-sm text-black/60 md:flex">
            <a className="transition hover:text-black" href="#tratamentos">Tratamentos</a>
            <a className="transition hover:text-black" href="#experiencia">Experiência</a>
            <a className="transition hover:text-black" href="#avaliacoes">Avaliações</a>
          </nav>
          <a
            href={cta}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#203d35] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#18332c]"
          >
            Agendar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[92svh] px-5 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#d6b7a4]/35 blur-3xl" />
        <div className="pointer-events-none absolute right-[-10rem] top-[18rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#8ca69a]/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#416259]">
                {business.eyebrow}
              </p>
              <h1 className="max-w-4xl font-serif text-[clamp(4rem,9vw,8.6rem)] leading-[.84] tracking-[-.055em]">
                {business.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="text-lg leading-8 text-black/60 md:text-xl">
                {business.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={cta}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#203d35] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(32,61,53,.2)] transition hover:-translate-y-1"
                >
                  {business.primaryCta} ↗
                </a>
                <a
                  href="#tratamentos"
                  className="rounded-full border border-black/10 bg-white/40 px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
                >
                  Conhecer tratamentos
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/60 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.95),transparent_24%),linear-gradient(145deg,#d6b7a4_0%,#b58d7b_42%,#758d82_100%)] shadow-[0_35px_90px_rgba(51,49,45,.18)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,.18)_50%,transparent_80%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] border border-white/30 bg-white/15 p-5 text-white backdrop-blur-xl">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[.22em] text-white/70">Experiência</p>
                    <p className="mt-2 font-serif text-3xl">{business.yearsLabel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-semibold">{business.rating}</p>
                    <p className="text-xs text-white/70">★★★★★ · {business.reviewCount} avaliações</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-7 top-7 h-16 w-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />
              <div className="absolute right-10 top-24 h-36 w-36 rounded-full border border-white/20 bg-[#f7e7df]/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {business.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07}>
              <div className="rounded-[1.6rem] border border-black/7 bg-white/55 p-6 backdrop-blur">
                <p className="font-serif text-4xl tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-black/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="tratamentos" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#416259]">Tratamentos</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">
              Menos excesso. Mais precisão.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
              Cada protocolo começa com uma avaliação detalhada para alinhar expectativas, segurança e resultado.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {business.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="group flex min-h-80 flex-col justify-between rounded-[2rem] border border-black/8 bg-[#eeebe5] p-7 transition duration-500 hover:-translate-y-2 hover:bg-[#e8e2da]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/50">{service.tag}</span>
                    <span className="text-2xl text-black/30 transition group-hover:rotate-45 group-hover:text-black">↗</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl leading-none tracking-tight">{service.title}</h3>
                    <p className="mt-5 leading-7 text-black/55">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-[#203d35] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[.26em] text-white/55">Nossa forma de cuidar</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">
              Tecnologia sem perder o humano.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-7 text-lg leading-8 text-white/66">
              <p>
                A jornada foi desenhada para transmitir confiança antes mesmo da primeira consulta: atendimento claro, ambiente acolhedor e decisões baseadas no que faz sentido para você.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Avaliação individual", "Protocolos sob medida", "Acompanhamento", "Resultados naturais"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/5 p-4 text-sm text-white/80">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="avaliacoes" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#416259]">Avaliações</p>
                <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">
                  Confiança construída atendimento por atendimento.
                </h2>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-4xl font-semibold">{business.rating}</p>
                <p className="mt-1 text-sm text-black/45">★★★★★ · Google</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {business.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <blockquote className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-black/8 bg-white/55 p-7">
                  <div>
                    <p className="text-sm tracking-[.18em] text-[#816855]">★★★★★</p>
                    <p className="mt-6 font-serif text-2xl leading-9">“{testimonial.quote}”</p>
                  </div>
                  <footer className="mt-8 border-t border-black/8 pt-5">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-black/45">{testimonial.service}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#d8c0ae] p-8 md:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.26em] text-black/45">Próximo passo</p>
                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">
                  Uma avaliação pode ser o começo de um plano feito para você.
                </h2>
              </div>
              <a
                href={cta}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-16 items-center justify-center rounded-full bg-[#203d35] px-8 text-center text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Conversar no WhatsApp ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-black/8 pt-8 text-sm text-black/45 sm:flex-row">
          <p>© 2026 {business.brand}. Conceito demonstrativo.</p>
          <p>{business.city} · Site demonstrativo, não oficial.</p>
        </div>
      </footer>

      <a
        href={cta}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#203d35] text-xl text-white shadow-[0_15px_45px_rgba(32,61,53,.3)] transition hover:-translate-y-1 md:h-16 md:w-16"
      >
        ↗
      </a>
    </main>
  );
}
