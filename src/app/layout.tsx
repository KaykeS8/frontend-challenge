
import { Header } from '@/components/Header';
import { Saira } from 'next/font/google';
import "../style/globals.css"


const saira = Saira({ subsets: ['latin'], weight: ['300', '500', '600'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Genereted by create next app',
}


export default function RootLatout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={saira.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}