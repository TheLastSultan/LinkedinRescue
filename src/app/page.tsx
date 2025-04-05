"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Faq from "./faq";
import Clients from "./clients";
import Skills from "./skills";
import Blog, { TopBlogCategories } from "./top-blog-categories";
import Pricing from "./pricing";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Pricing />
      <Faq/>
      <TopBlogCategories/>
      <Footer />
    </>
  );
}
