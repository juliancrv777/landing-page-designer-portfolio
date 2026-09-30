import { Reveal } from "@/components/Reveal";
import type { BusinessConfig } from "@/data/business";

function whatsappLink(phone: string, brand: string) {
  const message = encodeURIComponent(
    "Olá! Vi o site da " + brand + " e gostaria de agendar uma avaliação."
  );
  return "https://wa.me/" + phone + "?text=" + message;
}

function imageWidth(url: string, width: number) {
  return url.includes("images.pexels.com")
    ? url.replace(/w=\d+/, "w=" + width)
    : url;
}

function imageSrcSet(url: string) {
  return [480, 768, 1200]
    .map((width) => imageWidth(url, width) + " " + width + "w")
    .join(", ");
}

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1 3.9A11 11 0 0 0 2.8 17.2L1.3 22.7l5.6-1.5A11 11 0 0 0 20.1 3.9Z"
        fill="currentColor"
      />
      <path
        d="M8.1 6.9c.2-.5.4-.5.8-.5h.7c.2 0 .4 0 .5.4l1 2.3c.1.3.1.5-.1.7l-.8 1c-.2.2-.2.4-.1.6.5.9 1.1 1.7 1.9 2.4.8.7 1.7 1.2 2.6 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.2 1c.3.1.5.2.5.4.1.2.1 1-.2 1.9-.3.9-1.7 1.7-2.6 1.8-.7.1-1.6.2-2.7-.1-1-.3-2.2-.7-3.8-1.7a14.6 14.6 0 0 1-4.7-5.1c-.5-.9-1.2-2.5-1.2-4 0-1.5.8-2.3 1.1-2.6.3-.3.7-.5 1-.5h.4Z"
        fill="white"
      />
    </svg>
  );
}

