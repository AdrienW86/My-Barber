import './globals.css'
import { ThemeContextProvider } from '.././ThemeContextProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Barber',
  description: 'Votre barbier près de chez vous !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <head />
    <body>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </body>
  </html>
  )
}
