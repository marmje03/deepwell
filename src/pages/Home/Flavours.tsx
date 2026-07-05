import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import originalImg from '../../assets/images/original.png'
import vanillaImg from '../../assets/images/vanilla.png'
import mochaImg from '../../assets/images/mocha.png'
import caramelImg from '../../assets/images/caramel.png'

const flavours = [
  { key: 'original', img: originalImg, bg: 'var(--color-cold-blue)' },
  { key: 'vanilla', img: vanillaImg, bg: '#e4cfb9' },
  { key: 'mocha', img: mochaImg, bg: 'var(--color-rose-latte)' },
  { key: 'caramel', img: caramelImg, bg: 'var(--color-caramel-foam)' },
]

export default function Flavours() {
  const { t } = useTranslation()

  return (
    <section style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-oat-cream)',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
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
          {t('flavours.eyebrow')}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}
          dangerouslySetInnerHTML={{ __html: t('flavours.title') }}
        />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
      }}>
        {flavours.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: f.bg,
                borderRadius: '4px',
                padding: '3rem 1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={f.img}
                  alt={t(`flavours.${f.key}.name`)}
                  style={{
                    width: '100%',
                    maxWidth: '160px',
                    height: '220px',
                    objectFit: 'contain',
                    marginBottom: '2rem',
                  }}
                />
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: 'var(--color-deep-roast)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  {t(`flavours.${f.key}.name`)}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.6,
                  letterSpacing: '0.05em',
                }}>
                  {t(`flavours.${f.key}.tagline`)}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
