import './LandingPage.css'
import RoleButton from '../components/RoleButton'
import foodBridgeVideo from '../assets/foodbridge-bg.mp4'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
      <Header />

      <main className="landing-main">
        <section className="hero-section">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={foodBridgeVideo} type="video/mp4" />
          </video>

          <div className="hero-content">
            <div className="hero-card">
              <p className="tagline">Food Donation & Reselling Platform</p>

              <div className="brand-row">
                <h1 className="landing-title">FoodBridge</h1>
              </div>

              <p className="landing-text">
                Reduce food wastage by connecting food givers with NGOs,
                orphanages, and old-age homes through fast donation and low-cost
                food access.
              </p>
            </div>

            <div className="role-buttons">
              <RoleButton
                role="Food Giver"
                description="Event organizers, caterers, wedding hosts"
              />
              <RoleButton
                role="Food Receiver"
                description="NGOs, orphanages, old-age homes"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default LandingPage