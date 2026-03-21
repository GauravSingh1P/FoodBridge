import FoodListingDisplay from '../components/FoodListingDisplay'
function ReceiverPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        padding: '40px 20px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '28px',
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
              marginBottom: '18px',
            }}
          >
            Receiver Dashboard
          </p>

          <h1
            style={{
              fontSize: '42px',
              color: '#14532d',
              margin: '0 0 12px 0',
            }}
          >
            Welcome, Food Receiver
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#4b5563',
              lineHeight: '1.6',
              maxWidth: '760px',
              margin: 0,
            }}
          >
            This dashboard helps NGOs, orphanages, and old-age homes discover
            available food listings and take quick action to request or buy
            them.
          </p>
        </div>
            <FoodListingDisplay />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
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
              View Listings
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Browse food shared by givers and explore what is available for
              donation or resale.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
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
              Request Food
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Send a request for donated food and connect with providers who
              want to reduce food waste.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
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
              Buy Food
            </h2>
            <p
              style={{
                color: '#4b5563',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Access low-cost food listings when available and make affordable
              use of surplus food.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiverPage