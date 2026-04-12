import { WhyUsPageContent } from "../_components/why-us-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("whyUs");

export default function WhyUsPage() {
  return <WhyUsPageContent />;
}
