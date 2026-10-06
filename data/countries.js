const countries = [
  {
    id: 'belarus',
    name: 'Беларусь',
    language: 'Белорусский, русский',
    area: 207600,
    population: 9100000,
    cities: [
      { id: 'minsk', name: 'Минск', area: 349, population: 2000000, founded: 1067 },
      { id: 'brest', name: 'Брест', area: 146, population: 350000, founded: 1019 },
    ],
  },
  {
    id: 'germany',
    name: 'Германия',
    language: 'Немецкий',
    area: 357700,
    population: 83500000,
    cities: [
      { id: 'berlin', name: 'Берлин', area: 892, population: 3800000, founded: 1237 },
      { id: 'munich', name: 'Мюнхен', area: 311, population: 1600000, founded: 1158 },
    ],
  },
  {
    id: 'finland',
    name: 'Финляндия',
    language: 'Финский, шведский',
    area: 338500,
    population: 5600000,
    cities: [
      { id: 'helsinki', name: 'Хельсинки', area: 214, population: 680000, founded: 1550 },
      { id: 'turku', name: 'Турку', area: 306, population: 200000, founded: 1229 },
    ],
  },
]

export default countries
