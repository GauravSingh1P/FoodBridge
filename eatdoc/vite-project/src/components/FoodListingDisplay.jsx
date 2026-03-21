function FoodListingDisplay() {
  const foodListings = [
    {
      id: 1,
      foodName: 'Veg Biryani',
      quantity: '25 plates',
      foodType: 'Donate',
      location: 'Whitefield, Bengaluru',
    },
    {
      id: 2,
      foodName: 'Chapati & Curry',
      quantity: '15 boxes',
      foodType: 'Sell',
      location: 'Marathahalli, Bengaluru',
    },
    {
      id: 3,
      foodName: 'Rice & Dal',
      quantity: '30 servings',
      foodType: 'Donate',
      location: 'KR Puram, Bengaluru',
    },
  ]

  return (
    <div style={{ marginTop: '36px' }}>
      <h2
        style={{
          fontSize: '28px',
          color: '#14532d',
          marginBottom: '10px',
        }}
      >
        Available Food Listings
      </h2>

      <p
        style={{
          color: '#6b7280',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '24px',
        }}
      >
        Browse the currently available food shared by givers on FoodBridge.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {foodListings.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '18px',
              padding: '22px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                color: '#166534',
                marginBottom: '14px',
              }}
            >
              {item.foodName}
            </h3>

            <p
              style={{
                margin: '0 0 8px 0',
                color: '#374151',
                fontSize: '15px',
              }}
            >
              <strong>Quantity:</strong> {item.quantity}
            </p>

            <p
              style={{
                margin: '0 0 8px 0',
                color: '#374151',
                fontSize: '15px',
              }}
            >
              <strong>Type:</strong> {item.foodType}
            </p>

            <p
              style={{
                margin: 0,
                color: '#374151',
                fontSize: '15px',
              }}
            >
              <strong>Location:</strong> {item.location}
            </p>

         
            <div style={{ marginTop: '16px' }}>
              {item.foodType === 'Donate' ? (
                <button
                  onClick={() => alert(`Request sent for ${item.foodName}`)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #16a34a, #15803d)',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Request Food
                </button>
              ) : (
                <button
                  onClick={() => alert(`Proceed to buy ${item.foodName}`)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: 'none',
                    background: '#1f2937',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Buy Food
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodListingDisplay