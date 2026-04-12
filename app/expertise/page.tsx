import { ExpertisePageContent } from "../_components/expertise-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("expertise");

export default function ExpertisePage() {
  return <ExpertisePageContent />;
}
