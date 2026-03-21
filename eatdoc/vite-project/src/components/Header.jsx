import foodBridgeLogo from '../assets/foodbridge-logo.png'
function Header() {
return (
  <header
    style={{
      width: '100%',
      padding: '16px 28px',
      background: 'rgba(255, 255, 255, 0.7)',
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
            width: '42px',
            height: '42px',
            objectFit: 'contain',
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
              fontSize: '14px',
              color: '#6b7280',
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
          color: '#374151',
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