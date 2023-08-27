import Button from '@/components/common/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className='home-header w-full'>
        <div className='content wrapper h-full text-center flex flex-col items-center justify-center gap-2'>
          <h1 className='text-4xl md:text-6xl text-white font-medium'>
            Life with Planty
          </h1>
          <p className='text-lg max-w-4xl text-white mx-auto mt-2'>
            Enjoy your life!
          </p>
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
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </>
  )
}
