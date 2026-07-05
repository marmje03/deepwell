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
    color: 'rgba(210, 190, 165, 0.9)',
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
            {/* CSS Cup */}
            <div style={{
              margin: '0 auto',
              width: '160px',
              position: 'relative',
            }}>
              {/* Straw */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeStep >= 0 ? '80px' : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute',
                  width: '6px',
                  backgroundColor: 'rgba(107, 42, 26, 0.5)',
                  borderRadius: '3px',
                  top: '-60px',
                  right: '38px',
                  transformOrigin: 'bottom',
                }}
              />

              {/* Lid */}
              <div style={{
                width: '160px',
                height: '20px',
                backgroundColor: 'var(--color-oat-cream)',
                border: '2px solid rgba(107, 42, 26, 0.25)',
                borderRadius: '12px 12px 0 0',
                position: 'relative',
                zIndex: 2,
              }} />

              {/* Cup */}
              <div style={{
                width: '160px',
                height: '240px',
                border: '2px solid rgba(107, 42, 26, 0.25)',
                borderTop: 'none',
                borderRadius: '0 0 40px 40px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'rgba(245, 233, 220, 0.3)',
              }}>
                {/* Layers bottom to top */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: activeStep === 3 ? 'none' : 'flex',
                  flexDirection: 'column-reverse',
                }}>
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: activeStep >= i ? '60px' : 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{
                        backgroundColor: step.color,
                        width: '100%',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>

                {/* Ice cubes */}
                {activeStep >= 0 && [
                  { left: '20px', bottom: '30px', rotate: '-8deg', size: 28 },
                  { left: '60px', bottom: '45px', rotate: '5deg', size: 24 },
                  { left: '100px', bottom: '28px', rotate: '-3deg', size: 26 },
                ].map((cube, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      position: 'absolute',
                      bottom: cube.bottom,
                      left: cube.left,
                      width: `${cube.size}px`,
                      height: `${cube.size}px`,
                      backgroundColor: 'rgba(255,255,255,0.75)',
                      border: '1.5px solid rgba(255,255,255,0.9)',
                      borderRadius: '4px',
                      transform: `rotate(${cube.rotate})`,
                      boxShadow: 'inset 0 0 8px rgba(255,255,255,0.6)',
                      zIndex: 4,
                    }}
                  />
                ))}

                {/* Shine */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '18px',
                  width: '8px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
                  borderRadius: '4px',
                  pointerEvents: 'none',
                }} />

                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '240px',
                      background: 'linear-gradient(to top, rgba(107, 42, 26, 0.7), rgba(180, 120, 80, 0.5))',
                      zIndex: 5,
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-roast)',
                opacity: activeStep >= 0 ? 0.6 : 0.3,
                marginTop: '1.5rem',
                textAlign: 'center',
                transition: 'opacity 0.3s ease',
              }}>
                {activeStep >= 0 ? steps[activeStep].label : 'Hover a step'}
              </p>
            </div>
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