export function Site({ business }: { business: BusinessConfig }) {
  const cta = whatsappLink(business.whatsapp, business.brand);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-[#1f211f]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/8 bg-[#f7f4ef]/95 px-4 py-2.5 shadow-[0_8px_28px_rgba(31,33,31,.07)] md:bg-[#f7f4ef]/85 md:px-7 md:py-3 md:backdrop-blur-xl">
          <a href="#inicio" className="font-serif text-xl tracking-tight md:text-2xl">
            {business.brand}
          </a>
          <nav className="hidden items-center gap-7 text-sm text-black/60 md:flex">
            <a className="transition hover:text-black" href="#tratamentos">Tratamentos</a>
            <a className="transition hover:text-black" href="#experiencia">Experiência</a>
            <a className="transition hover:text-black" href="#galeria">Galeria</a>
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

      <section id="inicio" className="relative isolate px-5 pb-12 pt-28 md:min-h-[92svh] md:px-8 md:pb-16 md:pt-40">
        <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] -z-10 hidden h-[34rem] w-[34rem] rounded-full bg-[#d6b7a4]/35 blur-3xl md:block" />
        <div className="pointer-events-none absolute right-[-10rem] top-[18rem] -z-10 hidden h-[30rem] w-[30rem] rounded-full bg-[#8ca69a]/25 blur-3xl md:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#416259]">
                {business.eyebrow}
              </p>
              <h1 className="max-w-4xl font-serif text-[clamp(3.35rem,16vw,5.5rem)] leading-[.88] tracking-[-.05em] md:text-[clamp(4rem,9vw,8.6rem)] md:leading-[.84] md:tracking-[-.055em]">
                {business.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.08} className="mt-6 max-w-2xl md:mt-8">
              <p className="text-base leading-7 text-black/60 md:text-xl md:leading-8">
                {business.subheadline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
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
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#d8c0ae] shadow-[0_20px_55px_rgba(51,49,45,.14)] md:aspect-[4/5] md:rounded-[2.4rem] md:shadow-[0_35px_90px_rgba(51,49,45,.18)]">
              <img
                src={imageWidth(business.heroImage, 768)}
                srcSet={imageSrcSet(business.heroImage)}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 90vw, 45vw"
                alt="Atendimento estético em clínica premium"
                className="h-full w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#203d35]/35 via-transparent to-white/5" />
              <div className="absolute bottom-3 left-3 right-3 rounded-[1.4rem] border border-white/30 bg-[#203d35]/55 p-4 text-white md:bottom-5 md:left-5 md:right-5 md:rounded-[1.8rem] md:bg-[#203d35]/20 md:p-5 md:backdrop-blur-xl">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[.22em] text-white/70">Experiência</p>
                    <p className="mt-2 font-serif text-3xl">{business.yearsLabel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold md:text-3xl">{business.rating}</p>
                    <p className="text-xs text-white/80">★★★★★ · {business.reviewCount} avaliações</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {business.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07}>
              <div className="rounded-[1.35rem] border border-black/7 bg-white/70 p-5 md:rounded-[1.6rem] md:bg-white/55 md:p-6 md:backdrop-blur">
                <p className="font-serif text-4xl tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-black/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="tratamentos" className="px-5 py-16 [content-visibility:auto] [contain-intrinsic-size:1px_900px] md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#416259]">Tratamentos</p>
            <h2 className="mt-5 font-serif text-4xl leading-[.98] tracking-[-.04em] md:text-7xl md:leading-[.95]">
              Menos excesso. Mais precisão.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
              Cada protocolo começa com uma avaliação detalhada para alinhar expectativas, segurança e resultado.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
            {business.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="group overflow-hidden rounded-[2rem] border border-black/8 bg-[#eeebe5] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(49,45,40,.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={imageWidth(service.image, 768)}
                      srcSet={imageSrcSet(service.image)}
                      sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 md:duration-700 md:group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/75 px-3 py-1 text-xs text-[#203d35] backdrop-blur">
                      {service.tag}
                    </span>
                  </div>
                  <div className="flex min-h-44 flex-col justify-between p-5 md:min-h-56 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-serif text-3xl leading-none tracking-tight md:text-5xl">{service.title}</h3>
                      <span className="text-2xl text-black/30 transition group-hover:rotate-45 group-hover:text-black">↗</span>
                    </div>
                    <p className="mt-8 max-w-xl leading-7 text-black/55">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-[#203d35] px-5 py-16 text-white [content-visibility:auto] [contain-intrinsic-size:1px_900px] md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-white/10 md:aspect-[4/5] md:rounded-[2.3rem]">
              <img
                src={imageWidth(business.experienceImage, 768)}
                srcSet={imageSrcSet(business.experienceImage)}
                sizes="(max-width: 767px) calc(100vw - 40px), 45vw"
                alt="Ambiente sofisticado de clínica"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#203d35]/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[.2em] backdrop-blur-md">
                experiência Maison Aura
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[.26em] text-white/55">Nossa forma de cuidar</p>
              <h2 className="mt-5 font-serif text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">
                Tecnologia sem perder o humano.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-7 text-lg leading-8 text-white/66">
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
        </div>
      </section>

      <section id="galeria" className="px-5 py-16 [content-visibility:auto] [contain-intrinsic-size:1px_1000px] md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#416259]">Atmosfera</p>
                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">
                  Cuidado que também aparece nos detalhes.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-black/50">
                Imagens ilustrativas da proposta visual. Em um projeto real, esta área recebe as fotos oficiais do estabelecimento.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-[1.15fr_.85fr]">
            <Reveal className="md:row-span-2">
              <div className="group h-full min-h-[22rem] overflow-hidden rounded-[1.7rem] md:min-h-[32rem] md:rounded-[2rem]">
                <img
                  src={imageWidth(business.gallery[0].src, 768)}
                  srcSet={imageSrcSet(business.gallery[0].src)}
                  sizes="(max-width: 767px) calc(100vw - 40px), 55vw"
                  alt={business.gallery[0].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 md:duration-700 md:group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            {business.gallery.slice(1).map((image, index) => (
              <Reveal key={image.src} delay={(index + 1) * 0.08}>
                <div className="group aspect-[16/9] overflow-hidden rounded-[2rem]">
                  <img
                    src={imageWidth(image.src, 768)}
                    srcSet={imageSrcSet(image.src)}
                    sizes="(max-width: 767px) calc(100vw - 40px), 40vw"
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 md:duration-700 md:group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="px-5 pb-16 [content-visibility:auto] [contain-intrinsic-size:1px_700px] md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#416259]">Avaliações</p>
                <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">
                  Confiança construída atendimento por atendimento.
                </h2>
              </div>
              <div className="shrink-0 rounded-[1.5rem] border border-black/8 bg-white/60 px-6 py-4 text-right">
                <p className="text-4xl font-semibold">{business.rating}</p>
                <p className="mt-1 text-sm text-black/45">★★★★★ · Google</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {business.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <blockquote className="flex flex-col justify-between rounded-[1.6rem] border border-black/8 bg-white/65 p-5 shadow-[0_12px_35px_rgba(49,45,40,.05)] md:min-h-72 md:rounded-[2rem] md:p-7 md:shadow-[0_18px_50px_rgba(49,45,40,.06)]">
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
        className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,.30)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] md:bottom-5 md:right-5 md:h-16 md:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </main>
  );
}
