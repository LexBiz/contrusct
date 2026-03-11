"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Nespravne heslo.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Prihlaseni se nepodarilo.");
      setLoading(false);
    }
  }

  return (
    <section className="admin-login-page">
      <div className="container admin-login-shell">
        <div className="admin-login-card-new">
          <p className="section-tag">Internal CRM</p>
          <h1>Prihlaseni do ConStrukT VS adminu</h1>
          <p className="section-text">
            Tato cast slouzi pouze pro interni spravu leadu a pracovnich pozic.
          </p>
          <form onSubmit={onSubmit} className="admin-form">
            <label>
              Heslo
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Prihlasuji..." : "Prihlasit"}
              </button>
              {error ? <p className="form-msg error">{error}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
