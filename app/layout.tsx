import './globals.css'
import './style.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plant Shop',
  description: 'Plant shop created by Nguyen Minh Khanh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
