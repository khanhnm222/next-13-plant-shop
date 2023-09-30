import Link from "next/link"
import Button from "../../common/Button"

const TopCover = () => {
  return (
    <div className='content wrapper h-full text-center flex flex-col items-center justify-center gap-2'>
      <div className='text-4xl md:text-6xl text-brand-green font-medium bg-white rounded-md p-[10px]'>
        Life with Planty
        <p className='text-lg max-w-4xl text-brand-green mx-auto mt-2'>
          Enjoy your life!
        </p>
      </div>
      <div className='buttons mt-4 flex flex-col md:flex-row gap-2 md:gap-4 w-40 md:w-fit'>
        <Link className='w-full md:w-auto' href='/products' title='Shop now'>
          <Button
            size='large'
            variant='primary'
            label='Shop now'
            additionalClass='w-full md:w-auto'
          />
        </Link>
        <Link
          className='w-full md:w-auto'
          href='/blogs'
          title='Discovery'
        >
          <Button
            size='large'
            variant='secondary'
            label='Discovery'
            additionalClass='w-full md:w-auto'
          />
        </Link>
      </div>
    </div>
  )
}

export default TopCover