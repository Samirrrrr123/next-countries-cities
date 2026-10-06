import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Страны и города',
  description: 'Учебный проект на Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header><Link href="/">Страны и города</Link></header>
        <main>{children}</main>
        <footer>Учебные данные. Площадь и население округлены.</footer>
      </body>
    </html>
  )
}
