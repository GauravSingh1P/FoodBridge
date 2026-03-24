import FoodListingForm from '../components/FoodListingForm'
function GiverPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #edf7f0, #e3efe7)',
        padding: '40px 20px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '40px 30px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
        }}
      >
        <p
          style={{
            display: 'inline-block',
            backgroundColor: '#dcfce7',
            color: '#166534',
            padding: '8px 16px',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Giver Dashboard
        </p>

        <h1
          style={{
            fontSize: '42px',
            color: '#14532d',
            marginBottom: '12px',
          }}
        >
          Welcome, Food Giver
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#4b5563',
            lineHeight: '1.6',
            marginBottom: '32px',
            maxWidth: '700px',
          }}
        >
          This dashboard is for event organizers, caterers, and food providers
          to share available food with people and organizations who need it.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          <FoodListingForm />
          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '18px',
              padding: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                color: '#166534',
                marginBottom: '10px',
              }}
            >
              Add Food Listing
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
              }}
            >
              Create a new food listing for donation or low-cost resale.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '18px',
              padding: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                color: '#166534',
                marginBottom: '10px',
              }}
            >
              Manage Listings
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
              }}
            >
              View and manage the food items you have shared on the platform.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '18px',
              padding: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                color: '#166534',
                marginBottom: '10px',
              }}
            >
              Donation / Sell Flow
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
              }}
            >
              Choose whether the food should be donated for free or sold at a
              low cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiverPage