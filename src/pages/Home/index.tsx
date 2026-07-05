import Hero from './Hero'
import Flavours from './Flavours'
import WhyDeepwell from './WhyDeepwell'
import BrewGuide from './BrewGuide'
// import JournalPreview from './JournalPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <Flavours />
      <WhyDeepwell />
      <BrewGuide />
      {/* <JournalPreview /> */}
    </main>
  )
}
