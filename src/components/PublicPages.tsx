import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { BrandLogo } from "@/components/BrandLogo";
import { company } from "@/lib/company";
import { Locale, localePath } from "@/lib/i18n";
import { getSiteContent } from "@/lib/siteContent";
import { getVacancies } from "@/lib/storage";

type PageProps = {
  locale: Locale;
};

const serviceVisuals = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726776068646-d7022f71faf2?auto=format&fit=crop&w=1600&q=80",
    alt: "High-current electrical installation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    alt: "Low-current cabling and networking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    alt: "Photovoltaics and heat pump systems",
  },
  {
    image:
      "https://images.unsplash.com/photo-1676803210608-39cdef6a505c?auto=format&fit=crop&w=1600&q=80",
    alt: "Turnkey house construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    alt: "Industrial fence installation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    alt: "Interior and exterior construction works",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&w=1600&q=80",
    alt: "Sandwich panel construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    alt: "Diamond drilling and technical works",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    alt: "Earthworks and site preparation",
  },
] as const;

function SectionHead({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-head">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text max-text">{text}</p> : null}
    </div>
  );
}

export function HomePage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const home = content.home;

  return (
    <div className="site-page">
      <section id="top" className="hero-section">
        <div className="hero-video-wrap">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-crane-moving-on-a-construction-site-1260-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="section-tag fade-up">{content.brand.eyebrow}</p>
            <h1 className="fade-up fade-delay-1">{home.heroTitle}</h1>
            <p className="hero-text fade-up fade-delay-2">{home.heroText}</p>

            <div className="hero-list fade-up fade-delay-3">
              {home.heroTags.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-actions fade-up fade-delay-4">
              <Link href={localePath(locale, "/contacts")} className="btn btn-primary">
                {home.primaryCta}
              </Link>
              <a href="#calculator" className="btn btn-secondary">
                {home.secondaryCta}
              </a>
            </div>

            <p className="hero-note fade-up fade-delay-4">{home.heroNote}</p>
          </div>

          <aside className="hero-panel fade-up fade-delay-4">
            <BrandLogo locale={locale} hero />
            <span className="panel-label">{home.heroPanelLabel}</span>
            <div className="metric-stack">
              {home.heroMetrics.map((item) => (
                <div key={item.value + item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics-bar">
        <div className="container metrics-grid">
          {home.metricsBar.map((item) => (
            <div key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="container about-grid">
          <div>
            <SectionHead tag={home.aboutTag} title={home.aboutTitle} />
            {home.aboutParagraphs.map((text) => (
              <p key={text} className="section-text">
                {text}
              </p>
            ))}
          </div>
          <div className="about-cards">
            {home.aboutCards.map((card) => (
              <article className="glass-card" key={card.title}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section-dark">
        <div className="container">
          <SectionHead
            tag={home.servicesTag}
            title={home.servicesTitle}
            text={home.servicesIntro}
          />
          <div className="service-grid">
            {home.services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceVisuals[index % serviceVisuals.length].image}
                    alt={serviceVisuals[index % serviceVisuals.length].alt}
                  />
                </div>
                <div className="service-card-top">
                  <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHead tag={home.advantagesTag} title={home.advantagesTitle} />
          <div className="advantage-grid">
            {home.advantages.map((item) => (
              <article className="advantage-card" key={item}>
                <span className="advantage-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section-dark">
        <div className="container">
          <SectionHead
            tag={home.projectsTag}
            title={home.projectsTitle}
            text={home.projectsIntro}
          />
          <div className="project-grid">
            {home.projects.map((project) => (
              <article className="project-card" key={project.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} />
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container before-after-grid">
          <article className="before-after-card">
            <span className="before-after-label">{home.beforeAfter.beforeLabel}</span>
            <h3>{home.beforeAfter.beforeTitle}</h3>
            <p>{home.beforeAfter.beforeText}</p>
          </article>
          <article className="before-after-card before-after-card-accent">
            <span className="before-after-label">{home.beforeAfter.afterLabel}</span>
            <h3>{home.beforeAfter.afterTitle}</h3>
            <p>{home.beforeAfter.afterText}</p>
          </article>
        </div>
      </section>

      <section className="content-section content-section-dark">
        <div className="container">
          <SectionHead tag={home.processTag} title={home.processTitle} />
          <div className="steps-grid">
            {home.steps.map((item) => (
              <article className="step-card" key={item.step}>
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="content-section">
        <div className="container lead-grid">
          <div className="section-head">
            <p className="section-tag">{home.calculatorTag}</p>
            <h2>{home.calculatorTitle}</h2>
            <p className="section-text">{home.calculatorText}</p>
            <div className="coverage-panel">
              <span>{home.coverageLabel}</span>
              <div className="coverage-list">
                {home.coverage.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>

      <section className="content-section content-section-dark">
        <div className="container">
          <SectionHead tag={home.trustTag} title={home.trustTitle} />
          <div className="trust-grid">
            {home.trustCards.map((card) => (
              <article className="trust-card" key={card.label}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="review-panel">
            <div>
              <p className="section-tag">{home.reviewTag}</p>
              <h3>{home.reviewTitle}</h3>
            </div>
            <p>{home.reviewText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.aboutPage;

  return (
    <section className="inner-page">
      <div className="container">
        <SectionHead tag={content.home.aboutTag} title={page.title} text={page.intro} />
        <div className="page-copy-grid">
          <div className="page-copy-block">
            {page.text.map((text) => (
              <p key={text} className="section-text">
                {text}
              </p>
            ))}
          </div>
          <div className="page-stats-grid">
            {page.stats.map((stat) => (
              <article className="mini-stat-card" key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="section-spacer">
          <SectionHead tag={content.home.advantagesTag} title={page.valuesTitle} />
          <div className="about-cards">
            {page.values.map((item) => (
              <article className="glass-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.servicesPage;

  return (
    <section className="inner-page">
      <div className="container">
        <SectionHead tag={content.home.servicesTag} title={page.title} text={page.intro} />
        <div className="service-grid">
          {content.home.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={serviceVisuals[index % serviceVisuals.length].image}
                  alt={serviceVisuals[index % serviceVisuals.length].alt}
                />
              </div>
              <div className="service-card-top">
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="service-showcase-stack">
          {content.home.services.map((service, index) => (
            <article
              className={`service-showcase ${index % 2 === 1 ? "service-showcase-reverse" : ""}`}
              key={`${service.title}-showcase`}
            >
              <div className="service-showcase-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={serviceVisuals[index % serviceVisuals.length].image}
                  alt={serviceVisuals[index % serviceVisuals.length].alt}
                />
                <div className="service-showcase-overlay" />
              </div>
              <div className="service-showcase-copy">
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="cta-strip">
          <h3>{page.outroTitle}</h3>
          <p>{page.outroText}</p>
          <Link href={localePath(locale, "/contacts")} className="btn btn-primary">
            {content.home.primaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactsPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.contactsPage;

  return (
    <section className="inner-page">
      <div className="container">
        <SectionHead tag={page.tag} title={page.title} text={page.intro} />
        <div className="lead-grid">
          <article className="company-card">
            <h3>{page.detailsTitle}</h3>
            <div className="company-card-grid">
              <div>
                <span>Brand</span>
                <strong>{company.name}</strong>
              </div>
              <div>
                <span>Legal name</span>
                <strong>{company.legalName}</strong>
              </div>
              <div>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div>
                <span>ICO</span>
                <strong>{company.ico}</strong>
              </div>
              <div>
                <span>DIC</span>
                <strong>{company.dic}</strong>
              </div>
              <div>
                <span>Datova schranka</span>
                <strong>{company.dataBox}</strong>
              </div>
              <div className="company-card-address">
                <span>Address</span>
                <strong>
                  {company.street}
                  <br />
                  {company.cityLine}
                </strong>
              </div>
            </div>
            <p className="section-text">{page.note}</p>
          </article>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}

export async function CareerPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.careerPage;
  const vacancies = await getVacancies();

  return (
    <section className="inner-page">
      <div className="container">
        <SectionHead tag={page.tag} title={page.title} text={page.intro} />

        <div className="section-spacer">
          <SectionHead tag={page.openPositionsTag} title={page.openPositionsTitle} />
          {vacancies.length > 0 ? (
            <div className="vacancy-grid">
              {vacancies.map((vacancy) => {
                const title =
                  locale === "cs"
                    ? vacancy.titleCs
                    : locale === "ru" || locale === "uk"
                      ? vacancy.titleUk
                      : vacancy.titleCs;
                const description =
                  locale === "cs"
                    ? vacancy.descriptionCs
                    : locale === "ru" || locale === "uk"
                      ? vacancy.descriptionUk
                      : vacancy.descriptionCs;
                return (
                  <article className="vacancy-card" key={vacancy.id}>
                    <span className="service-index">{vacancy.type || "Contract"}</span>
                    <h3>{title || vacancy.titleCs || vacancy.titleUk}</h3>
                    <p className="section-text">{vacancy.location || company.cityLine}</p>
                    <ul className="vacancy-list">
                      {(description || "")
                        .split("\n")
                        .map((item) => item.trim())
                        .filter(Boolean)
                        .map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <a href={`mailto:${company.email}?subject=${encodeURIComponent(title || company.name)}`} className="btn btn-primary">
                      {page.emailAction}
                    </a>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state-card">
              <h3>{page.noJobsTitle}</h3>
              <p>{page.noJobsText}</p>
              <Link href={localePath(locale, "/contacts")} className="btn btn-primary">
                {page.applyCall}
              </Link>
            </div>
          )}
        </div>

        <div className="section-spacer">
          <SectionHead tag={page.perksTag} title={page.perksTitle} />
          <div className="about-cards">
            {page.perks.map((item) => (
              <article className="glass-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacyPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.privacyPage;

  return (
    <section className="inner-page legal-page">
      <div className="container">
        <SectionHead tag={page.tag} title={page.title} text={page.intro} />
        <div className="legal-stack">
          {page.sections.map((section) => (
            <article className="legal-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CookiePolicyPage({ locale }: PageProps) {
  const content = getSiteContent(locale);
  const page = content.cookiePage;

  return (
    <section className="inner-page legal-page">
      <div className="container">
        <SectionHead tag={page.tag} title={page.title} text={page.intro} />
        <div className="legal-stack">
          {page.sections.map((section) => (
            <article className="legal-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
