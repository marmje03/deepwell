import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Fill your glass',
    body: 'Add ice to a glass — the more the better for a perfectly cold brew.',
    color: 'rgba(203, 213, 247, 0.8)',
    label: 'Ice',
  },
  {
    number: '02',
    title: 'Pour the concentrate',
    body: 'Add 1 part Deepwell concentrate. A standard serving is about 60ml.',
    color: 'rgba(107, 42, 26, 0.85)',
    label: 'Concentrate',
  },
  {
    number: '03',
    title: 'Add your liquid',
    body: 'Top with 2 parts water, oat milk, whole milk, or almond — your choice.',
    color: 'rgba(245, 233, 220, 0.9)',
    label: 'Milk / Water',
  },
  {
    number: '04',
    title: 'Enjoy',
    body: 'Stir gently and enjoy. No equipment, no waiting, no compromise.',
    color: 'rgba(107, 42, 26, 0.4)',
    label: 'Ready',
  },
]

export default function BrewGuide() {
  const [activeStep, setActiveStep] = useState(-1)

  const filledLayers = steps.slice(0, activeStep + 1)

  return (
    <section style={{
      backgroundColor: 'var(--color-oat-cream)',
      padding: '6rem 2rem',
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
            Brew Guide
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-deep-roast)',
            letterSpacing: '0.05em',
          }}>
            Perfect iced coffee.<br />Every time.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>
          {/* Left: animated glass */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg
              width='200'
              height='300'
              viewBox='0 0 200 300'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* Glass outline */}
              <path
                d='M30 20 L170 20 L150 280 L50 280 Z'
                fill='none'
                stroke='rgba(107, 42, 26, 0.3)'
                strokeWidth='2'
              />

              {/* Liquid layers */}
              <clipPath id='glassClip'>
                <path d='M30 20 L170 20 L150 280 L50 280 Z' />
              </clipPath>

              <g clipPath='url(#glassClip)'>
                {filledLayers.map((layer, i) => {
                  const layerHeight = 260 / steps.length
                  const y = 280 - (i + 1) * layerHeight
                  return (
                    <motion.rect
                      key={i}
                      x='0'
                      y={y}
                      width='200'
                      height={layerHeight}
                      fill={layer.color}
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  )
                })}

                {/* Ice cubes when step 0 active */}
                {activeStep >= 0 && (
                  <>
                    <motion.rect
                      x='60' y='220' width='25' height='25'
                      rx='3'
                      fill='rgba(255,255,255,0.6)'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.rect
                      x='100' y='230' width='20' height='20'
                      rx='3'
                      fill='rgba(255,255,255,0.5)'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.rect
                      x='130' y='215' width='22' height='22'
                      rx='3'
                      fill='rgba(255,255,255,0.4)'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                  </>
                )}
              </g>

              {/* Glass shine */}
              <line
                x1='50' y1='30'
                x2='45' y2='270'
                stroke='rgba(255,255,255,0.4)'
                strokeWidth='4'
                strokeLinecap='round'
              />

              {/* Straw when done */}
              {activeStep === 3 && (
                <motion.line
                  x1='130' y1='10'
                  x2='120' y2='280'
                  stroke='rgba(107, 42, 26, 0.6)'
                  strokeWidth='5'
                  strokeLinecap='round'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </svg>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-deep-roast)',
              opacity: activeStep >= 0 ? 0.6 : 0.3,
              marginTop: '1.5rem',
              transition: 'opacity 0.3s ease',
            }}>
              {activeStep >= 0 ? steps[activeStep].label : 'Hover a step'}
            </p>
          </div>

          {/* Right: steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveStep(i)}
                style={{
                  borderTop: '1px solid rgba(107, 42, 26, 0.15)',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  opacity: activeStep === -1 || activeStep === i ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.7rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.4,
                  letterSpacing: '0.2em',
                  marginBottom: '0.75rem',
                }}>
                  {step.number}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: 'var(--color-deep-roast)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.7,
                  lineHeight: 1.8,
                }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
