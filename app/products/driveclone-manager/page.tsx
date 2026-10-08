import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { products } from "@/lib/products";

const product = products.find((p) => p.slug === "driveclone-manager")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.tagline,
};

export default function DriveCloneManagerPage() {
  return <CaseStudyShell product={product} />;
}
