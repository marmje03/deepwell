import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { recipes } from '../../data/recipes'

export default function RecipeDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const recipe = recipes.find(r => r.slug === slug)

  if (!recipe) {
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
          {t('recipes.notFound')}
        </p>
        <Link to="/recipes" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-deep-roast)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-deep-roast)',
          paddingBottom: '2px',
        }}>
          ← {t('recipes.backToRecipes')}
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
        <Link to="/recipes" style={{
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
          ← {t('recipes.backToRecipes')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginTop: '2rem' }}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{
              width: '100%',
              height: '360px',
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
            {recipe.flavour}
          </p>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.03em',
            marginBottom: '1.5rem',
          }}>
            {recipe.title}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-deep-roast)',
            opacity: 0.7,
            lineHeight: 1.8,
            maxWidth: '600px',
            marginBottom: '3rem',
          }}>
            {recipe.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-roast)',
                opacity: 0.6,
                marginBottom: '1.5rem',
              }}>
                {t('recipes.ingredients')}
              </h2>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.8,
                    lineHeight: 1.6,
                  }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-roast)',
                opacity: 0.6,
                marginBottom: '1.5rem',
              }}>
                {t('recipes.steps')}
              </h2>
              <ol style={{
                margin: 0,
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                {recipe.steps.map(step => (
                  <li key={step} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-deep-roast)',
                    opacity: 0.8,
                    lineHeight: 1.6,
                  }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
