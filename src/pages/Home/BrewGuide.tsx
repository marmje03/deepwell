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
              height='320'
              viewBox='0 0 200 320'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ margin: '0 auto', display: 'block' }}
            >
              {/* Clip path for liquid */}
              <clipPath id='glassClip'>
                <path d='M55 30 Q50 31 48 35 L38 270 Q38 278 100 280 Q162 278 162 270 L152 35 Q150 31 145 30 Z' />
              </clipPath>

              {/* Liquid layers */}
              <g clipPath='url(#glassClip)'>
                {filledLayers.map((layer, i) => {
                  const layerHeight = 250 / steps.length
                  const y = 280 - (i + 1) * layerHeight
                  return (
                    <motion.rect
                      key={i}
                      x='30'
                      y={y}
                      width='140'
                      height={layerHeight + 2}
                      fill={layer.color}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      style={{ transformOrigin: 'bottom' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  )
                })}

                {/* Ice cubes */}
                {activeStep >= 0 && (
                  <>
                    <motion.rect x='55' y='235' width='22' height='22' rx='4'
                      fill='rgba(255,255,255,0.65)' stroke='rgba(255,255,255,0.3)' strokeWidth='1'
                      initial={{ opacity: 0, y: 220 }} animate={{ opacity: 1, y: 235 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.rect x='90' y='248' width='18' height='18' rx='3'
                      fill='rgba(255,255,255,0.55)' stroke='rgba(255,255,255,0.2)' strokeWidth='1'
                      initial={{ opacity: 0, y: 230 }} animate={{ opacity: 1, y: 248 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    <motion.rect x='118' y='238' width='20' height='20' rx='4'
                      fill='rgba(255,255,255,0.5)' stroke='rgba(255,255,255,0.2)' strokeWidth='1'
                      initial={{ opacity: 0, y: 222 }} animate={{ opacity: 1, y: 238 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                  </>
                )}
              </g>

              {/* Glass outline — elegant rounded */}
              <path
                d='M55 30 Q50 31 48 35 L38 270 Q38 280 100 282 Q162 280 162 270 L152 35 Q150 31 145 30 Z'
                fill='none'
                stroke='rgba(107, 42, 26, 0.35)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              {/* Glass rim */}
              <path
                d='M52 30 Q100 24 148 30'
                fill='none'
                stroke='rgba(107, 42, 26, 0.35)'
                strokeWidth='2'
                strokeLinecap='round'
              />

              {/* Shine */}
              <path
                d='M62 40 Q60 120 59 260'
                stroke='rgba(255,255,255,0.45)'
                strokeWidth='3'
                strokeLinecap='round'
              />

              {/* Straw */}
              {activeStep === 3 && (
                <motion.path
                  d='M128 8 Q126 100 124 278'
                  stroke='rgba(107, 42, 26, 0.6)'
                  strokeWidth='4'
                  strokeLinecap='round'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
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
