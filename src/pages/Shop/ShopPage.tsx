import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { products } from '../../data/products'

export default function ShopPage() {
  const { t } = useTranslation()

  return (
    <main style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '10rem 2rem 6rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
            {t('shop.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            {t('shop.title')}
          </h1>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(107, 42, 26, 0.06)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(107, 42, 26, 0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(107, 42, 26, 0.06)'
              }}
              >
                <Link to={`/shop/${product.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '2.5rem 1.5rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    <img
                      src={product.image}
                      alt={t(`flavours.${product.key}.name`)}
                      style={{
                        width: '100%',
                        maxWidth: '160px',
                        height: '200px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div style={{ padding: '0 1.5rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      color: 'var(--color-deep-roast)',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}>
                      {t(`flavours.${product.key}.name`)}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--color-deep-roast)',
                      opacity: 0.6,
                      letterSpacing: '0.03em',
                      marginBottom: '1rem',
                    }}>
                      {t(`flavours.${product.key}.tagline`)}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--color-deep-roast)',
                      fontWeight: 600,
                    }}>
                      {t('shop.price')}
                    </p>
                  </div>
                </Link>

                <div style={{ padding: '1.5rem' }}>
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-oat-cream)',
                      backgroundColor: 'var(--color-deep-roast)',
                      border: 'none',
                      padding: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    {t('shop.addToCart')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
