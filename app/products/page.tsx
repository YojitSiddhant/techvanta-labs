import { ProductsPageContent } from "../_components/products-page-content";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("products");

export default function ProductsPage() {
  return <ProductsPageContent />;
}
