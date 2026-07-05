import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { articles } from '../../data/journal'

export default function JournalPage() {
  const { t } = useTranslation()
  const [featured, ...rest] = articles

  return (
    <main style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '10rem 2rem 6rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            {t('journal.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            {t('journal.title')}
          </h1>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem' }}
        >
          <Link to={`/journal/${featured.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              cursor: 'pointer',
            }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.5,
                  marginBottom: '1rem',
                }}>
                  {t('journal.featuredLabel')} · {featured.category}
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: 'var(--color-deep-roast)',
                  letterSpacing: '0.03em',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem',
                }}>
                  {featured.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.7,
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}>
                  {featured.excerpt}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.4,
                  letterSpacing: '0.1em',
                }}>
                  {featured.date}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining articles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {rest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/journal/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-deep-roast)',
                      opacity: 0.5,
                      marginBottom: '0.75rem',
                    }}>
                      {article.category}
                    </p>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      color: 'var(--color-deep-roast)',
                      letterSpacing: '0.03em',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem',
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--color-deep-roast)',
                      opacity: 0.4,
                      letterSpacing: '0.1em',
                    }}>
                      {article.date}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
