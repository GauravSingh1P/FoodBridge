function Footer() {
  return (
    <footer
            style={{
            width: '100%',
            background: 'linear-gradient(135deg, #16a34a, #15803d)',
            color: '#ffffff',
            padding:'20px 24px' ,
            }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <p
                  style={{
                            margin: 0,
                            fontSize: '13px',
                            textAlign: 'center',
                            width: '100%',
                        }}

        >
          © 2026 FoodBridge. Reducing food wastage, one connection at a time.
        </p>

      </div>
    </footer>
  )
}

export default Footer