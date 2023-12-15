import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} `}>
      <div className='text-gray-300 text-7xl md:text-9xl px-2 '>
        Search for Wiki <br/> Articles

      </div>
    </main>
  )
}
