import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Страны и города',
  description: 'Описание стран и городов',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header><Link href="/">Страны и города</Link></header>
        <main>{children}</main>
      </body>
    </html>
  )
}
