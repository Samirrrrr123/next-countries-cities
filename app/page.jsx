import Link from 'next/link'
import countries from '../data/countries'

export default function HomePage() {
  return (
    <>
      <h1>Список стран</h1>
      <p>Выберите страну, чтобы посмотреть её описание и города.</p>
      <ul className="links">
        {countries.map(country => (
          <li key={country.id}>
            <Link href={`/countries/${country.id}/`}><img src={country.image} alt={country.name} className="flag" />{country.name} →</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
