import lifestyleImg from '../assets/images/lifestyle.png'

export type Flavour = 'Original' | 'Vanilla' | 'Mocha' | 'Caramel'

export interface Recipe {
  slug: string
  title: string
  image: string
  flavour: Flavour
  description: string
  ingredients: string[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    slug: 'classic-iced-original',
    title: 'Classic Iced Original',
    image: lifestyleImg,
    flavour: 'Original',
    description: 'The purest way to drink Deepwell — concentrate, ice, and water. Smooth and balanced, every time.',
    ingredients: ['60ml Deepwell Original concentrate', 'Ice cubes', '120ml cold water'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Original concentrate.',
      'Top with cold water and stir gently.',
    ],
  },
  {
    slug: 'vanilla-oat-latte',
    title: 'Vanilla Oat Latte',
    image: lifestyleImg,
    flavour: 'Vanilla',
    description: 'A soft, creamy latte made with oat milk and Deepwell Vanilla concentrate.',
    ingredients: ['60ml Deepwell Vanilla concentrate', 'Ice cubes', '150ml oat milk'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Vanilla concentrate.',
      'Top with oat milk and stir until combined.',
    ],
  },
  {
    slug: 'mocha-frappe',
    title: 'Mocha Frappé',
    image: lifestyleImg,
    flavour: 'Mocha',
    description: 'A rich, blended frappé for when you need your coffee cold and chocolatey.',
    ingredients: ['60ml Deepwell Mocha concentrate', '1 cup ice', '100ml whole milk'],
    steps: [
      'Add the Deepwell Mocha concentrate, ice, and milk to a blender.',
      'Blend until smooth and frothy.',
      'Pour into a glass and serve immediately.',
    ],
  },
  {
    slug: 'salted-caramel-cold-brew',
    title: 'Salted Caramel Cold Brew',
    image: lifestyleImg,
    flavour: 'Caramel',
    description: 'Warm caramel notes with a touch of sea salt, served over ice.',
    ingredients: ['60ml Deepwell Caramel concentrate', 'Ice cubes', '120ml cold water', 'Pinch of sea salt'],
    steps: [
      'Fill a glass with ice.',
      'Pour in the Deepwell Caramel concentrate and water.',
      'Stir and finish with a pinch of sea salt.',
    ],
  },
  {
    slug: 'vanilla-cream-cold-foam',
    title: 'Vanilla Cream Cold Foam',
    image: lifestyleImg,
    flavour: 'Vanilla',
    description: 'Deepwell Vanilla topped with a light, whipped cold foam.',
    ingredients: ['60ml Deepwell Vanilla concentrate', 'Ice cubes', '100ml cold water', '60ml whipped cold foam'],
    steps: [
      'Fill a glass with ice and pour in the Deepwell Vanilla concentrate.',
      'Top with cold water.',
      'Finish with a layer of whipped cold foam.',
    ],
  },
  {
    slug: 'mocha-affogato',
    title: 'Mocha Affogato',
    image: lifestyleImg,
    flavour: 'Mocha',
    description: 'A dessert-style pour of Deepwell Mocha over a scoop of vanilla ice cream.',
    ingredients: ['45ml Deepwell Mocha concentrate', '1 scoop vanilla ice cream'],
    steps: [
      'Place a scoop of vanilla ice cream in a glass.',
      'Pour the Deepwell Mocha concentrate directly over the top.',
      'Serve immediately with a spoon.',
    ],
  },
]
