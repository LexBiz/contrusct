import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getSubmissions, getVacancies } from "@/lib/storage";

function lines(text: string) {
  return text
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<{
    tab?: string;
    q?: string;
    locale?: string;
    workType?: string;
    city?: string;
    sort?: string;
    editVacancy?: string;
    created?: string;
    updated?: string;
    deleted?: string;
    deletedLead?: string;
    error?: string;
  }>;
};

function normalizeText(value: string) {
  return value.trim().toLocaleLowerCase("cs-CZ");
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const {
    tab,
    q,
    locale,
    workType,
    city,
    sort,
    editVacancy,
    created,
    updated,
    deleted,
    deletedLead,
    error,
  } = await searchParams;
  const activeTab = tab === "vacancies" ? "vacancies" : "leads";
  const submissionSort = sort === "oldest" ? "oldest" : "newest";
  const query = String(q ?? "").trim();
  const localeFilter = String(locale ?? "").trim();
  const workTypeFilter = String(workType ?? "").trim();
  const cityFilter = String(city ?? "").trim();
  const [submissions, vacancies] = await Promise.all([getSubmissions(), getVacancies()]);
  const sortedSubmissions =
    submissionSort === "oldest"
      ? [...submissions].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      : submissions;
  const queryNormalized = normalizeText(query);
  const filteredSubmissions = sortedSubmissions.filter((row) => {
    const matchesQuery =
      !queryNormalized ||
      normalizeText(
        [row.fullName, row.email, row.phone, row.details, row.photoLink, row.city, row.workType].join(" "),
      ).includes(queryNormalized);
    const matchesLocale = !localeFilter || row.locale === localeFilter;
    const matchesWorkType = !workTypeFilter || row.workType === workTypeFilter;
    const matchesCity = !cityFilter || row.city === cityFilter;
    return matchesQuery && matchesLocale && matchesWorkType && matchesCity;
  });
  const workTypeOptions = Array.from(new Set(submissions.map((row) => row.workType).filter(Boolean))).sort((a, b) =>
    a.localeCompare(b, "cs"),
  );
  const cityOptions = Array.from(new Set(submissions.map((row) => row.city).filter(Boolean))).sort((a, b) =>
    a.localeCompare(b, "cs"),
  );
  const selectedVacancy = editVacancy ? vacancies.find((item) => item.id === editVacancy) : undefined;

  const successMessage =
    created === "1"
      ? "Pozice byla uspesne vytvorena."
      : updated === "1"
        ? "Pozice byla uspesne upravena."
      : deleted === "1"
        ? "Pozice byla uspesne smazana."
        : deletedLead === "1"
          ? "Lead byl uspesne smazan."
          : "";
  const errorMessage =
    error === "vacancy"
      ? "Pozici se nepodarilo ulozit."
      : error === "submission"
        ? "Lead se nepodarilo zpracovat."
        : "";

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-head">
          <div>
            <p className="section-tag">Internal CRM</p>
            <h1>ConStrukT VS Leads & Vacancies</h1>
            <p className="section-text">
              Interni prehled poptavek z webu a sprava pozic pro karierni stranku.
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button className="btn btn-secondary" type="submit">
              Odhlasit
            </button>
          </form>
        </div>

        {successMessage ? <p className="admin-status success">{successMessage}</p> : null}
        {errorMessage ? <p className="admin-status error">{errorMessage}</p> : null}

        <div className="admin-stats-grid">
          <article className="mini-stat-card">
            <span>Leady celkem</span>
            <strong>{submissions.length}</strong>
          </article>
          <article className="mini-stat-card">
            <span>Leady po filtru</span>
            <strong>{filteredSubmissions.length}</strong>
          </article>
          <article className="mini-stat-card">
            <span>Aktivni pozice</span>
            <strong>{vacancies.length}</strong>
          </article>
        </div>

        <div className="admin-tab-actions">
          <Link href="/admin" className={`btn ${activeTab === "leads" ? "btn-primary" : "btn-secondary"}`}>
            Leads
          </Link>
          <Link
            href="/admin?tab=vacancies"
            className={`btn ${activeTab === "vacancies" ? "btn-primary" : "btn-secondary"}`}
          >
            Vacancies
          </Link>
        </div>

        {activeTab === "vacancies" ? (
          <div className="admin-grid">
            <article className="admin-card">
              <div className="admin-card-head">
                <div>
                  <h2>{selectedVacancy ? "Upravit pozici" : "Nova pozice"}</h2>
                  <p>
                    Pozice vytvorene zde se okamzite propisou do sekce <strong>Career</strong> po ulozeni.
                  </p>
                </div>
                {selectedVacancy ? (
                  <Link href="/admin?tab=vacancies" className="btn btn-secondary">
                    Zrusit upravu
                  </Link>
                ) : null}
              </div>

              <form action="/api/admin/vacancies" method="post" className="admin-form">
                <input type="hidden" name="intent" value={selectedVacancy ? "update" : "create"} />
                {selectedVacancy ? <input type="hidden" name="id" value={selectedVacancy.id} /> : null}
                <div className="form-grid-new">
                  <label>
                    Nazev pozice (CS / EN / DE)
                    <input name="titleCs" defaultValue={selectedVacancy?.titleCs ?? ""} />
                  </label>
                  <label>
                    Nazev pozice (RU / UK)
                    <input name="titleUk" defaultValue={selectedVacancy?.titleUk ?? ""} />
                  </label>
                  <label>
                    Typ smlouvy
                    <input
                      name="type"
                      placeholder="HPP / ICO / Project"
                      defaultValue={selectedVacancy?.type ?? ""}
                    />
                  </label>
                  <label>
                    Lokalita
                    <input
                      name="location"
                      placeholder="Praha / Cesko / EU"
                      defaultValue={selectedVacancy?.location ?? ""}
                    />
                  </label>
                </div>
                <label>
                  Popis (CS / EN / DE), 1 bod na 1 radek
                  <textarea name="descriptionCs" rows={6} defaultValue={selectedVacancy?.descriptionCs ?? ""} />
                </label>
                <label>
                  Popis (RU / UK), 1 bod na 1 radek
                  <textarea name="descriptionUk" rows={6} defaultValue={selectedVacancy?.descriptionUk ?? ""} />
                </label>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    {selectedVacancy ? "Ulozit zmeny" : "Ulozit pozici"}
                  </button>
                </div>
              </form>
            </article>

            <article className="admin-card">
              <h2>Aktivni pozice ({vacancies.length})</h2>
              <div className="admin-stack">
                {vacancies.length === 0 ? <p className="admin-empty">Zatim nejsou zadne aktivni pozice.</p> : null}
                {vacancies.map((vacancy) => (
                  <article className="admin-list-card" key={vacancy.id}>
                    <div className="admin-list-head">
                      <div>
                        <strong>{vacancy.titleCs || vacancy.titleUk || "Nova pozice"}</strong>
                        <p>{(vacancy.type || "Contract") + " · " + (vacancy.location || "Ceska republika")}</p>
                        <p>Vytvoreno: {new Date(vacancy.createdAt).toLocaleString("cs-CZ")}</p>
                      </div>
                      <div className="admin-inline-actions">
                        <Link
                          href={`/admin?tab=vacancies&editVacancy=${vacancy.id}`}
                          className="btn btn-secondary"
                        >
                          Upravit
                        </Link>
                        <form action="/api/admin/vacancies" method="post">
                          <input type="hidden" name="intent" value="delete" />
                          <input type="hidden" name="id" value={vacancy.id} />
                          <button className="btn btn-secondary" type="submit">
                            Smazat
                          </button>
                        </form>
                      </div>
                    </div>
                    <ul className="vacancy-list">
                      {lines(vacancy.descriptionCs || vacancy.descriptionUk || "").map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </article>
          </div>
        ) : (
          <>
            <div className="admin-submissions-head">
              <h2>Leady z webu ({submissions.length})</h2>
              <div className="admin-sort-actions">
                <Link
                  href="/admin"
                  className={`btn ${submissionSort === "newest" && !query && !localeFilter && !workTypeFilter && !cityFilter ? "btn-primary" : "btn-secondary"}`}
                >
                  Reset pohledu
                </Link>
              </div>
            </div>

            <article className="admin-card admin-filter-card">
              <form action="/admin" method="get" className="admin-filter-form">
                <input type="hidden" name="tab" value="leads" />
                <div className="admin-filter-grid">
                  <label>
                    Hledat
                    <input
                      name="q"
                      defaultValue={query}
                      placeholder="Jmeno, email, telefon, mesto nebo text poptavky"
                    />
                  </label>
                  <label>
                    Locale
                    <select name="locale" defaultValue={localeFilter}>
                      <option value="">Vsechny</option>
                      <option value="cs">CS</option>
                      <option value="en">EN</option>
                      <option value="de">DE</option>
                      <option value="ru">RU</option>
                      <option value="uk">UK</option>
                    </select>
                  </label>
                  <label>
                    Typ praci
                    <select name="workType" defaultValue={workTypeFilter}>
                      <option value="">Vsechny</option>
                      {workTypeOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Mesto
                    <select name="city" defaultValue={cityFilter}>
                      <option value="">Vsechna</option>
                      {cityOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Razeni
                    <select name="sort" defaultValue={submissionSort}>
                      <option value="newest">Nejdrive nove</option>
                      <option value="oldest">Nejdrive stare</option>
                    </select>
                  </label>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    Pouzit filtry
                  </button>
                  <Link href="/admin" className="btn btn-secondary">
                    Vymazat filtry
                  </Link>
                </div>
              </form>
            </article>

            <div className="admin-stack">
              {filteredSubmissions.length === 0 ? <p className="admin-empty">Zatim nejsou zadne leady pro tento filtr.</p> : null}
              {filteredSubmissions.map((row) => (
                <article className="admin-list-card lead-card" key={row.id}>
                  <div className="admin-list-head">
                    <div>
                      <strong>{row.fullName}</strong>
                      <p>{row.phone}</p>
                      <p>{row.email}</p>
                    </div>
                    <form action="/api/admin/submissions" method="post">
                      <input type="hidden" name="id" value={row.id} />
                      <input type="hidden" name="sort" value={submissionSort} />
                      <input type="hidden" name="q" value={query} />
                      <input type="hidden" name="locale" value={localeFilter} />
                      <input type="hidden" name="workType" value={workTypeFilter} />
                      <input type="hidden" name="city" value={cityFilter} />
                      <button className="btn btn-secondary" type="submit">
                        Smazat
                      </button>
                    </form>
                  </div>

                  <div className="lead-meta-grid">
                    <div>
                      <span>Locale</span>
                      <strong>{row.locale.toUpperCase()}</strong>
                    </div>
                    <div>
                      <span>Typ praci</span>
                      <strong>{row.workType || "-"}</strong>
                    </div>
                    <div>
                      <span>Plocha</span>
                      <strong>{row.area ? `${row.area} m²` : "-"}</strong>
                    </div>
                    <div>
                      <span>Mesto</span>
                      <strong>{row.city || "-"}</strong>
                    </div>
                    <div>
                      <span>Termin</span>
                      <strong>{row.deadline || "-"}</strong>
                    </div>
                    <div>
                      <span>Consent</span>
                      <strong>{row.consentAccepted ? "yes" : "no"}</strong>
                    </div>
                    <div>
                      <span>Cookies</span>
                      <strong>{row.cookieConsent || "-"}</strong>
                    </div>
                    <div>
                      <span>Odeslano</span>
                      <strong>{new Date(row.createdAt).toLocaleString("cs-CZ")}</strong>
                    </div>
                  </div>

                  {row.photoLink ? (
                    <p className="lead-link">
                      <span>Foto / link:</span>{" "}
                      <a href={row.photoLink} target="_blank" rel="noreferrer">
                        {row.photoLink}
                      </a>
                    </p>
                  ) : null}

                  <div className="lead-details">
                    <span>Popis projektu</span>
                    <p>{row.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
