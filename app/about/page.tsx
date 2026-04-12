import { AboutPageContent } from "../_components/about-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("about");

export default function AboutPage() {
  return <AboutPageContent />;
}
