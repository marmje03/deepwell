import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { recipes } from '../../data/recipes'
import originalImg from '../../assets/images/original.png'
import vanillaImg from '../../assets/images/vanilla.png'
import mochaImg from '../../assets/images/mocha.png'
import caramelImg from '../../assets/images/caramel.png'
import coconutImg from '../../assets/images/coconut.png'
import hazelnutImg from '../../assets/images/hazelnut.png'

type FlavourKey = 'original' | 'vanilla' | 'mocha' | 'caramel' | 'hazelnut' | 'coconut'

const flavourImage: Record<FlavourKey, string> = {
  original: originalImg,
  vanilla: vanillaImg,
  mocha: mochaImg,
  caramel: caramelImg,
  hazelnut: hazelnutImg,
  coconut: coconutImg,
}

interface QuizOption {
  key: string
  flavour: FlavourKey
}

interface QuizQuestion {
  key: string
  options: QuizOption[]
}

const questions: QuizQuestion[] = [
  {
    key: 'q1',
    options: [
      { key: 'slow', flavour: 'original' },
      { key: 'work', flavour: 'mocha' },
      { key: 'workout', flavour: 'coconut' },
      { key: 'changes', flavour: 'vanilla' },
    ],
  },
  {
    key: 'q2',
    options: [
      { key: 'calm', flavour: 'original' },
      { key: 'bold', flavour: 'mocha' },
      { key: 'sweet', flavour: 'caramel' },
      { key: 'adventurous', flavour: 'hazelnut' },
    ],
  },
  {
    key: 'q3',
    options: [
      { key: 'black', flavour: 'original' },
      { key: 'oat', flavour: 'vanilla' },
      { key: 'sweet', flavour: 'caramel' },
      { key: 'ice', flavour: 'coconut' },
    ],
  },
  {
    key: 'q4',
    options: [
      { key: 'reading', flavour: 'vanilla' },
      { key: 'work', flavour: 'hazelnut' },
      { key: 'friends', flavour: 'caramel' },
      { key: 'outdoors', flavour: 'coconut' },
    ],
  },
  {
    key: 'q5',
    options: [
      { key: 'cinnamon', flavour: 'vanilla' },
      { key: 'brownie', flavour: 'mocha' },
      { key: 'croissant', flavour: 'hazelnut' },
      { key: 'cheesecake', flavour: 'caramel' },
    ],
  },
]

const tiebreakOrder: FlavourKey[] = ['original', 'vanilla', 'caramel', 'mocha', 'hazelnut', 'coconut']

function computeResult(answers: FlavourKey[]): FlavourKey {
  const counts: Record<FlavourKey, number> = {
    original: 0,
    vanilla: 0,
    mocha: 0,
    caramel: 0,
    hazelnut: 0,
    coconut: 0,
  }

  answers.forEach(flavour => {
    counts[flavour] += 1
  })

  let winner = tiebreakOrder[0]
  let winnerCount = -1

  for (const flavour of tiebreakOrder) {
    if (counts[flavour] > winnerCount) {
      winnerCount = counts[flavour]
      winner = flavour
    }
  }

  return winner
}

export default function BrewLab() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<FlavourKey[]>([])

  const isQuestion = step < questions.length
  const resultFlavour = computeResult(answers)
  const matchingRecipes = recipes.filter(recipe => recipe.flavourBase.toLowerCase() === resultFlavour)

  const handleSelect = (flavour: FlavourKey) => {
    setAnswers(prev => [...prev, flavour])
    setStep(prev => prev + 1)
  }

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-oat-cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 2rem 4rem',
    }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>
        {isQuestion && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.75rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-roast)',
                opacity: 0.6,
              }}>
                {t('brewLab.eyebrow')}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--color-deep-roast)',
                opacity: 0.5,
              }}>
                {t('brewLab.progressLabel', { current: step + 1, total: questions.length })}
              </p>
            </div>
            <div style={{
              height: '4px',
              backgroundColor: 'rgba(107, 42, 26, 0.15)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
              <motion.div
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ height: '100%', backgroundColor: 'var(--color-deep-roast)' }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isQuestion ? (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--color-deep-roast)',
                letterSpacing: '0.03em',
                textAlign: 'center',
                marginBottom: '3rem',
              }}>
                {t(`brewLab.questions.${questions[step].key}.text`)}
              </h1>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}>
                {questions[step].options.map(option => (
                  <motion.button
                    key={option.key}
                    type="button"
                    onClick={() => handleSelect(option.flavour)}
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      padding: '2.25rem 1.5rem',
                      borderRadius: '6px',
                      border: '1.5px solid rgba(107, 42, 26, 0.2)',
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-deep-roast)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      lineHeight: 1.5,
                    }}
                  >
                    {t(`brewLab.questions.${questions[step].key}.options.${option.key}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ textAlign: 'center' }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-roast)',
                opacity: 0.6,
                marginBottom: '1.5rem',
              }}>
                {t('brewLab.result.label')}
              </p>
              <img
                src={flavourImage[resultFlavour]}
                alt={t(`brewLab.result.flavours.${resultFlavour}.name`)}
                style={{
                  display: 'block',
                  margin: '0 auto 2rem',
                  width: '100%',
                  maxWidth: '200px',
                }}
              />
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                color: 'var(--color-deep-roast)',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
              }}>
                {t(`brewLab.result.flavours.${resultFlavour}.name`)}
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--color-deep-roast)',
                opacity: 0.75,
                lineHeight: 1.8,
                maxWidth: '480px',
                margin: '0 auto 3rem',
              }}>
                {t(`brewLab.result.flavours.${resultFlavour}.description`)}
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/recipes" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-oat-cream)',
                  backgroundColor: 'var(--color-deep-roast)',
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}>
                  {t('brewLab.result.viewRecipes')}
                </Link>
                <Link to="/shop" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-roast)',
                  border: '1px solid var(--color-deep-roast)',
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}>
                  {t('brewLab.result.shopNow')}
                </Link>
              </div>

              {matchingRecipes.length > 0 && (
                <div style={{ marginTop: '4rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: 'var(--color-deep-roast)',
                    letterSpacing: '0.03em',
                    marginBottom: '1.5rem',
                  }}>
                    {t('brewLab.recipesHeading', { flavour: t(`brewLab.result.flavours.${resultFlavour}.name`) })}
                  </h2>

                  <div style={{
                    display: 'flex',
                    gap: '1.25rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}>
                    {matchingRecipes.map(recipe => (
                      <Link
                        key={recipe.slug}
                        to={`/recipes/${recipe.slug}`}
                        style={{ textDecoration: 'none', width: '160px' }}
                      >
                        <div style={{
                          backgroundColor: 'var(--color-white)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
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
                          <div style={{ padding: '0.75rem' }}>
                            <p style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '0.85rem',
                              color: 'var(--color-deep-roast)',
                              letterSpacing: '0.02em',
                              lineHeight: 1.4,
                            }}>
                              {recipe.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
