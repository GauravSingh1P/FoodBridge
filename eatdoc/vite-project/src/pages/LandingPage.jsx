import './LandingPage.css'
import RoleButton from '../components/RoleButton'
import foodBridgeLogo from '../assets/foodbridge-logo.png'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-card">
        <p className="tagline">Food Donation & Reselling Platform</p>

        <div className="brand-row">
          <img
            src={foodBridgeLogo}
            alt="FoodBridge Logo"
            className="brand-logo"
          />
          <h1 className="landing-title">FoodBridge</h1>
        </div>

        <p className="landing-text">
          Reduce food wastage by connecting food givers with NGOs, orphanages,
          and old-age homes.
        </p>

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
    </div>
  )
}

export default LandingPage