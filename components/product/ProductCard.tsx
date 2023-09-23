import { getDiscountedPricePercentage } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../common/Button";
import RankingStar from "./RankingStar";

interface ProductProps {
  name?: string;
  isSaleOff?: boolean;
}
const ProductCard = ({ name, isSaleOff = false }: ProductProps) => {
  return (
    <div className="max-w-[233px]">
      <article>
        <Link href={"/products/1"} className="group overflow-hidden">
          <div className="flex justify-center aspect-w-1 aspect-h-1 group overflow-hidden relative rounded-lg object-cover">
            <Image
              src="/monstera.webp"
              alt="plant"
              width={250}
              height={350}
              priority
              className="group-hover:scale-110 duration-200 rounded-lg"
            />
            {isSaleOff && (
              <div className="absolute top-0 right-0">
                <div className="w-32 h-6 absolute top-4 -right-8">
                  <div className="flex justify-center flex-col h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                    SALE
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>
      </article>
      <div className="grid text-center">
        <h3 className="text-brand-green text-xl font-medium truncate block p-5">
          Montera Diamon
        </h3>
        <div className="text-lg text-brand-green flex justify-center mb-5 flex-wrap gap-[5px]">
          <RankingStar />
          <p className="ml-auto text-base font-medium text-primary">
            <span>125.000 VND</span>
            {/* {getDiscountedPricePercentage(
              250000,
              125000
            )}
            % off */}
          </p>
        </div>
        <Button variant={"primary"} icon="only">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
