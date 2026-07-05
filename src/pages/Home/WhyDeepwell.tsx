import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Simple by design',
    body: 'No equipment. No guesswork. Mix with water, milk, or oat — coffee exactly how you like it, every time.',
  },
  {
    number: '02',
    title: 'Uncompromising quality',
    body: 'Cold-brewed slowly for 20 hours. Every batch is smooth, never bitter, never rushed.',
  },
  {
    number: '03',
    title: 'Made for your routine',
    body: 'Four flavours, one format. Take it black, with oat milk, over ice, or blended — Deepwell fits your routine.',
  },
]

export default function WhyDeepwell() {
  return (
    <section style={{
      backgroundColor: 'var(--color-cold-blue)',
      padding: '8rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem' }}
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
            Why Deepwell
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
            maxWidth: '500px',
          }}>
            Coffee that respects your time.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4rem',
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.4,
                letterSpacing: '0.2em',
                marginBottom: '1.5rem',
              }}>
                {r.number}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                color: 'var(--color-deep-roast)',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                {r.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.7,
                lineHeight: 1.8,
              }}>
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
