function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#0f172a',
        color: '#ffffff',
        padding: '36px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '24px',
        }}
      >
        <div>
          <h3
            style={{
              margin: '0 0 12px',
              fontSize: '22px',
            }}
          >
            FoodBridge
          </h3>
          <p
            style={{
              margin: 0,
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.78)',
              fontSize: '14px',
            }}
          >
            A simple platform to reduce food wastage by connecting food givers
            and food receivers through donation and low-cost reselling.
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: '0 0 12px',
              fontSize: '16px',
            }}
          >
            MVP Features
          </h4>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            Role-based landing page
          </p>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            Giver dashboard
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            Receiver dashboard
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: '0 0 12px',
              fontSize: '16px',
            }}
          >
            Status
          </h4>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            MVP launched
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            Built to reduce food waste and improve access
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1120px',
          margin: '24px auto 0',
          paddingTop: '18px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          textAlign: 'center',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        © 2026 FoodBridge. Reducing food wastage, one connection at a time.
      </div>
    </footer>
  )
}

export default Footer