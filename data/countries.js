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
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/4489_Karla_Marksa_street_Minsk.JPG/960px-4489_Karla_Marksa_street_Minsk.JPG',
      },
      { id: 'brest', name: 'Брест', area: 146, population: 350000, founded: 1019,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Brest_fortress_pre-war_Holmskie_vorota.jpg',
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
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Brandenburg_gate_Berlin_at_night_2022-12-09_01.jpg/960px-Brandenburg_gate_Berlin_at_night_2022-12-09_01.jpg',
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
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Turku_harbour_panorama.jpg/960px-Turku_harbour_panorama.jpg',
      },
    ],
  },
]

export default countries
