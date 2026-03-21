import { useState } from 'react'

function FoodListingForm() {
  const [foodName, setFoodName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [foodType, setFoodType] = useState('')
  const [location, setLocation] = useState('')
  const [listingType, setListingType] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const foodData = {
      foodName,
      quantity,
      foodType,
      location,
      listingType,
    }

    console.log('Food Listing Submitted:', foodData)

    alert('Food listing captured successfully!')

    setFoodName('')
    setQuantity('')
    setFoodType('')
    setLocation('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '32px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '20px',
        padding: '24px',
      }}
    >
      <h2
        style={{
          fontSize: '26px',
          color: '#14532d',
          marginBottom: '20px',
        }}
      >
        Add Food Listing
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
        }}
      >
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
            }}
          >
            Food Name
          </label>
          <input
            type="text"
            placeholder="Enter food name"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontSize: '15px',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
            }}
          >
            Quantity
          </label>
          <input
            type="text"
            placeholder="Ex: 25 plates"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontSize: '15px',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
            }}
          >
            Food Type
          </label>
          <input
            type="text"
            placeholder="Ex: Veg / Non-Veg / Mixed"
            value={foodType}
            onChange={(event) => setFoodType(event.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontSize: '15px',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
            }}
          >
            Location
          </label>
          <input
            type="text"
            placeholder="Enter pickup location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontSize: '15px',
            }}
          />
          <div style={{ marginTop: '20px' }}>
                <label
                        style={{
                        display: 'block',
                        marginBottom: '10px',
                        fontWeight: '600',
                        color: '#374151',
                                }}
                >
                Listing Type
                </label>

                        <div style={{ display: 'flex', gap: '20px' }}>
                <label>
                        <input
                            type="radio"
                            name="listingType"
                            value="donate"
                            checked={listingType === 'donate'}
                            onChange={(e) => setListingType(e.target.value)}
                        />
                        Donate (Free)
                </label>

                    <label>
                    <input
                        type="radio"
                        name="listingType"
                        value="sell"
                        checked={listingType === 'sell'}
                        onChange={(e) => setListingType(e.target.value)}
                    />
                    Sell (Low Cost)
                    </label>
                        </div>
                        </div>
                            
                        </div>
                        </div>

      <button
        type="submit"
        style={{
          marginTop: '24px',
          padding: '14px 24px',
          border: 'none',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #16a34a, #15803d)',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Submit Listing
      </button>
    </form>
  )
}

export default FoodListingForm