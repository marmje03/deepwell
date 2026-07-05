import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import originalImg from '../../assets/images/original.png'
import vanillaImg from '../../assets/images/vanilla.png'
import mochaImg from '../../assets/images/mocha.png'
import caramelImg from '../../assets/images/caramel.png'

const flavours = [
  { name: 'Original', tagline: 'Smooth & Balanced', img: originalImg, bg: 'var(--color-cold-blue)' },
  { name: 'Vanilla', tagline: 'Soft & Sweet', img: vanillaImg, bg: '#e4cfb9' },
  { name: 'Mocha', tagline: 'Rich & Chocolatey', img: mochaImg, bg: 'var(--color-rose-latte)' },
  { name: 'Caramel', tagline: 'Warm & Smooth', img: caramelImg, bg: 'var(--color-caramel-foam)' },
]

export default function Flavours() {
  return (
    <section style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-oat-cream)',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
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
          The Collection
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--color-deep-roast)',
          letterSpacing: '0.05em',
        }}>
          Four Flavours.<br />One Standard.
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
      }}>
        {flavours.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: f.bg,
                borderRadius: '4px',
                padding: '3rem 1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={f.img}
                  alt={f.name}
                  style={{
                    width: '100%',
                    maxWidth: '160px',
                    height: '220px',
                    objectFit: 'contain',
                    marginBottom: '2rem',
                  }}
                />
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: 'var(--color-deep-roast)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  {f.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--color-deep-roast)',
                  opacity: 0.6,
                  letterSpacing: '0.05em',
                }}>
                  {f.tagline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
