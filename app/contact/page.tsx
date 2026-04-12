import { ContactPageContent } from "../_components/contact-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("contact");

export default function ContactPage() {
  return <ContactPageContent />;
}
