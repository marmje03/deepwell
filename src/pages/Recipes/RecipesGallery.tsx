import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { recipes, type RecipeCategory } from '../../data/recipes'

const categoryOrder: RecipeCategory[] = ['everyday', 'sweet', 'refreshing']

export default function RecipesGallery() {
  const { t } = useTranslation()

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
            {t('recipes.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            {t('recipes.title')}
          </h1>
        </motion.div>

        {categoryOrder.map(category => {
          const categoryRecipes = recipes.filter(recipe => recipe.category === category)

          return (
            <div key={category} style={{ marginBottom: '5rem' }}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: 'var(--color-deep-roast)',
                  letterSpacing: '0.05em',
                  marginBottom: '2rem',
                  borderBottom: '1px solid rgba(107, 42, 26, 0.2)',
                  paddingBottom: '1rem',
                }}
              >
                {t(`recipes.categories.${category}`)}
              </motion.h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
              }}>
                {categoryRecipes.map((recipe, i) => (
                  <motion.div
                    key={recipe.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/recipes/${recipe.slug}`} style={{ textDecoration: 'none' }}>
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
                        <div style={{ position: 'relative', paddingTop: '75%' }}>
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                          />
                        </div>
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
                            {recipe.flavourBase}
                          </p>
                          <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.1rem',
                            color: 'var(--color-deep-roast)',
                            letterSpacing: '0.03em',
                            lineHeight: 1.4,
                          }}>
                            {recipe.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
