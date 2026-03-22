import foodBridgeLogo from '../assets/foodbridge-logo.png'

function Header() {
return (
  <header
    style={{
      width: '100%',
      padding: '16px 28px',
      background: 'linear-gradient(135deg, #16a34a, #15803d)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #d1d5db',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}
  >
    <div
      style={{
        maxWidth: '1150px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
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
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scale(1.2)',
                }}
        />

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '22px',
              color: '#ffffff',
            }}
          >
            FoodBridge
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Donate or resell food with purpose
          </p>
        </div>
      </div>

      <nav
        style={{
          display: 'flex',
          gap: '22px',
          fontSize: '15px',
          color: '#ffffff',
          fontWeight: '500',
        }}
      >
        <span style={{ cursor: 'pointer' }}>Home</span>
        <span style={{ cursor: 'pointer' }}>About</span>
        <span style={{ cursor: 'pointer' }}>Contact</span>
      </nav>
    </div>
  </header>
)
}

export default Header