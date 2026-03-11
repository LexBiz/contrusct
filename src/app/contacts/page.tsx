import { PublicShell } from "@/components/PublicShell";
import { ContactsPage } from "@/components/PublicPages";

export default function ContactsRootPage() {
  return (
    <PublicShell locale="cs">
      <ContactsPage locale="cs" />
    </PublicShell>
  );
}
