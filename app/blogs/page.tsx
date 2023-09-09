import BlogCard from "@/components/blog/BlogCard"
import Breadcrumb from "@/components/common/Breadcrumb"
import Pagination from "@/components/common/Pagination"

export default function Blogs() {
  const blogItems = [1,2,3,4,5,6,7,8]
  return (
    <>
      <main className="flex min-h-[53vh] flex-col items-center justify-between p-24 py-8">
        <div className="pt-2 col-span-9 text-brand-green pb-4">
          <div className="pb-2 text-center">
            <h3 className="text-xl font-extralight leading-none">The Shop</h3>
            <h2 className="pd-2 text-4xl font-bold tracking-tighter font-heading leading-none mb-1">Explore the blogs</h2>
          </div>
        </div>
        <section className=" dark:bg-gray-900">
          <div className="container px-6 pb-10 mx-auto">
            <div className="grid grid-cols-1 gap-10 mt-5 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogItems && blogItems.map(blog => (
                <BlogCard key={blog}/>
              ))}
            </div>
          </div>
        </section>
        <Pagination className="flex justify-center mt-16" />
      </main>
    </>
  )
}

