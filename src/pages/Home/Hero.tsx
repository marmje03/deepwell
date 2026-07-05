import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRef, useEffect } from 'react'
import heroImg from '../../assets/images/Hero.jpg'

export default function Hero() {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const NUM_LINES = 14

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < NUM_LINES; i++) {
        const t = Date.now() / 2000
        const baseY = (i / NUM_LINES) * h * 1.2 - h * 0.1

        ctx.beginPath()
        ctx.strokeStyle = 'rgba(107, 42, 26, 0.09)'
        ctx.lineWidth = 1

        const segments = 12
        for (let j = 0; j <= segments; j++) {
          const x = (j / segments) * w
          const distX = x / w - mx
          const distY = baseY / h - my
          const dist = Math.sqrt(distX * distX + distY * distY)
          const wave = Math.sin(j * 0.5 + t + i * 0.4) * 18
          const push = Math.max(0, 1 - dist * 2) * (my - 0.5) * 80
          const y = baseY + wave + push

          if (j === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    }
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
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
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
