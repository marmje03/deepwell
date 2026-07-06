import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../hooks/useIsMobile'
import heroImg from '../../assets/images/Hero.jpg'
import bgImg from '../../assets/images/deepwell background.png'

export default function Hero() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <section style={{
      minHeight: isMobile ? 'auto' : '100vh',
      backgroundColor: 'var(--color-cold-blue)',
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '8rem 2rem 5rem' : '8rem 2rem 4rem',
      paddingTop: isMobile ? '5rem' : undefined,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: '50%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <img
            src={heroImg}
            alt='Deepwell Cold Brew'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            }}
          />
        </motion.div>
      )}

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
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
            textAlign: isMobile ? 'center' : undefined,
          }}>
            {t('hero.eyebrow')}
          </p>
          {isMobile && (
            <div style={{
              width: '40px',
              height: '1px',
              background: 'var(--color-deep-roast)',
              margin: '0 auto 1.5rem',
            }} />
          )}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isMobile ? 'clamp(2.5rem, 8vw, 4rem)' : 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--color-deep-roast)',
            lineHeight: 1.1,
            marginBottom: '2rem',
            letterSpacing: '0.05em',
            textAlign: isMobile ? 'center' : undefined,
          }}>
            {t('hero.title')}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-deep-roast)',
            opacity: 0.7,
            lineHeight: 1.8,
            marginBottom: isMobile ? '2.5rem' : '3rem',
            maxWidth: isMobile ? '100%' : '400px',
            textAlign: isMobile ? 'center' : undefined,
            marginLeft: isMobile ? 'auto' : undefined,
            marginRight: isMobile ? 'auto' : undefined,
          }}>
            {t('hero.description')}
          </p>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
          }}>
            <Link to='/shop' style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-oat-cream)',
              backgroundColor: 'var(--color-deep-roast)',
              padding: '1rem 2rem',
              textDecoration: 'none',
              display: isMobile ? 'block' : 'inline-block',
              textAlign: 'center',
              width: isMobile ? '100%' : undefined,
              boxSizing: 'border-box',
            }}>
              {t('hero.shopNow')}
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
              display: isMobile ? 'block' : 'inline-block',
              textAlign: 'center',
              width: isMobile ? '100%' : undefined,
              boxSizing: 'border-box',
            }}>
              {t('hero.brewLab')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
