import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'WikiHunt: Search Wikipedia Articles',
  description: 'Search Wikipedia Articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-500'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
