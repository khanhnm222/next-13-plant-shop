import ProductCard from "./ProductCard"

interface ProductTeaserProps {
  className?: string;
  enableSecondHeader?: boolean;
}

const ProductTeaser = ({
  className,
  enableSecondHeader = false,
}: ProductTeaserProps) => {
  const data = [1, 2, 3, 4]
  return (
    <div className={className ? `${className} mt-10` : 'mt-10'}>
      { enableSecondHeader ?
        <div>
          <h2 className="mt-10 pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
            Featured Products
          </h2>
          <div className="mx-auto mb-16 border-b border-brand-green w-44 dark:border-gray-400"></div>
        </div> : 
        <div>
          <hr className="h-px my-8 bg-primary border-0 dark:bg-gray-700 opacity-[0.5]"/>
          <p className="text-xl py-1 font-semibold text-brand-green">YOU MAY ALSO LIKE</p>
        </div>
      }
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 mt-5 justify-items-center">
        {data?.map((item: any) => (
          <ProductCard key={item} isTeaser/>
        ))}
      </div>
    </div>
  )
}
export default ProductTeaser