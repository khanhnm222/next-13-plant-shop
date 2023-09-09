import Subscribe from '@/components/home/subscribe/page'
import TopCover from '@/components/home/top-cover/page'

export default function Home() {
  return (
    <>
      <header className='home-header w-full'>
        <TopCover />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Subscribe />
      </main>
    </>
  )
}
