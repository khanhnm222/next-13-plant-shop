"use client";
import CommentSection from "@/components/product/CommentSection";
import ProductTeaser from "@/components/product/ProductTeaser";
import RankingStar from "@/components/product/RankingStar";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [countToAdd, setCountToAdd] = useState(1);

  const ImageProductsThumbnails = [
    "/monstera.webp",
    "/monstera-delicimosa.jpg",
    "/monstera.webp",
    "/delicimosa-var.webp",
  ];

  const decreaseImgIndex = () => {
    if (imgIndex !== 0) {
      setImgIndex((prev) => prev - 1);
    } else {
      setImgIndex(3);
    }
  };
  const increaseImgIndex = () => {
    if (imgIndex !== 3) {
      setImgIndex((prev) => prev + 1);
    } else {
      setImgIndex(0);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24 pt-10">
      <div className="max-w-[1920px] lg:mt-10 lg:p-6 lg:gap-24 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-4 lg:basis-1/2 items-center">
            <div className="relative">
              <button
                className="w-10 h-10 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
              top-[50%] left-2 lg:hidden"
                onClick={() => decreaseImgIndex()}
              >
                <Image
                  src="/icon-previous-green.svg"
                  alt="previous"
                  width={16}
                  height={16}
                />
              </button>
              <Image
                className="lg:rounded-2xl lg:cursor-pointer"
                src={ImageProductsThumbnails[imgIndex]}
                onClick={() => setLightboxOpen((prev) => !prev)}
                alt="plants"
                width={400}
                height={300}
                priority
              />
              <button
                className="w-10 h-10 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
              top-[50%] right-2 lg:hidden"
                onClick={() => increaseImgIndex()}
              >
                <Image src="/icon-next.svg" alt="next" width={16} height={16} />
              </button>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-4">
              {ImageProductsThumbnails.map((item, index: number) => (
                <Image
                  key={index}
                  className={`rounded-lg cursor-pointer hover:opacity-50 transition-all ${
                    imgIndex === index
                      ? "opacity-50 outline outline-2 outline-primary"
                      : ""
                  }`}
                  onClick={() => setImgIndex(index)}
                  src={item}
                  alt="plants"
                  width={120}
                  height={120}
                />
              ))}
            </div>
          </div>
          <div className="p-6 mt-5 flex flex-col place-self-start gap-5 lg:p-0 lg:basis-1/2 dark:text-white text-brand-green">
            <h3 className="text-primary text-md lg:text-sm">Plant Shop</h3>
            <h2 className="text-2xl font-bold lg:text-4xl">
              Monstera Deliciosa
            </h2>
            <p className="text-dark-grayish-blue text-sm lg:text-base">
              Monstera Deliciosa is set with the Queen symbol of the
              houseplants, houseplants. Monstera deliciosa prefers a cool, humid
              climate, with green leaves year round, and is easy to care for.
            </p>
            <RankingStar starNumber={3} />
            <div className="flex justify-between items-center lg:flex-col lg:items-start">
              <div className="flex justify-between items-center gap-4 font-bold">
                <p className="text-2xl">125.000 VND</p>
                <p className="text-primary bg-secondary px-2 rounded-lg">50%</p>
              </div>
              <p className="text-grayish-blue line-through">250.000 VND</p>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative lg:basis-1/3 max-w-[150px]">
                <button
                  className="absolute translate-y-[-50%] top-[50%] left-6 pt-[11px]"
                  onClick={() =>
                    countToAdd > 0 ? setCountToAdd((prev) => prev - 1) : null
                  }
                >
                  <Image
                    src="/icon-minus.svg"
                    alt="minus"
                    width={16}
                    height={16}
                  />
                </button>
                <input
                  type="number"
                  value={countToAdd}
                  min={0}
                  step={1}
                  className="w-full text-center bg-light-grayish-blue p-6 rounded-2xl font-bold h-3"
                  onChange={(e) =>
                    e.target.value !== ""
                      ? setCountToAdd(Number(e.target.value))
                      : setCountToAdd(0)
                  }
                />
                <button
                  className="absolute translate-y-[-50%] top-[50%] right-6"
                  onClick={() => setCountToAdd((prev) => prev + 1)}
                >
                  <Image
                    src="/icon-plus.svg"
                    alt="plus"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <button className="flex gap-4 h-3 text-center max-w-[200px] bg-primary justify-center items-center text-white font-bold p-6 rounded-2xl hover:bg-secondary hover:text-brand-green lg:basis-2/3">
                <Image
                  src="/icon-cart-white.svg"
                  className="text-white"
                  alt="cart"
                  width={30}
                  height={30}
                />{" "}
                Add to cart
              </button>
            </div>
          </div>

          <div
            className={`hidden ${
              lightboxOpen ? "lg:flex" : ""
            } justify-center items-center w-full h-full bg-black bg-opacity-75 absolute left-0 top-0`}
          >
            <div className="flex flex-col gap-8 items-center max-w-[800px] max-h-[80vh]">
              <button
                className="self-end"
                onClick={() => setLightboxOpen(false)}
              >
                <Image
                  src="/icon-close-white.svg"
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = "/icon-close-green.svg")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = "/icon-close-white.svg")
                  }
                  alt="close"
                  width={16}
                  height={16}
                />
              </button>
              <div className="relative">
                <button
                  className="w-12 h-12 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%] top-[50%] left-0 translate-x-[-50%]"
                  onClick={() => decreaseImgIndex()}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget.children[0] as HTMLImageElement;
                    el.src = "/icon-previouse-green.svg";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget.children[0] as HTMLImageElement;
                    el.src = "/icon-previous.svg";
                  }}
                >
                  <Image
                    src="/icon-previous.svg"
                    alt="previous"
                    width={16}
                    height={16}
                  />
                </button>
                <Image
                  className="lg:rounded-2xl lg:cursor-pointer"
                  src={ImageProductsThumbnails[imgIndex]}
                  onClick={() => setLightboxOpen((prev) => !prev)}
                  alt="plants"
                  width={250}
                  height={250}
                />
                <button
                  className="w-12 h-12 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%] top-[50%] right-0 translate-x-[50%]"
                  onClick={() => increaseImgIndex()}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget.children[0] as HTMLImageElement;
                    el.src = "/icon-next-green.svg";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget.children[0] as HTMLImageElement;
                    el.src = "/icon-next.svg";
                  }}
                >
                  <Image
                    src="/icon-next.svg"
                    alt="next"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <div className="hidden lg:grid grid-cols-4 gap-8">
                {ImageProductsThumbnails.map((item, index) => (
                  <Image
                    key={index}
                    className={`rounded-lg cursor-pointer hover:opacity-50 transition-all ${
                      imgIndex === index
                        ? "opacity-50 outline outline-2 outline-primary"
                        : ""
                    }`}
                    onClick={() => setImgIndex(index)}
                    src={item}
                    alt="plants"
                    width={120}
                    height={120}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProductTeaser />
        <CommentSection />
      </div>
    </main>
  );
}
