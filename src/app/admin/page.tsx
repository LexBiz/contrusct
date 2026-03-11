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
    sort?: string;
    created?: string;
    deleted?: string;
    deletedLead?: string;
    error?: string;
  }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const { sort, created, deleted, deletedLead, error } = await searchParams;
  const submissionSort = sort === "oldest" ? "oldest" : "newest";
  const [submissions, vacancies] = await Promise.all([getSubmissions(), getVacancies()]);
  const sortedSubmissions =
    submissionSort === "oldest"
      ? [...submissions].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      : submissions;

  const successMessage =
    created === "1"
      ? "Pozice byla uspesne vytvorena."
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

        <div className="admin-grid">
          <article className="admin-card">
            <h2>Nova pozice</h2>
            <form action="/api/admin/vacancies" method="post" className="admin-form">
              <input type="hidden" name="intent" value="create" />
              <div className="form-grid-new">
                <label>
                  Nazev pozice (CS)
                  <input name="titleCs" />
                </label>
                <label>
                  Nazev pozice (RU)
                  <input name="titleUk" />
                </label>
                <label>
                  Typ smlouvy
                  <input name="type" placeholder="HPP / ICO / Project" />
                </label>
                <label>
                  Lokalita
                  <input name="location" placeholder="Praha / Cesko / EU" />
                </label>
              </div>
              <label>
                Popis (CS), 1 bod na 1 radek
                <textarea name="descriptionCs" rows={5} />
              </label>
              <label>
                Popis (RU), 1 bod na 1 radek
                <textarea name="descriptionUk" rows={5} />
              </label>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Ulozit pozici
                </button>
              </div>
            </form>
          </article>

          <article className="admin-card">
            <h2>Aktivni pozice ({vacancies.length})</h2>
            <div className="admin-stack">
              {vacancies.length === 0 ? <p>Zatim nejsou zadne aktivni pozice.</p> : null}
              {vacancies.map((vacancy) => (
                <article className="admin-list-card" key={vacancy.id}>
                  <div className="admin-list-head">
                    <div>
                      <strong>{vacancy.titleCs || vacancy.titleUk || "Nova pozice"}</strong>
                      <p>
                        {(vacancy.type || "Contract") + " · " + (vacancy.location || "Ceska republika")}
                      </p>
                    </div>
                    <form action="/api/admin/vacancies" method="post">
                      <input type="hidden" name="intent" value="delete" />
                      <input type="hidden" name="id" value={vacancy.id} />
                      <button className="btn btn-secondary" type="submit">
                        Smazat
                      </button>
                    </form>
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

        <div className="admin-submissions-head">
          <h2>Leady z webu ({submissions.length})</h2>
          <div className="admin-sort-actions">
            <Link
              href={submissionSort === "newest" ? "/admin" : "/admin?sort=newest"}
              className={`btn ${submissionSort === "newest" ? "btn-primary" : "btn-secondary"}`}
            >
              Nejdrive nove
            </Link>
            <Link
              href="/admin?sort=oldest"
              className={`btn ${submissionSort === "oldest" ? "btn-primary" : "btn-secondary"}`}
            >
              Nejdrive stare
            </Link>
          </div>
        </div>

        <div className="admin-stack">
          {sortedSubmissions.length === 0 ? <p>Zatim nejsou zadne leady.</p> : null}
          {sortedSubmissions.map((row) => (
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
      </div>
    </section>
  );
}
