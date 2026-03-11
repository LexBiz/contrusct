import { redirect } from "next/navigation";

export default function LocalizedAdminLoginRedirectPage() {
  redirect("/admin/login");
}
