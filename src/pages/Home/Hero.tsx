import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImg from '../../assets/images/Hero.jpg'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-cold-blue)',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900' viewBox='0 0 1440 900'%3E%3Cg fill='none' stroke='rgba(107,42,26,0.08)' stroke-width='1'%3E%3Cpath d='M-200 200 C200 150 400 300 800 200 S1200 100 1700 200'/%3E%3Cpath d='M-200 250 C200 200 400 350 800 250 S1200 150 1700 250'/%3E%3Cpath d='M-200 300 C200 250 400 400 800 300 S1200 200 1700 300'/%3E%3Cpath d='M-200 350 C200 300 400 450 800 350 S1200 250 1700 350'/%3E%3Cpath d='M-200 400 C200 350 400 500 800 400 S1200 300 1700 400'/%3E%3Cpath d='M-200 450 C200 400 400 550 800 450 S1200 350 1700 450'/%3E%3Cpath d='M-200 500 C200 450 400 600 800 500 S1200 400 1700 500'/%3E%3Cpath d='M-200 550 C200 500 400 650 800 550 S1200 450 1700 550'/%3E%3Cpath d='M-200 600 C200 550 400 700 800 600 S1200 500 1700 600'/%3E%3Cpath d='M-200 650 C200 600 400 750 800 650 S1200 550 1700 650'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-deep-roast)',
            marginBottom: '1.5rem',
            opacity: 0.7,
          }}>
            Cold Brew Concentrate
          </p>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--color-deep-roast)',
            lineHeight: 1.1,
            marginBottom: '2rem',
            letterSpacing: '0.05em',
          }}>
            Depth in<br />every drop.
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-deep-roast)',
            opacity: 0.7,
            lineHeight: 1.8,
            marginBottom: '3rem',
            maxWidth: '400px',
          }}>
            Premium cold brew concentrate, crafted for those who take their coffee seriously. Just add water.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to='/shop' style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-oat-cream)',
              backgroundColor: 'var(--color-deep-roast)',
              padding: '1rem 2rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Shop Now
            </Link>

            <Link to='/brew-lab' style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-deep-roast)',
              border: '1px solid var(--color-deep-roast)',
              padding: '1rem 2rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Brew Lab
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={heroImg}
            alt='Deepwell Cold Brew'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
