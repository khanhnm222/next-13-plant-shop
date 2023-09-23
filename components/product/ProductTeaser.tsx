import ProductCard from "./ProductCard"

const ProductTeaser = () => {
  const data = [1, 2, 3, 4]
  return (
    <div className="mt-10">
      <hr className="h-px my-8 bg-primary border-0 dark:bg-gray-700 opacity-[0.5]"/>
      <p className="text-xl py-1 font-semibold text-brand-green">YOU MAY ALSO LIKE</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 mt-5 justify-items-center">
        {data?.map((item: any) => (
          <ProductCard key={item}/>
        ))}
      </div>
    </div>
  )
}
export default ProductTeaser