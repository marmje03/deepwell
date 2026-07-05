import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-deep-roast)',
      padding: '5rem 2rem 3rem',
      color: 'var(--color-oat-cream)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
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
              Premium cold brew concentrate. Crafted for those who take their coffee seriously.
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
              Shop
            </p>
            {['Original', 'Vanilla', 'Mocha', 'Caramel'].map(item => (
              <Link key={item} to='/shop' style={{
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
                {item}
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
              Explore
            </p>
            {[
              { label: 'Brew Lab', to: '/brew-lab' },
              { label: 'Recipes', to: '/recipes' },
              { label: 'Journal', to: '/journal' },
            ].map(item => (
              <Link key={item.label} to={item.to} style={{
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
                {item.label}
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
              Contact
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              opacity: 0.6,
              lineHeight: 1.8,
            }}>
              hello@deepwell.co
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(245, 233, 220, 0.15)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            opacity: 0.4,
          }}>
            © 2025 Deepwell. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            opacity: 0.4,
          }}>
            A concept brand by Reden Studio.
          </p>
        </div>
      </div>
    </footer>
  )
}
