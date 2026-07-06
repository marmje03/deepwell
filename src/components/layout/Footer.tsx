import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Footer() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <footer style={{
      backgroundColor: 'var(--color-deep-roast)',
      padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 3rem',
      color: 'var(--color-oat-cream)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? '2.5rem' : '4rem',
          marginBottom: isMobile ? '2.5rem' : '4rem',
        }}>
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              letterSpacing: '0.15em',
              marginBottom: '1.5rem',
            }}>
              DEEPWELL
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              opacity: 0.6,
              lineHeight: 1.8,
              maxWidth: '280px',
            }}>
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Shop */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              opacity: 0.5,
              marginBottom: '1.5rem',
            }}>
              {t('footer.shopHeading')}
            </p>
            {['original', 'vanilla', 'mocha', 'caramel', 'coconut', 'hazelnut'].map(key => (
              <Link key={key} to='/shop' style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--color-oat-cream)',
                textDecoration: 'none',
                opacity: 0.6,
                marginBottom: '0.75rem',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
              >
                {t(`flavours.${key}.name`)}
              </Link>
            ))}
          </div>

          {/* Explore */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              opacity: 0.5,
              marginBottom: '1.5rem',
            }}>
              {t('footer.exploreHeading')}
            </p>
            {[
              { key: 'brewLab', to: '/brew-lab' },
              { key: 'recipes', to: '/recipes' },
              // { key: 'journal', to: '/journal' },
            ].map(item => (
              <Link key={item.key} to={item.to} style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--color-oat-cream)',
                textDecoration: 'none',
                opacity: 0.6,
                marginBottom: '0.75rem',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              opacity: 0.5,
              marginBottom: '1.5rem',
            }}>
              {t('footer.contactHeading')}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              opacity: 0.6,
              lineHeight: 1.8,
            }}>
              {t('footer.email')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(245, 233, 220, 0.15)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: isMobile ? '0.75rem' : 0,
          textAlign: isMobile ? 'center' : undefined,
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            opacity: 0.4,
          }}>
            {t('footer.copyright')}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            opacity: 0.4,
          }}>
            {t('footer.credit')}
          </p>
        </div>
      </div>
    </footer>
  )
}
