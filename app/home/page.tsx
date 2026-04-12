import { HomePageContent } from "../_components/home-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("home");

export default function HomePage() {
  return <HomePageContent />;
}
