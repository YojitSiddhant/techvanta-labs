import { ServicesPageContent } from "../_components/services-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("services");

export default function ServicesPage() {
  return <ServicesPageContent />;
}
