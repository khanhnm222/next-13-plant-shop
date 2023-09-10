import Subscribe from '@/components/home/Subscribe'
import TopCover from '@/components/home/TopCover'

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
