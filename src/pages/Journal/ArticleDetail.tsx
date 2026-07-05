import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { articles } from '../../data/journal'

export default function ArticleDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
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
          {t('journal.notFound')}
        </p>
        <Link to="/journal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-deep-roast)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-deep-roast)',
          paddingBottom: '2px',
        }}>
          ← {t('journal.backToJournal')}
        </Link>
      </main>
    )
  }

  return (
    <main style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '10rem 2rem 6rem',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Link to="/journal" style={{
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
          ← {t('journal.backToJournal')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginTop: '2rem' }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '4px',
              marginBottom: '2rem',
            }}
          />

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

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.03em',
            lineHeight: 1.3,
            marginBottom: '1rem',
          }}>
            {article.title}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--color-deep-roast)',
            opacity: 0.4,
            letterSpacing: '0.1em',
            marginBottom: '3rem',
          }}>
            {article.date}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {article.body.split('\n\n').map(paragraph => (
              <p key={paragraph} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.8,
                lineHeight: 1.8,
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
