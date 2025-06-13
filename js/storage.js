'use strict'

const products = {
    milkProducts: {
        milk: [
            {
                name: "Молоко Айс 3.2%",
                id: 'ais-3.2',
                price: 1.5,
                volume: "1000ml",
                image: "ais32.webp"
            },
            {
                name: "Молоко Айс 2,5%",
                id: 'ais-2.5',
                price: 1.5,
                volume: "1000ml",
                image: "ais25.jpg"
            },
            {
                name: "Молоко миндальное Alpro",
                id: 'alpro-almond',
                price: 3,
                volume: "1000ml",
                image: "alpro-almond.webp"
            },
            {
                name: "Молоко кокосовое Alpro",
                id: 'alpro-coconut',
                price: 3,
                volume: "1000ml",
                image: "alpro-coconut.webp"
            },
            {
                name: "Молоко Шадринское 7.1%",
                id: 'shadrinkoe-71',
                price: 2,
                volume: "500ml",
                image: "shadrinskoe-71.jpg"
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
            , {
                name: "Вода Асем Ай б/г",
                id: 'asemai-bezg',
                price: 0.99,
                volume: "1000ml",
                image: 'asemai-bezgaza.webp'
            },
            {
                name: "Вода Асем Ай г.",
                id: 'asemai-sg',
                price: 0.99,
                volume: "1000ml",
                image: 'asemai-s-gazom.webp'
            },
            {
                name: "Вода Набеглави минеральная",
                id: 'nabeglavi',
                price: 1.25,
                volume: "1000ml",
                image: 'nabeglavi.webp'
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
            },
            {
                name: "Сок Rich Вишня",
                id: 'rich-cherry',
                price: 3.49,
                volume: "1000ml",
                image: 'juice-rich-cherry.webp'
            },
            {
                name: "Сок Rich Апельсин",
                id: 'rich-orange',
                price: 3.49,
                volume: "1000ml",
                image: 'juice-rich-orange.webp'
            },
            {
                name: "Сок Piko Яблоко",
                id: 'piko-apple',
                price: 2,
                volume: "1000ml",
                image: 'juice-piko-apple.webp'
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
        cereal: [
            {
                name: "Рис Makfa Круглозерный",
                id: 'makfa-rice',
                price: 2,
                volume: "800g",
                image: 'MakfaRice.webp'
            },
            {
                name: "Ядрица Makfa Гречка",
                id: 'makfa-grechka',
                price: 2,
                volume: "800g",
                image: 'MakfaGrechka.webp'
            }
        ]
    },
    meatAndFish: {
        beefMeat: [
            {
                name: "Мякоть говядины постная",
                id: 'lean-beef',
                price: 17,
                volume: "1000g",
                image: 'Lean-beef.png'
            },
            {
                name: "Говяжья печень",
                id: 'beef-liver',
                price: 5.5,
                volume: "1000g",
                image: 'beef-liver.webp'
            }
        ],
        chickenMeat:[
            {
                name: "Филе Курочка Ряба",
                id: 'chicken-breast',
                price: 3.5,
                volume: "1000g",
                image: 'chicken-breast.webp'
            },
            {
                name: "Бедро курицы",
                id: 'chicken-thighs',
                price: 5.5,
                volume: "1000g",
                image: 'chicken-thighs.webp'
            }
        ],
        fishAndSeafood:[
            {
                name: "Форель Семь Морей стейки",
                id: 'trout-steak',
                price: 21,
                volume: "1000g",
                image: 'trout-steak.webp'
            },
            {
                name: "Скамбрия замороженная",
                id: 'mackerel-frozen',
                price: 11,
                volume: "1000g",
                image: 'mackerel-frozen.webp'
            }
        ]
    },
    breadAndCakes: {
        ordinaryBread: [
            {
                name: "Хлеб Harry's пшеничный",
                id: 'harrys-blue',
                price: 1.5,
                volume: "470g",
                image: 'bread-harrys-blue.webp'
            },
            {
                name: "Хлеб Harry's с отрубями",
                id: 'harrys-yellow',
                price: 1.5,
                volume: "470g",
                image: 'bread-harrys-yellow.webp'
            }
        ],
        breadCakes:[
            {
                name: "Кекс Ragout из банана",
                id: 'cake-ragout',
                price: 4.9,
                volume: "120g",
                image: 'banana-cake.webp'
            },
            {
                name: "Штрудель с яблоком и грецким орехом",
                id: 'strudel',
                price: 3.5,
                volume: "180g",
                image: 'strudel.webp'
            }
        ],
        pitaBread:[
            {
                name: "Тортилья Aly мультивитаминная",
                id: 'tortilla-aly',
                price: 4.5,
                volume: "420g",
                image: 'tortilla-aly.webp'
            },
            {
                name: "Лепешки Mission Super Soft",
                id: 'tortilla-mission',
                price: 2.3,
                volume: "250g",
                image: 'tortilla-mission.webp'
            }
        ]
    }
}