import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { articles as journalArticles } from '../../data/journal'

const articles = journalArticles.slice(0, 3).map((article, i) => ({
  key: `post${i + 1}`,
  slug: article.slug,
}))

export default function JournalPreview() {
  const { t } = useTranslation()

  return (
    <section style={{
      backgroundColor: 'var(--color-cold-blue)',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-deep-roast)',
              opacity: 0.6,
              marginBottom: '1rem',
            }}>
              {t('journalPreview.eyebrow')}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.05em',
            }}>
              {t('journalPreview.title')}
            </h2>
          </div>

          <Link to='/journal' style={{
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
            {t('journalPreview.allArticles')}
          </Link>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/journal/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    borderTop: '1px solid rgba(107, 42, 26, 0.2)',
                    paddingTop: '2rem',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.5,
                    marginBottom: '1rem',
                  }}>
                    {t(`journalPreview.${article.key}.category`)}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: 'var(--color-deep-roast)',
                    letterSpacing: '0.03em',
                    marginBottom: '1rem',
                    lineHeight: 1.4,
                  }}>
                    {t(`journalPreview.${article.key}.title`)}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.6,
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}>
                    {t(`journalPreview.${article.key}.excerpt`)}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.4,
                    letterSpacing: '0.1em',
                  }}>
                    {t(`journalPreview.${article.key}.date`)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
