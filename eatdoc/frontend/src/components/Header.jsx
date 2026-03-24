import foodBridgeLogo from '../assets/foodbridge-logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          maxWidth: '1150px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src={foodBridgeLogo}
            alt="FoodBridge"
            style={{
              width: '42px',
              height: '42px',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '22px',
                color: '#14532d',
              }}
            >
              FoodBridge
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                color: '#6b7280',
              }}
            >
              Food Donation & Reselling Platform
            </p>
          </div>
        </div>

        <nav
          style={{
            display: 'flex',
            gap: '20px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#374151',
          }}
        >
          <span style={{ cursor: 'pointer' }}>Home</span>
          <span style={{ cursor: 'pointer' }}>How It Works</span>
          <Link
              to="/about"
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              About
            </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header