import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type FlavourKey = 'original' | 'vanilla' | 'mocha' | 'caramel'
type LiquidKey = 'water' | 'oatMilk' | 'wholeMilk' | 'almondMilk'
type IceKey = 'none' | 'little' | 'lots'
type StrengthKey = 'mild' | 'classic' | 'strong'

const flavourOptions: FlavourKey[] = ['original', 'vanilla', 'mocha', 'caramel']
const liquidOptions: LiquidKey[] = ['water', 'oatMilk', 'wholeMilk', 'almondMilk']
const iceOptions: IceKey[] = ['none', 'little', 'lots']
const strengthOptions: StrengthKey[] = ['mild', 'classic', 'strong']

const flavourGradient: Record<FlavourKey, { bottom: string; top: string }> = {
  original: { bottom: '#3B1F0F', top: '#6B3A20' },
  vanilla: { bottom: '#C8956C', top: '#E8C4A0' },
  mocha: { bottom: '#2C1A0E', top: '#5C3520' },
  caramel: { bottom: '#D48B3A', top: '#F0B860' },
}

const strengthFillPercent: Record<StrengthKey, number> = {
  mild: 35,
  classic: 55,
  strong: 75,
}

const iceCubeCount: Record<IceKey, number> = {
  none: 0,
  little: 2,
  lots: 4,
}

const cubePositions = [
  { x: 68, y: 46, rotate: -6 },
  { x: 100, y: 56, rotate: 5 },
  { x: 130, y: 44, rotate: -4 },
  { x: 84, y: 64, rotate: 8 },
]

const stepNumbers: Record<'flavour' | 'liquid' | 'ice' | 'strength', string> = {
  flavour: '01',
  liquid: '02',
  ice: '03',
  strength: '04',
}

function OptionRow<T extends string>({
  options,
  selected,
  onSelect,
  namespace,
}: {
  options: T[]
  selected: T
  onSelect: (value: T) => void
  namespace: string
}) {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {options.map(option => {
        const isSelected = option === selected
        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              padding: '1.1rem 1.75rem',
              borderRadius: '6px',
              border: `1.5px solid ${isSelected ? 'var(--color-deep-roast)' : 'rgba(107, 42, 26, 0.2)'}`,
              backgroundColor: isSelected ? 'var(--color-oat-cream)' : 'rgba(255, 255, 255, 0.5)',
              color: 'var(--color-deep-roast)',
              fontWeight: isSelected ? 600 : 400,
              boxShadow: isSelected ? '0 6px 16px rgba(107, 42, 26, 0.18)' : 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            {t(`brewLab.${namespace}.${option}`)}
          </motion.button>
        )
      })}
    </div>
  )
}

export default function BrewLab() {
  const { t } = useTranslation()
  const [flavour, setFlavour] = useState<FlavourKey>('original')
  const [liquid, setLiquid] = useState<LiquidKey>('water')
  const [ice, setIce] = useState<IceKey>('none')
  const [strength, setStrength] = useState<StrengthKey>('classic')

  const fillPercent = strengthFillPercent[strength]
  const glassTop = 24
  const glassBottom = 136
  const usableHeight = glassBottom - glassTop
  const fillHeight = (usableHeight * fillPercent) / 100
  const fillY = glassBottom - fillHeight

  const drinkName = [
    t(`brewLab.liquidAdjective.${liquid}`),
    t(`brewLab.flavour.${flavour}`),
    t(`brewLab.strengthName.${strength}`),
  ].filter(Boolean).join(' ')

  const drinkDescription = t('brewLab.descriptionSentence', {
    strengthDescriptor: t(`brewLab.strengthDescriptor.${strength}`),
    liquid: t(`brewLab.liquid.${liquid}`).toLowerCase(),
    flavour: t(`brewLab.flavour.${flavour}`).toLowerCase(),
  })

  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      {/* Left: step selectors */}
      <div style={{
        backgroundColor: 'var(--color-oat-cream)',
        padding: '9rem 4rem 4rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: '4rem' }}
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
            {t('brewLab.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            {t('brewLab.title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.35,
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
            }}>
              {stepNumbers.flavour}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}>
              {t('brewLab.steps.flavour')}
            </h2>
            <OptionRow options={flavourOptions} selected={flavour} onSelect={setFlavour} namespace="flavour" />
          </div>

          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.35,
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
            }}>
              {stepNumbers.liquid}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}>
              {t('brewLab.steps.liquid')}
            </h2>
            <OptionRow options={liquidOptions} selected={liquid} onSelect={setLiquid} namespace="liquid" />
          </div>

          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.35,
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
            }}>
              {stepNumbers.ice}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}>
              {t('brewLab.steps.ice')}
            </h2>
            <OptionRow options={iceOptions} selected={ice} onSelect={setIce} namespace="ice" />
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: 'var(--color-deep-roast)',
              opacity: 0.35,
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
            }}>
              {stepNumbers.strength}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-deep-roast)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}>
              {t('brewLab.steps.strength')}
            </h2>
            <OptionRow options={strengthOptions} selected={strength} onSelect={setStrength} namespace="strength" />
          </div>
        </motion.div>
      </div>

      {/* Right: glass and result */}
      <div style={{
        backgroundColor: 'var(--color-deep-roast)',
        padding: '9rem 3rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <svg
            width="300"
            height="218"
            viewBox="0 0 220 160"
            style={{ margin: '0 auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="liquidGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={flavourGradient[flavour].top} />
                <stop offset="100%" stopColor={flavourGradient[flavour].bottom} />
              </linearGradient>
            </defs>

            <clipPath id="brewLabGlassClip">
              <path d="M32 24 L46 136 Q46 146 110 148 Q174 146 174 136 L188 24 Z" />
            </clipPath>

            <g clipPath="url(#brewLabGlassClip)">
              <motion.rect
                x={0}
                width={220}
                fill="url(#liquidGradient)"
                animate={{ y: fillY, height: fillHeight }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {cubePositions.slice(0, iceCubeCount[ice]).map((cube, i) => (
                <motion.rect
                  key={`${ice}-${i}`}
                  x={cube.x}
                  y={cube.y}
                  width={22}
                  height={22}
                  rx={6}
                  fill="rgba(255,255,255,0.55)"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={1}
                  transform={`rotate(${cube.rotate} ${cube.x + 11} ${cube.y + 11})`}
                  initial={{ opacity: 0, y: cube.y - 10 }}
                  animate={{ opacity: 1, y: cube.y }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                />
              ))}
            </g>

            <path
              d="M32 24 L46 136 Q46 146 110 148 Q174 146 174 136 L188 24 Z"
              fill="none"
              stroke="rgba(245, 233, 220, 0.35)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 24 L188 24"
              fill="none"
              stroke="rgba(245, 233, 220, 0.5)"
              strokeWidth={8}
              strokeLinecap="round"
            />
            <path
              d="M52 32 Q50 82 52 130"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>

          <div style={{ marginTop: '2.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-oat-cream)',
              opacity: 0.6,
              marginBottom: '1rem',
            }}>
              {t('brewLab.resultLabel')}
            </p>
            <motion.h3
              key={drinkName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                color: '#F5E9DC',
                letterSpacing: '0.03em',
                marginBottom: '1rem',
              }}
            >
              {drinkName}
            </motion.h3>
            <motion.p
              key={drinkDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: '#F5E9DC',
                opacity: 0.75,
                lineHeight: 1.8,
                maxWidth: '340px',
                margin: '0 auto',
              }}
            >
              {drinkDescription}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
