import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { toPublicUrl } from "@/lib/requestUrl";
import { removeSubmission } from "@/lib/storage";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.redirect(toPublicUrl(request, "/admin/login"), 303);
  }

  try {
    const form = await request.formData();
    const id = String(form.get("id") ?? "");
    const sort = String(form.get("sort") ?? "newest");
    const query = String(form.get("q") ?? "").trim();
    const locale = String(form.get("locale") ?? "").trim();
    const workType = String(form.get("workType") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();

    if (id) {
      await removeSubmission(id);
    }

    revalidatePath("/admin");
    const url = toPublicUrl(request, "/admin");
    if (sort === "oldest") {
      url.searchParams.set("sort", "oldest");
    }
    if (query) {
      url.searchParams.set("q", query);
    }
    if (locale) {
      url.searchParams.set("locale", locale);
    }
    if (workType) {
      url.searchParams.set("workType", workType);
    }
    if (city) {
      url.searchParams.set("city", city);
    }
    url.searchParams.set("deletedLead", "1");
    return NextResponse.redirect(url, 303);
  } catch {
    return NextResponse.redirect(toPublicUrl(request, "/admin?error=submission"), 303);
  }
}
