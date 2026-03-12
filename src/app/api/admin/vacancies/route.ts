import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { toPublicUrl } from "@/lib/requestUrl";
import { addVacancy, removeVacancy, updateVacancy } from "@/lib/storage";

function revalidateCareerPages() {
  revalidatePath("/admin");
  revalidatePath("/career");
  revalidatePath("/en/career");
  revalidatePath("/de/career");
  revalidatePath("/ru/career");
  revalidatePath("/uk/career");
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.redirect(toPublicUrl(request, "/admin/login"), 303);
  }

  try {
    const form = await request.formData();
    const intent = String(form.get("intent") ?? "");

    if (intent === "delete") {
      const id = String(form.get("id") ?? "");
      if (id) {
        await removeVacancy(id);
      }
      revalidateCareerPages();
      return NextResponse.redirect(toPublicUrl(request, "/admin?tab=vacancies&deleted=1"), 303);
    }

    const id = String(form.get("id") ?? "").trim();
    const titleCs = String(form.get("titleCs") ?? "").trim();
    const titleUk = String(form.get("titleUk") ?? "").trim();
    const type = String(form.get("type") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const descriptionCs = String(form.get("descriptionCs") ?? "").trim();
    const descriptionUk = String(form.get("descriptionUk") ?? "").trim();

    const payload = {
      titleCs: titleCs || "Nova pozice",
      titleUk: titleUk || "Nova vakansiia",
      type: type || "HPP / ICO",
      location: location || "Ceska republika",
      descriptionCs: descriptionCs || "Detaily pozice doplnime po konzultaci.",
      descriptionUk: descriptionUk || "Detali vakansii utochnymo pid chas konsultatsii.",
    };

    if (intent === "update" && id) {
      await updateVacancy(id, payload);
      revalidateCareerPages();
      return NextResponse.redirect(toPublicUrl(request, "/admin?tab=vacancies&updated=1"), 303);
    }

    await addVacancy(payload);
    revalidateCareerPages();
    return NextResponse.redirect(toPublicUrl(request, "/admin?tab=vacancies&created=1"), 303);
  } catch {
    return NextResponse.redirect(toPublicUrl(request, "/admin?tab=vacancies&error=vacancy"), 303);
  }
}

