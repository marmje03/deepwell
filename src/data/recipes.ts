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
import vanillaColdFoamLatteImg from '../assets/images/vanilla cold foam latte.png'
import honeyVanillaLatteImg from '../assets/images/honey vanilla latte.png'
import mintMochaImg from '../assets/images/mint mocha.png'
import mochaFrappeImg from '../assets/images/mocha frappe.png'
import toastedMarshmallowMochaImg from '../assets/images/toasted marshmellow mocha.png'
import saltedCaramelLatteImg from '../assets/images/salted caramel latte.png'
import caramelCreamColdBrewImg from '../assets/images/caramel cream cold brew.png'
import brownSugarCaramelLatteImg from '../assets/images/brown sugar caramel latte.png'
import coconutMochaImg from '../assets/images/coconut mocha.png'
import coconutVanillaLatteImg from '../assets/images/coconut vanilla latte.png'
import hazelnutCreamLatteImg from '../assets/images/hazelnut cream latte.png'
import hazelnutMochaImg from '../assets/images/hazelnut mocha.png'

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
  {
    slug: 'vanilla-cold-foam-latte',
    title: 'Vanilla Cold Foam Latte',
    category: 'sweet',
    image: vanillaColdFoamLatteImg,
    flavourBase: 'Vanilla',
    description: 'Deepwell Vanilla topped with a light, airy layer of cold foam.',
    ingredients: ['60ml Deepwell Vanilla', '150ml milk', '50ml cold foam', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Vanilla concentrate.',
      'Add the milk.',
      'Top with cold foam.',
    ],
  },
  {
    slug: 'honey-vanilla-latte',
    title: 'Honey Vanilla Latte',
    category: 'sweet',
    image: honeyVanillaLatteImg,
    flavourBase: 'Vanilla',
    description: 'A touch of honey sweetens this cold, creamy Deepwell Vanilla latte.',
    ingredients: ['60ml Deepwell Vanilla', '180ml milk', '1 tsp honey', 'Ice'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Vanilla concentrate.',
      'Add the milk.',
      'Stir in the honey.',
    ],
  },
  {
    slug: 'mint-mocha',
    title: 'Mint Mocha',
    category: 'refreshing',
    image: mintMochaImg,
    flavourBase: 'Mocha',
    description: 'Fresh mint and chocolate shavings brighten up a rich Deepwell Mocha.',
    ingredients: ['60ml Deepwell Mocha', '180ml milk', 'Ice', 'Fresh mint leaves', 'Chocolate shavings'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Mocha concentrate.',
      'Add the milk.',
      'Garnish with fresh mint and chocolate shavings.',
    ],
  },
  {
    slug: 'mocha-frappe',
    title: 'Mocha Frappé',
    category: 'sweet',
    image: mochaFrappeImg,
    flavourBase: 'Mocha',
    description: 'Blended cold and topped with cream — a dessert-style Deepwell Mocha treat.',
    ingredients: ['60ml Deepwell Mocha', '180ml milk', '1 cup ice', 'Whipped cream (optional)', 'Chocolate shavings'],
    steps: [
      'Blend the Deepwell Mocha concentrate, milk and ice until smooth.',
      'Pour into a glass.',
      'Top with whipped cream and chocolate shavings.',
    ],
  },
  {
    slug: 'toasted-marshmallow-mocha',
    title: 'Toasted Marshmallow Mocha',
    category: 'sweet',
    image: toastedMarshmallowMochaImg,
    flavourBase: 'Mocha',
    description: 'Toasted marshmallows melt into a rich, chocolatey Deepwell Mocha.',
    ingredients: ['60ml Deepwell Mocha', '180ml milk', 'Ice', 'Toasted marshmallows'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Mocha concentrate.',
      'Add the milk.',
      'Top with toasted marshmallows.',
    ],
  },
  {
    slug: 'salted-caramel-latte',
    title: 'Salted Caramel Latte',
    category: 'sweet',
    image: saltedCaramelLatteImg,
    flavourBase: 'Caramel',
    description: 'Caramel sauce and a pinch of sea salt make this Deepwell Caramel latte irresistible.',
    ingredients: ['60ml Deepwell Caramel', '180ml milk', 'Ice', 'Caramel sauce', 'Pinch of sea salt'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Caramel concentrate.',
      'Add the milk.',
      'Finish with caramel sauce and a pinch of sea salt.',
    ],
  },
  {
    slug: 'caramel-cream-cold-brew',
    title: 'Caramel Cream Cold Brew',
    category: 'sweet',
    image: caramelCreamColdBrewImg,
    flavourBase: 'Caramel',
    description: 'Cold foam and a caramel drizzle crown this smooth Deepwell Caramel cold brew.',
    ingredients: ['60ml Deepwell Caramel', '120ml cold water', 'Ice', '50ml cold foam', 'Caramel drizzle'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Caramel concentrate.',
      'Add the cold water.',
      'Top with cold foam and caramel drizzle.',
    ],
  },
  {
    slug: 'brown-sugar-caramel-latte',
    title: 'Brown Sugar Caramel Latte',
    category: 'sweet',
    image: brownSugarCaramelLatteImg,
    flavourBase: 'Caramel',
    description: 'Brown sugar deepens the warmth of Deepwell Caramel in this cold latte.',
    ingredients: ['60ml Deepwell Caramel', '180ml milk', 'Ice', '1 tsp brown sugar'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Caramel concentrate.',
      'Add the milk.',
      'Stir in the brown sugar.',
    ],
  },
  {
    slug: 'coconut-mocha',
    title: 'Coconut Mocha',
    category: 'sweet',
    image: coconutMochaImg,
    flavourBase: 'Coconut',
    description: 'Chocolate milk and Deepwell Coconut come together for a rich, tropical twist.',
    ingredients: ['60ml Deepwell Coconut', '180ml chocolate milk', 'Ice', 'Chocolate shavings'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Coconut concentrate.',
      'Add the chocolate milk.',
      'Finish with chocolate shavings.',
    ],
  },
  {
    slug: 'coconut-vanilla-latte',
    title: 'Coconut Vanilla Latte',
    category: 'refreshing',
    image: coconutVanillaLatteImg,
    flavourBase: 'Coconut',
    description: 'A splash of vanilla syrup rounds out this light, tropical Deepwell Coconut latte.',
    ingredients: ['60ml Deepwell Coconut', '180ml milk', 'Ice', 'Splash of vanilla syrup'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Coconut concentrate.',
      'Add the milk.',
      'Finish with a splash of vanilla syrup.',
    ],
  },
  {
    slug: 'hazelnut-cream-latte',
    title: 'Hazelnut Cream Latte',
    category: 'sweet',
    image: hazelnutCreamLatteImg,
    flavourBase: 'Hazelnut',
    description: 'Cold foam and crushed hazelnuts top off this creamy Deepwell Hazelnut latte.',
    ingredients: ['60ml Deepwell Hazelnut', '180ml milk', 'Ice', '50ml cold foam', 'Crushed hazelnuts'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Hazelnut concentrate.',
      'Add the milk.',
      'Top with cold foam and crushed hazelnuts.',
    ],
  },
  {
    slug: 'hazelnut-mocha',
    title: 'Hazelnut Mocha',
    category: 'sweet',
    image: hazelnutMochaImg,
    flavourBase: 'Hazelnut',
    description: 'Chocolate milk and Deepwell Hazelnut combine for a nutty, chocolatey sip.',
    ingredients: ['60ml Deepwell Hazelnut', '180ml chocolate milk', 'Ice', 'Chocolate shavings'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Hazelnut concentrate.',
      'Add the chocolate milk.',
      'Finish with chocolate shavings.',
    ],
  },
]
