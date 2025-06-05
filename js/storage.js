'use strict'

const products = {
    milkProducts: {
        milk: [
            {
                name: "Lactel 3.2%",
                id: 'lactel-3.2',
                price: 1.5,
                volume: "1000ml",
                image: 'lactel3.2%.webp'
            },
            {
                name: "Lactel 2,5%",
                id: 'lactel-2.5',
                price: 1.5,
                volume: "1000ml",
                image: "lactel2.5%.webp"
            }
        ],

        cheese: [
            {
                name: "Творог President 0.1%",
                id: 'cottagePresident-0.1',
                price: 1.99,
                volume: "170gr",
                image: 'CottageCheesePresident01%.webp'
            },
            {
                name: "Творог President 5%",
                id: 'cottagePresident-5',
                price: 2.49,
                volume: "200gr",
                image: 'CottageCheesePresident5%.webp'
            }
        ],
        eggs: [
            {
                name: "Яйцо Казгер-Кус премиум куриные 10 шт",
                id: 'cottagePresident-0.1',
                price: 2.5,
                volume: "10 штук",
                image: 'eggKazgerPrem-10.webp'
            },
            {
                name: "Яйцо Казгер-Кус премиум куриные 15 шт",
                id: 'cottagePresident-5',
                price: 3.5,
                volume: "15 штук",
                image: 'eggKazgerPrem-15.webp'
            }
        ]

    },
    softDrinks: {
        water: [
            {
                name: "Вода Samal",
                id: 'Samal05',
                price: 0.5,
                volume: "500ml",
                image: 'samal0.5.jpg'
            },
            {
                name: "Вода Borjomi",
                id: 'Borjomi05',
                price: 1.5,
                volume: "500ml",
                image: 'borjomi.webp'
            }

        ],
        juice: [
            {
                name: "Сок Vila Dini Яблоко",
                id: 'VilaDini-apple',
                price: 3.79,
                volume: "1000ml",
                image: 'VilaDiniApple.webp'
            },
            {
                name: "Сок Vila Dini Вишня",
                id: 'VilaDini-cherry',
                price: 3.79,
                volume: "1000ml",
                image: 'VilaDiniCherry.webp'
            }

        ],
        soda: [
            {
                name: "coca-cola",
                id: 'cola-05',
                price: 1,
                volume: "500ml",
                image: 'cola05.webp'
            },
            {
                name: "coca-cola zero",
                id: 'colaZero-05',
                price: 1,
                volume: "500ml",
                image: 'ColaZero.webp'
            }

        ]
    },
    pets: {
        catFood: [
            {
                name: "Корм Felix Индейка",
                id: 'felix-turkey',
                price: 0.5,
                volume: "85g",
                image: 'felixTurkey.webp'
            },
            {
                name: "Корм Felix Ягненок",
                id: 'felix-lamb',
                price: 0.5,
                volume: "85g",
                image: 'felixLamb.webp'
            }
        ],
        dogFood: [
            {
                name: "Корм Glogin Говядина",
                id: 'glogin-beef',
                price: 2,
                volume: "750g",
                image: 'GloginBeef.webp'
            },
            {
                name: "Корм Glogin Курица",
                id: 'glogin-chicken',
                price: 2,
                volume: "750g",
                image: 'GloginChicken.webp'
            }
        ]
    },
    pastaCereals: {
        pasta: [
            {
                name: "Макароны Barilla Pipe rigate",
                id: 'barilla-pipe',
                price: 2,
                volume: "450g",
                image: 'BarillaPipe-450.webp'
            },
            {
                name: "Макароны Barilla Maccheroni",
                id: 'barilla-Maccheroni',
                price: 2,
                volume: "450g",
                image: 'BarillaMaccheroni-450.webp'
            }
        ],
        cereal:[
            {
                name: "Рис Makfa Круглозерный",
                id: 'makfa-rice',
                price: 2,
                volume: "800g",
                image: 'MakfaRice.webp'
            },
             {
                name: "дрица Makfa Круглозерный",
                id: 'makfa-grechka',
                price: 2,
                volume: "800g",
                image: 'MakfaGrechka.webp'
            }
        ]
    }
}