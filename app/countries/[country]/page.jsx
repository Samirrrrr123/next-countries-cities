import Link from 'next/link'
import { notFound } from 'next/navigation'
import countries from '../../../data/countries'

export function generateStaticParams() {
  return countries.map(country => ({ country: country.id }))
}

export const dynamicParams = false

export default async function CountryPage({ params }) {
  const { country: countryId } = await params
  const country = countries.find(country => country.id === countryId)

  if (!country) notFound()

  return (
    <>
      <Link href="/" className="back">← Все страны</Link>
      <h1>{country.name}</h1>
      <section className="info">
        <h2>Описание страны</h2>
        <p>Язык: {country.language}</p>
        <p>Площадь: {country.area.toLocaleString('ru-RU')} км²</p>
        <p>Население: {country.population.toLocaleString('ru-RU')} человек</p>
      </section>
      <h2>Города</h2>
      <ul className="links">
        {country.cities.map(city => (
          <li key={city.id}>
            <Link href={`/countries/${country.id}/cities/${city.id}/`}>{city.name} →</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
