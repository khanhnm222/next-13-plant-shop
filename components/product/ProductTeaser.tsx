import Image from "next/image"
import Link from "next/link"
import Button from "../common/Button"
import RankingStar from "./RankingStar"

const ProductTeaser = () => {
  return (
    <div>
      <article>
        <Link href={"/products/1"} className='group relative'>
        <div className="flex justify-center bg-gray-100 shadow-xl aspect-w-1 aspect-h-1">
          <Image src='/monstera.webp' alt="plant" loading="lazy" width={250} height={350} className='h-auto' />
        </div>
        </Link>
      </article>
      <div className="grid text-center">
        <h3 className="text-brand-green text-xl font-medium truncate block p-5">Montera Diamon</h3>
        <div className="text-lg text-brand-green flex justify-center mb-5">
          <RankingStar />
          <span className="ml-5">125.000 VND</span>
        </div>
        <Button variant={"primary"} icon='only'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
        </Button>
      </div>
    </div>
  )
}
export default ProductTeaser