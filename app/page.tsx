import { Builder } from "@/components/home/builder";
import { ContactCta } from "@/components/home/contact-cta";
import { Hero } from "@/components/home/hero";
import { Problems } from "@/components/home/problems";
import { Products } from "@/components/home/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Problems />
      <Builder />
      <ContactCta />
    </>
  );
}
