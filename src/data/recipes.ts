import classicIcedCoffeeImg from '../assets/images/classic iced coffee.png'
import icedLatteImg from '../assets/images/iced latte.png'
import vanillaLatteImg from '../assets/images/vanilla latte.png'
import caramelLatteImg from '../assets/images/caramel latte.png'
import mochaLatteImg from '../assets/images/mocha latte.png'
import flatWhiteOnIceImg from '../assets/images/flat white on ice.png'
import honeyOatLatteImg from '../assets/images/honey oat latte.png'
import vanillaCinnamonLatteImg from '../assets/images/vanilla cinnamon latte.png'
import hazelnutLatteImg from '../assets/images/hazelnut latte.png'
import icedShakenCoffeeImg from '../assets/images/iced shaken coffee.png'
import coconutIcedCoffeeImg from '../assets/images/coconut iced coffee.png'
import orangeColdBrewImg from '../assets/images/orange cold brew.png'

export type Flavour = 'Original' | 'Vanilla' | 'Mocha' | 'Caramel' | 'Hazelnut' | 'Coconut'
export type RecipeCategory = 'everyday' | 'sweet' | 'refreshing'

export interface Recipe {
  slug: string
  title: string
  category: RecipeCategory
  image: string
  flavourBase: Flavour
  description: string
  ingredients: string[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    slug: 'classic-iced-coffee',
    title: 'Classic Iced Coffee',
    category: 'everyday',
    image: classicIcedCoffeeImg,
    flavourBase: 'Original',
    description: 'The purest way to drink Deepwell — concentrate, ice, and water. Smooth and balanced, every time.',
    ingredients: ['60ml Deepwell Original', '180ml cold water', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell concentrate.',
      'Add cold water.',
      'Stir gently and enjoy.',
    ],
  },
  {
    slug: 'iced-latte',
    title: 'Iced Latte',
    category: 'everyday',
    image: icedLatteImg,
    flavourBase: 'Original',
    description: 'A creamy, everyday classic — Deepwell Original poured over ice and topped with cold milk.',
    ingredients: ['60ml Deepwell Original', '180ml milk', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell concentrate.',
      'Add the milk.',
      'Stir gently.',
    ],
  },
  {
    slug: 'vanilla-latte',
    title: 'Vanilla Latte',
    category: 'everyday',
    image: vanillaLatteImg,
    flavourBase: 'Vanilla',
    description: 'A soft, creamy latte made with Deepwell Vanilla concentrate and cold milk.',
    ingredients: ['60ml Deepwell Vanilla', '180ml milk', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Vanilla concentrate.',
      'Add the milk.',
      'Stir gently.',
    ],
  },
  {
    slug: 'caramel-latte',
    title: 'Caramel Latte',
    category: 'everyday',
    image: caramelLatteImg,
    flavourBase: 'Caramel',
    description: 'Warm caramel notes meet cold milk for a smooth, everyday indulgence.',
    ingredients: ['60ml Deepwell Caramel', '180ml milk', 'Ice', 'Caramel drizzle (optional)'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Caramel concentrate.',
      'Add the milk.',
      'Finish with a drizzle of caramel.',
    ],
  },
  {
    slug: 'mocha-latte',
    title: 'Mocha Latte',
    category: 'everyday',
    image: mochaLatteImg,
    flavourBase: 'Mocha',
    description: 'Rich and chocolatey, Deepwell Mocha poured over ice with cold milk.',
    ingredients: ['60ml Deepwell Mocha', '180ml milk', 'Ice', 'Dark chocolate shavings'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Mocha concentrate.',
      'Add the milk.',
      'Top with chocolate shavings.',
    ],
  },
  {
    slug: 'flat-white-on-ice',
    title: 'Flat White on Ice',
    category: 'everyday',
    image: flatWhiteOnIceImg,
    flavourBase: 'Original',
    description: 'A stronger pour with a touch less milk, for those who like their coffee bold.',
    ingredients: ['60ml Deepwell Original', '120ml milk', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell concentrate.',
      'Add the milk.',
      'Stir gently.',
    ],
  },
  {
    slug: 'honey-oat-latte',
    title: 'Honey Oat Latte',
    category: 'sweet',
    image: honeyOatLatteImg,
    flavourBase: 'Original',
    description: 'Oat milk and a drizzle of honey turn Deepwell Original into a naturally sweet treat.',
    ingredients: ['60ml Deepwell Original', '180ml oat milk', '1 tsp honey', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell concentrate.',
      'Add the oat milk.',
      'Stir in the honey.',
    ],
  },
  {
    slug: 'vanilla-cinnamon-latte',
    title: 'Vanilla Cinnamon Latte',
    category: 'sweet',
    image: vanillaCinnamonLatteImg,
    flavourBase: 'Vanilla',
    description: 'A warm hint of cinnamon dusted over a cold Deepwell Vanilla latte.',
    ingredients: ['60ml Deepwell Vanilla', '180ml milk', 'Ice', 'Ground cinnamon'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Vanilla concentrate.',
      'Add the milk.',
      'Finish with a light dusting of cinnamon.',
    ],
  },
  {
    slug: 'hazelnut-latte',
    title: 'Hazelnut Latte',
    category: 'sweet',
    image: hazelnutLatteImg,
    flavourBase: 'Hazelnut',
    description: 'Deepwell Hazelnut brings a nutty, dessert-like sweetness to a cold, creamy latte.',
    ingredients: ['60ml Deepwell Hazelnut', '180ml milk', 'Ice', 'Crushed hazelnuts (optional)'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Hazelnut concentrate.',
      'Add the milk.',
      'Garnish with crushed hazelnuts.',
    ],
  },
  {
    slug: 'iced-shaken-coffee',
    title: 'Iced Shaken Coffee',
    category: 'refreshing',
    image: icedShakenCoffeeImg,
    flavourBase: 'Original',
    description: 'Shaken hard over ice for a light, frothy texture and a bright, refreshing finish.',
    ingredients: ['60ml Deepwell Original', '100ml cold water', '1 tsp simple syrup (optional)', 'Ice'],
    steps: [
      'Add all ingredients to a cocktail shaker.',
      'Shake vigorously for 10–15 seconds.',
      'Pour into a glass.',
      'Enjoy the light, frothy finish.',
    ],
  },
  {
    slug: 'coconut-iced-coffee',
    title: 'Coconut Iced Coffee',
    category: 'refreshing',
    image: coconutIcedCoffeeImg,
    flavourBase: 'Coconut',
    description: 'Coconut milk brings a light, tropical sweetness to Deepwell Coconut over ice.',
    ingredients: ['60ml Deepwell Coconut', '180ml coconut milk', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Coconut concentrate.',
      'Add the coconut milk.',
      'Stir gently.',
    ],
  },
  {
    slug: 'orange-cold-brew',
    title: 'Orange Cold Brew',
    category: 'refreshing',
    image: orangeColdBrewImg,
    flavourBase: 'Original',
    description: 'A citrus twist on cold brew — bright orange juice and Deepwell Original over ice.',
    ingredients: ['60ml Deepwell Original', '120ml cold water', '60ml fresh orange juice', 'Orange slice', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell concentrate.',
      'Add the orange juice and cold water.',
      'Garnish with an orange slice.',
    ],
  },
]
