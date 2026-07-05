import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { products } from '../../data/products'
import Toast from '../../components/ui/Toast'

export default function ProductDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const product = products.find(p => p.slug === slug)
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    if (!toastVisible) return
    const timer = setTimeout(() => setToastVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [toastVisible])

  if (!product) {
    return (
      <main style={{
        backgroundColor: 'var(--color-oat-cream)',
        padding: '10rem 2rem 6rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-deep-roast)',
          marginBottom: '1.5rem',
        }}>
          {t('shop.soldOut')}
        </p>
        <Link to="/shop" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-deep-roast)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-deep-roast)',
          paddingBottom: '2px',
        }}>
          ← {t('shop.backToShop')}
        </Link>
      </main>
    )
  }

  return (
    <main style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '10rem 2rem 6rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/shop" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-deep-roast)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-deep-roast)',
          paddingBottom: '2px',
          opacity: 0.7,
        }}>
          ← {t('shop.backToShop')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '4px',
            padding: '3rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img
              src={product.image}
              alt={t(`flavours.${product.key}.name`)}
              style={{
                width: '100%',
                maxWidth: '280px',
                height: '360px',
                objectFit: 'contain',
              }}
            />
          </div>

          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.03em',
              marginBottom: '1rem',
            }}>
              {t(`flavours.${product.key}.name`)}
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.6,
              letterSpacing: '0.03em',
              marginBottom: '1.5rem',
            }}>
              {t(`flavours.${product.key}.tagline`)}
            </p>

            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-deep-roast)',
              marginBottom: '2rem',
            }}>
              {t('shop.price')}
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.7,
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              {product.description}
            </p>

            <button
              type="button"
              onClick={() => setToastVisible(true)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-oat-cream)',
                backgroundColor: 'var(--color-deep-roast)',
                border: 'none',
                padding: '1rem 2.5rem',
                cursor: 'pointer',
              }}
            >
              {t('shop.addToCart')}
            </button>
          </div>
        </motion.div>
      </div>

      <Toast message={t('shop.conceptNotice')} visible={toastVisible} />
    </main>
  )
}
