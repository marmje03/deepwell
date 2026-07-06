import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const isMobile = useIsMobile()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'no' : 'en')
  }

  useEffect(() => {
    let prevScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(currentScrollY < prevScrollY)
      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/recipes', label: t('nav.recipes') },
    { to: '/brew-lab', label: t('nav.brewLab') },
    // { to: '/journal', label: t('nav.journal') },
    { to: '/shop', label: t('nav.shop') },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}>
        <Link to='/' style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          color: 'var(--color-deep-roast)',
          textDecoration: 'none',
          letterSpacing: '0.15em',
        }}>
          DEEPWELL
        </Link>

        {isMobile ? (
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-roast)" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: 'var(--color-deep-roast)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}>
                {label}
              </Link>
            ))}

            <button onClick={toggleLanguage} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: 'var(--color-deep-roast)',
              background: 'none',
              border: '1px solid var(--color-deep-roast)',
              padding: '0.25rem 0.75rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}>
              {i18n.language === 'en' ? 'NO' : 'EN'}
            </button>

            <div style={{ position: 'relative', display: 'flex' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-deep-roast)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8V6a6 6 0 0 1 12 0v2" />
                <path d="M4 8h16l-1.2 12.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9L4 8Z" />
              </svg>
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                minWidth: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-deep-roast)',
                color: 'var(--color-oat-cream)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                0
              </span>
            </div>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'var(--color-oat-cream)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-roast)" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>

            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: 'var(--color-deep-roast)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </Link>
            ))}

            <button onClick={toggleLanguage} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: 'var(--color-deep-roast)',
              background: 'none',
              border: '1px solid var(--color-deep-roast)',
              padding: '0.5rem 1.25rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              marginTop: '1rem',
            }}>
              {i18n.language === 'en' ? 'NO' : 'EN'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
