"use client";

import Carousel from "@/components/home/Carousel";
import Subscribe from "@/components/home/Subscribe";
import TopCover from "@/components/home/TopCover";
import Features from "@/components/home/Features";
import Advertising from "@/components/home/Advertising";
import ProductTeaser from "@/components/product/ProductTeaser";
import ProductGallery from "@/components/product/ProductGallery";

export default function Home() {
  return (
    <>
      <header className="home-header w-full">
        <TopCover />
      </header>
      <Carousel />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Features />
        <ProductTeaser enableSecondHeader className="container"/>
        <Advertising />
        <ProductGallery />
        <Subscribe />
      </main>
    </>
  );
}
