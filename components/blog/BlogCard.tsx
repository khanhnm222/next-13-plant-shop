'use client'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Button from "../common/Button"
import Link from 'next/link'

const BlogCard = () => {
  const router = useRouter()
  return (
    <div className="max-w-xl">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 group overflow-hidden relative">
        <Link href="/blogs/1">
          <Image
            className="rounded-t-lg object-cover group-hover:scale-110 duration-200"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="Blog Image"
            width={920}
            height={613}
          />
        </Link>
        <div className="p-5">
          <Link href="blogs/1">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">3 Plants That Will Bring Luck Into Your Life</h5>
          </Link>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 line-clamp-3">
            As you likely already know, plants can really spruce up your space and add a new level of gorgeous decor to your home. They help to create a welcoming and cozy environment, which can positively affect your mood. But did you know that some plants are thought to bring luck and good fortune into your life? If you are hoping for 2023 to be your lucky year, here are 3 plants that can help bring forth some luck in your life.
          </p>
          <Button variant={"primary"} icon='only' onClick={(e) => router.push('/blogs/1')}>
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default BlogCard