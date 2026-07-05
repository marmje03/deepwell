import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Fill your glass',
    body: 'Add ice to a glass — the more the better for a perfectly cold brew.',
  },
  {
    number: '02',
    title: 'Pour the concentrate',
    body: 'Add 1 part Deepwell concentrate. A standard serving is about 60ml.',
  },
  {
    number: '03',
    title: 'Add your liquid',
    body: 'Top with 2 parts water, oat milk, whole milk, or almond — your choice.',
  },
  {
    number: '04',
    title: 'Enjoy',
    body: 'Stir gently and enjoy. No equipment, no waiting, no compromise.',
  },
]

export default function BrewGuide() {
  return (
    <section style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-deep-roast)',
            opacity: 0.6,
            marginBottom: '1rem',
          }}>
            Brew Guide
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            Perfect iced coffee.<br />Every time.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderTop: '1px solid rgba(107, 42, 26, 0.2)',
                paddingTop: '2rem',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.15,
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
              }}>
                {step.number}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                color: 'var(--color-deep-roast)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.7,
                lineHeight: 1.8,
              }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
