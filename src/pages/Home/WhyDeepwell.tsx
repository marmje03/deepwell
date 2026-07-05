import { motion } from 'framer-motion'
import lifestyleImg from '../../assets/images/lifestyle.png'

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
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginBottom: '3rem' }}
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
              }}>
                Coffee that respects your time.
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {reasons.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  style={{
                    borderTop: '1px solid rgba(107, 42, 26, 0.2)',
                    padding: '2rem 0',
                  }}
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

          <div>
            <img
              src={lifestyleImg}
              alt='Deepwell lifestyle'
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
