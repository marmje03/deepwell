import lifestyleImg from '../assets/images/lifestyle.png'
import heroImg from '../assets/images/Hero.jpg'
import originalImg from '../assets/images/original.png'
import mochaImg from '../assets/images/mocha.png'
import caramelImg from '../assets/images/caramel.png'
import vanillaImg from '../assets/images/vanilla.png'

export interface Article {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  body: string
  image: string
}

export const articles: Article[] = [
  {
    slug: 'cold-brew-vs-iced-coffee',
    title: 'Cold Brew vs Iced Coffee',
    category: 'Brew Tips',
    excerpt: 'They look the same in the glass. But the process — and the result — could not be more different.',
    date: 'June 2025',
    image: lifestyleImg,
    body: 'Cold brew and iced coffee are often mistaken for the same drink, but the process behind each couldn\'t be more different. Iced coffee starts as hot-brewed coffee, cooled down and poured over ice — quick, but often thin and acidic once the ice melts.\n\nCold brew, on the other hand, is steeped in cold water for up to 20 hours. The slower extraction pulls out sweetness and body while leaving behind much of the acidity and bitterness you get from heat.\n\nThe result is a smoother, naturally sweeter concentrate that holds up whether you drink it black, over ice, or mixed with milk.',
  },
  {
    slug: 'perfect-summer-coffee',
    title: 'The Perfect Summer Coffee',
    category: 'Behind the Brand',
    excerpt: 'What makes a coffee feel like summer? We break down the elements of the perfect warm-weather cup.',
    date: 'May 2025',
    image: heroImg,
    body: 'Summer coffee isn\'t just about temperature — it\'s about how a drink makes you feel on a warm afternoon. Bright, refreshing, and light enough to enjoy without weighing you down.\n\nWe designed Deepwell concentrate with exactly that in mind: a smooth base that mixes easily with water, milk, or ice, adapting to whatever the season calls for.\n\nWhether you\'re on a porch, at your desk, or halfway through a hike, the perfect summer coffee is the one that meets you where you are.',
  },
  {
    slug: 'coffee-origins',
    title: 'Where Coffee Comes From',
    category: 'Origins',
    excerpt: 'From Ethiopian highlands to your glass — a journey through the origins of the world\'s favourite drink.',
    date: 'April 2025',
    image: originalImg,
    body: 'Coffee\'s story begins in the highlands of Ethiopia, where legend says a goat herder named Kaldi first noticed his goats becoming energetic after eating berries from a certain tree.\n\nFrom there, coffee cultivation spread across the Arabian Peninsula, through the Ottoman Empire, and eventually across the globe, shaping cultures and economies along the way.\n\nToday, coffee is grown across dozens of countries near the equator, each region imparting its own character to the beans — and every cup carries a small piece of that long journey.',
  },
  {
    slug: 'brewing-at-home',
    title: 'Five Mistakes to Avoid When Brewing at Home',
    category: 'Brew Tips',
    excerpt: 'Small details make a big difference. Here are the most common mistakes home brewers make — and how to fix them.',
    date: 'March 2025',
    image: mochaImg,
    body: 'Great coffee at home comes down to a handful of details that are easy to overlook. Using stale beans, inconsistent measurements, and water that\'s too hot are among the most common culprits.\n\nAnother frequent mistake is over-diluting concentrate or letting brewed coffee sit too long before serving, both of which flatten flavour.\n\nThe fix is usually simple: measure consistently, taste as you go, and don\'t be afraid to adjust the ratio of concentrate to water until it matches your taste.',
  },
  {
    slug: 'inside-our-process',
    title: 'Inside Our Process: From Bean to Bottle',
    category: 'Behind the Brand',
    excerpt: 'A look at how Deepwell concentrate goes from raw beans to the bottle in your fridge.',
    date: 'February 2025',
    image: caramelImg,
    body: 'Every batch of Deepwell starts with carefully selected beans, coarsely ground and steeped in cold, filtered water for roughly 20 hours.\n\nOnce steeping is complete, the concentrate is slowly filtered to remove sediment, resulting in a smooth, clean base that\'s ready to be flavoured or bottled as-is.\n\nFrom there, each bottle is sealed and chilled, ready to make its way to your fridge — no shortcuts, just time and patience doing the work.',
  },
  {
    slug: 'coffee-and-community',
    title: 'Coffee and Community: Why We Do This',
    category: 'Culture',
    excerpt: 'Coffee has always been about more than the drink itself. It\'s about the moments it creates.',
    date: 'January 2025',
    image: vanillaImg,
    body: 'Long before coffee shops existed, coffee houses served as gathering places for conversation, debate, and connection.\n\nThat spirit is part of why we started Deepwell — not just to make a good product, but to be part of the small rituals that bring people together, whether that\'s a morning routine or a slow weekend catch-up.\n\nA cup of coffee is rarely just about the coffee. It\'s about the pause it gives you, and who you share that pause with.',
  },
]
