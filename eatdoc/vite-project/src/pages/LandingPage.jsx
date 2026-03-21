import './LandingPage.css'
import RoleButton from '../components/RoleButton'
import foodBridgeLogo from '../assets/foodbridge-logo.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LandingPage() {
return (
  <>
    <Header />

    <main
      style={{
        height: 'calc(100vh - 140px)',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 24px',
        overflow: 'hidden',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '1000px',
          textAlign: 'center',
        }}
      >
        <p
          className="tagline"
          style={{
            marginBottom: '20px',
          }}
        >
          Food Donation & Reselling Platform
        </p>

        <div
          className="brand-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '18px',
            flexWrap: 'wrap',
          }}
        >

          <h1
            className="landing-title"
            style={{
              margin: 0,
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: '#14532d',
              lineHeight: '1.1',
            }}
          >
            FoodBridge
          </h1>
        </div>

        <p
          className="landing-text"
          style={{
            maxWidth: '760px',
            margin: '0 auto 32px',
            fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
            lineHeight: '1.6',
            color: '#4b5563',
          }}
        >
          Reduce food wastage by connecting food givers with NGOs,
          orphanages, and old-age homes.
        </p>

        <div
          className="role-buttons"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <RoleButton
            role="Food Giver"
            description="Event organizers, caterers, wedding hosts"
          />
          <RoleButton
            role="Food Receiver"
            description="NGOs, orphanages, old-age homes"
          />
        </div>
      </section>
    </main>

    <Footer />
  </>
)
}

export default LandingPage