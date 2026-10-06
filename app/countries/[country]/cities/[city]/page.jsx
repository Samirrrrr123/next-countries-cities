import Link from 'next/link'
import { notFound } from 'next/navigation'
import countries from '../../../../../data/countries'

export function generateStaticParams() {
  const params = []
  for (const country of countries) {
    for (const city of country.cities) {
      params.push({ country: country.id, city: city.id })
    }
  }
  return params
}

export const dynamicParams = false

export default async function CityPage({ params }) {
  const { country: countryId, city: cityId } = await params
  const country = countries.find(country => country.id === countryId)
  if (!country) notFound()

  const city = country.cities.find(city => city.id === cityId)
  if (!city) notFound()

  return (
    <>
      <Link href={`/countries/${country.id}/`} className="back">← {country.name}</Link>
      <h1>{city.name}</h1>
      <figure>
        <img src={city.image} alt={city.name} className="city-photo" />
        <figcaption>
          Фото: <a href={city.photoSource}>{city.photoAuthor}</a> · <a href={city.licenseUrl}>{city.photoLicense}</a>
        </figcaption>
      </figure>
      <section className="info">
        <h2>Описание города</h2>
        <p>Площадь: {city.area.toLocaleString('ru-RU')} км²</p>
        <p>Население: {city.population.toLocaleString('ru-RU')} человек</p>
        <p>Год основания: {city.founded}</p>
      </section>
    </>
  )
}
