import { PublicShell } from "@/components/PublicShell";
import { CareerPage } from "@/components/PublicPages";

export const dynamic = "force-dynamic";

export default async function CareerRootPage() {
  return (
    <PublicShell locale="cs">
      {await CareerPage({ locale: "cs" })}
    </PublicShell>
  );
}
