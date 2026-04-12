import { LegalPageContent } from "../_components/legal-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("legal");

export default function LegalPage() {
  return <LegalPageContent />;
}
