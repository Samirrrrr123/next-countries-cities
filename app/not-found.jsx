import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>Страница не найдена</h1>
      <p>Такой страны или города нет в списке.</p>
      <Link href="/" className="back">← Все страны</Link>
    </>
  )
}
