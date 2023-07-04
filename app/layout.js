import './globals.css'
import { ThemeContextProvider } from '../services/ThemeContextProvider'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin']})

export const metadata = { 
  title: 'My Barber',
  description: 'Votre barbier près de chez vous !',
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
