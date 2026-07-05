import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import lifestyleImg from '../../assets/images/lifestyle.png'

const reasons = [
  { key: 'point1' },
  { key: 'point2' },
  { key: 'point3' },
]

export default function WhyDeepwell() {
  const { t } = useTranslation()

  return (
    <section style={{
      backgroundColor: 'var(--color-cold-blue)',
      padding: '4rem 2rem',
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
              style={{ marginBottom: '2.5rem' }}
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
                {t('whyDeepwell.eyebrow')}
              </p>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--color-deep-roast)',
                letterSpacing: '0.05em',
              }}>
                {t('whyDeepwell.title')}
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {reasons.map((r, i) => (
                <motion.div
                  key={r.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  style={{
                    borderTop: '1px solid rgba(107, 42, 26, 0.2)',
                    padding: '1.5rem 0 0',
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
                    {t(`whyDeepwell.${r.key}.number`)}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: 'var(--color-deep-roast)',
                    letterSpacing: '0.05em',
                    marginBottom: '1rem',
                  }}>
                    {t(`whyDeepwell.${r.key}.title`)}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.7,
                    lineHeight: 1.8,
                  }}>
                    {t(`whyDeepwell.${r.key}.description`)}
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
                width: '75%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
