import './globals.css'
import { ThemeContextProvider } from '../services/ThemeContextProvider'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  
  title: 'My Barber',
  description: 'Votre barbier près de chez vous !',

  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     url: '/favicon/favicon-32x32.png',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '16x16',
  //     url: '/favicon/favicon-16x16.png',
  //   },
  //   {
  //     rel: 'apple-touch-icon',
  //     sizes: '180x180',
  //     url: '/favicon/apple-touch-icon.png',
  //   },
  // ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       
  
  
    <body>
      <ThemeContextProvider>
        <Nav />
        {children}
        <Footer />
      </ThemeContextProvider>
    </body>
  </html>
  )
}
