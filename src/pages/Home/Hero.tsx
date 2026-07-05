import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import heroImg from '../../assets/images/Hero.jpg'

export default function Hero() {
  const { t } = useTranslation()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-cold-blue)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <svg
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        viewBox='0 0 1440 900'
        preserveAspectRatio='xMidYMid slice'
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const offset = mousePos.y * 40 - 20
          const xOffset = mousePos.x * 30 - 15
          const y = 150 + i * 55
          return (
            <path
              key={i}
              d={`M-200 ${y + offset} C${300 + xOffset} ${y - 60 + offset} ${600 - xOffset} ${y + 80 + offset} ${900 + xOffset} ${y + offset} S${1300 - xOffset} ${y - 40 + offset} 1700 ${y + offset}`}
              fill='none'
              stroke='rgba(107,42,26,0.07)'
              strokeWidth='1.5'
              style={{ transition: 'd 0.3s ease' }}
            />
          )
        })}
      </svg>

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-deep-roast)',
            marginBottom: '1.5rem',
            opacity: 0.7,
          }}>
            Cold Brew Concentrate
          </p>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--color-deep-roast)',
            lineHeight: 1.1,
            marginBottom: '2rem',
            letterSpacing: '0.05em',
          }}>
            Depth in<br />every drop.
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-deep-roast)',
            opacity: 0.7,
            lineHeight: 1.8,
            marginBottom: '3rem',
            maxWidth: '400px',
          }}>
            Premium cold brew concentrate, crafted for those who take their coffee seriously. Just add water.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to='/shop' style={{
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
              Shop Now
            </Link>

            <Link to='/brew-lab' style={{
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
              Brew Lab
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={heroImg}
            alt='Deepwell Cold Brew'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
