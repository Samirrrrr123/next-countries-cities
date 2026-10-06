const countries = [
  {
    id: 'belarus',
    image: 'https://flagcdn.com/w160/by.png',
    name: 'Беларусь',
    language: 'Белорусский, русский',
    area: 207600,
    population: 9100000,
    cities: [
      { id: 'minsk', name: 'Минск', area: 349, population: 2000000, founded: 1067,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Minsk_city_skyline.jpg/960px-Minsk_city_skyline.jpg',
      },
      { id: 'brest', name: 'Брест', area: 146, population: 350000, founded: 1019,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Brest_Fortress_Ring_Barracks_2023-04-23_3548.jpg/960px-Brest_Fortress_Ring_Barracks_2023-04-23_3548.jpg',
      },
    ],
  },
  {
    id: 'germany',
    image: 'https://flagcdn.com/w160/de.png',
    name: 'Германия',
    language: 'Немецкий',
    area: 357700,
    population: 83500000,
    cities: [
      { id: 'berlin', name: 'Берлин', area: 892, population: 3800000, founded: 1237,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Brandenburg_Gate%2C_Berlin.jpg/960px-Brandenburg_Gate%2C_Berlin.jpg',
      },
      { id: 'munich', name: 'Мюнхен', area: 311, population: 1600000, founded: 1158,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Munich_Marienplatz_Town_Hall_Virgin_Mary.jpg/960px-Munich_Marienplatz_Town_Hall_Virgin_Mary.jpg',
      },
    ],
  },
  {
    id: 'finland',
    image: 'https://flagcdn.com/w160/fi.png',
    name: 'Финляндия',
    language: 'Финский, шведский',
    area: 338500,
    population: 5600000,
    cities: [
      { id: 'helsinki', name: 'Хельсинки', area: 214, population: 680000, founded: 1550,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Helsinki_cathedral.jpg/960px-Helsinki_cathedral.jpg',
      },
      { id: 'turku', name: 'Турку', area: 306, population: 200000, founded: 1229,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Turku_Cathedral_31.jpg/960px-Turku_Cathedral_31.jpg',
      },
    ],
  },
]

export default countries
