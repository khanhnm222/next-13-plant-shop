import ProductCard from "./ProductCard"

interface ProductTeaserProps {
  className?: string;
  disableHeader?: boolean;
}

const ProductTeaser = ({ className, disableHeader = false }: ProductTeaserProps) => {
  const data = [1, 2, 3, 4]
  return (
    <div className={className ? `${className} mt-10` : 'mt-10'}>
      { !disableHeader && (
          <>
            <hr className="h-px my-8 bg-primary border-0 dark:bg-gray-700 opacity-[0.5]"/>
            <p className="text-xl py-1 font-semibold text-brand-green">YOU MAY ALSO LIKE</p>
          </>
        )
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