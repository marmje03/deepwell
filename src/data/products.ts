import originalImg from '../assets/images/original.png'
import vanillaImg from '../assets/images/vanilla.png'
import mochaImg from '../assets/images/mocha.png'
import caramelImg from '../assets/images/caramel.png'
import coconutImg from '../assets/images/coconut.png'
import hazelnutImg from '../assets/images/hazelnut.png'

export interface Product {
  slug: string
  key: string
  image: string
  description: string
}

export const products: Product[] = [
  {
    slug: 'original',
    key: 'original',
    image: originalImg,
    description: 'Our founding blend — smooth, balanced, and endlessly versatile. The everyday classic.',
  },
  {
    slug: 'vanilla',
    key: 'vanilla',
    image: vanillaImg,
    description: 'Soft and naturally sweet, with warm vanilla notes in every pour.',
  },
  {
    slug: 'mocha',
    key: 'mocha',
    image: mochaImg,
    description: 'Rich and chocolatey, crafted for those who love bold, dessert-like coffee.',
  },
  {
    slug: 'caramel',
    key: 'caramel',
    image: caramelImg,
    description: 'Warm caramel sweetness meets our signature cold brew — smooth and indulgent.',
  },
  {
    slug: 'coconut',
    key: 'coconut',
    image: coconutImg,
    description: 'Light, tropical, and refreshingly smooth — coconut at its best.',
  },
  {
    slug: 'hazelnut',
    key: 'hazelnut',
    image: hazelnutImg,
    description: 'Nutty and rich, a dessert-inspired twist on classic cold brew.',
  },
]
