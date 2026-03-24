import './LandingPage.css'
import RoleButton from '../components/RoleButton'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
      <Header />

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">Food Donation & Reselling Platform</div>

            <h1 className="landing-title">
              Bridge surplus food with people who truly need it.
            </h1>

            <p className="landing-text">
              FoodBridge helps event organizers, caterers, and hosts share extra
              food with NGOs, orphanages, and old-age homes through donation or
              affordable reselling.
            </p>

            <div className="role-buttons">
              <RoleButton
                role="Food Giver"
                description="Share surplus food from events, catering, or gatherings"
              />
              <RoleButton
                role="Food Receiver"
                description="Find available food for NGOs, orphanages, and care homes"
              />
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <h2>Why FoodBridge?</h2>
              <p>
                Large quantities of usable food go to waste after events,
                functions, and catering deliveries. At the same time, many
                communities struggle to access meals.
              </p>
            </div>

            <div className="info-card">
              <h2>What it does</h2>
              <p>
                FoodBridge creates a simple connection between food givers and
                food receivers. Listings can be posted either as free donations
                or low-cost resale options.
              </p>
            </div>

            <div className="info-card">
              <h2>Who uses it?</h2>
              <p>
                Event organizers, caterers, restaurants, wedding hosts, NGOs,
                orphanages, shelters, and old-age homes can all benefit from
                the platform.
              </p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading">
            <p className="section-label">How it works</p>
            <h2>Simple flow. Clear purpose.</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span className="step-number">01</span>
              <h3>Givers add food listings</h3>
              <p>
                Food providers add details like food name, quantity, location,
                and whether the listing is for donation or sale.
              </p>
            </div>

            <div className="process-card">
              <span className="step-number">02</span>
              <h3>Receivers explore available food</h3>
              <p>
                NGOs and care institutions browse the food listings visible on
                the receiver dashboard.
              </p>
            </div>

            <div className="process-card">
              <span className="step-number">03</span>
              <h3>They request or buy</h3>
              <p>
                Depending on the listing type, receivers can send a request for
                donated food or proceed with a low-cost purchase.
              </p>
            </div>
          </div>
        </section>

        <section className="highlight-section">
          <div className="highlight-box">
            <div className="highlight-text">
              <p className="section-label">MVP Scope</p>
              <h2>Focused on the core connection first.</h2>
              <p>
                This MVP is intentionally simple: role selection, giver
                dashboard, receiver dashboard, listing creation, listing
                display, and action-based interaction.
              </p>
            </div>

            <div className="highlight-points">
              <div className="point-card">
                <h3>Landing Page</h3>
                <p>Role-based entry for givers and receivers.</p>
              </div>
              <div className="point-card">
                <h3>Giver Dashboard</h3>
                <p>Add food listings and choose Donate or Sell.</p>
              </div>

              <div className="point-card">
                <h3>Receiver Dashboard</h3>
                <p>View listings and choose Request or Buy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default LandingPage