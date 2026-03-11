import { HomePage } from "@/components/PublicPages";
import { PublicShell } from "@/components/PublicShell";

export default function Home() {
  return (
    <PublicShell locale="cs">
      <HomePage locale="cs" />
    </PublicShell>
  );
}
