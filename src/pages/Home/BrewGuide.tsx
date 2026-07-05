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
              width='280'
              height='380'
              viewBox='0 0 200 280'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ margin: '0 auto', display: 'block' }}
            >
              {/* Håndtegnet glass - myke kurver */}
              <path
                d='M45 15 C44 15 43 15 42 16 L28 260 C27 262 29 268 32 268 L168 268 C171 268 173 262 172 260 L158 16 C157 15 156 15 155 15 Z'
                fill='rgba(245, 233, 220, 0.4)'
                stroke='rgba(107, 42, 26, 0.5)'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              {/* Liquid layers */}
              <clipPath id='glassClip'>
                <path d='M45 15 L28 260 L172 260 L155 15 Z' />
              </clipPath>

              <g clipPath='url(#glassClip)'>
                {filledLayers.map((layer, i) => {
                  const layerHeight = 245 / steps.length
                  const y = 260 - (i + 1) * layerHeight
                  return (
                    <motion.rect
                      key={i}
                      x='0'
                      y={y}
                      width='200'
                      height={layerHeight + 2}
                      fill={layer.color}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      style={{ transformOrigin: 'bottom' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  )
                })}

                {/* Is-biter */}
                {activeStep >= 0 && (
                  <>
                    <motion.path
                      d='M65 228 C64 226 66 222 70 223 C74 222 76 226 74 229 C73 232 68 232 65 228 Z'
                      fill='rgba(255,255,255,0.7)'
                      stroke='rgba(255,255,255,0.4)'
                      strokeWidth='1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.path
                      d='M100 235 C99 232 102 228 106 229 C110 228 111 233 109 236 C107 239 101 238 100 235 Z'
                      fill='rgba(255,255,255,0.6)'
                      stroke='rgba(255,255,255,0.3)'
                      strokeWidth='1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    <motion.path
                      d='M128 225 C127 222 130 219 134 220 C138 219 139 224 137 227 C135 230 129 229 128 225 Z'
                      fill='rgba(255,255,255,0.5)'
                      stroke='rgba(255,255,255,0.3)'
                      strokeWidth='1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                  </>
                )}
              </g>

              {/* Glassskinn - håndtegnet linje */}
              <path
                d='M55 25 C53 80 51 160 50 255'
                stroke='rgba(255,255,255,0.5)'
                strokeWidth='3'
                strokeLinecap='round'
              />

              {/* Sugerør når ferdig */}
              {activeStep === 3 && (
                <motion.path
                  d='M135 5 C134 50 132 150 130 265'
                  stroke='rgba(107, 42, 26, 0.7)'
                  strokeWidth='4'
                  strokeLinecap='round'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Håndtegnet bunn-linje */}
              <path
                d='M28 262 C80 270 120 270 172 262'
                stroke='rgba(107, 42, 26, 0.3)'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
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
