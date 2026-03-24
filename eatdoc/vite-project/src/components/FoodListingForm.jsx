import { useState } from 'react'

function FoodListingForm() {
  const [foodName, setFoodName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [foodType, setFoodType] = useState('')
  const [location, setLocation] = useState('')
  const [listingType, setListingType] = useState('')

 const handleSubmit = async (event) => {
  event.preventDefault();

  const foodData = {
    foodName,
    quantity,
    foodType,
    location,
    listingType,
  };

  try {
    const response = await fetch("http://localhost:5000/giver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    });

    const result = await response.json();
    console.log("Server response:", result);

    alert("Food listing saved to backend!");

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send data");
  }

  setFoodName('');
  setQuantity('');
  setFoodType('');
  setLocation('');
};

  return (
    <form
      onSubmit={handleSubmit}
            style={{
                marginTop: '32px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
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
        <p
            style={{
                color: '#6b7280',
                fontSize: '15px',
                marginBottom: '24px',
                lineHeight: '1.6',
            }}
            >
            Fill in the food details clearly so receivers can quickly understand what is
            available and take action.
        </p>
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
                fontSize: '14px',
                }}
          >
            Food Name
          </label>
          <input
            type="text"
            placeholder="Ex: Veg Biryani"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
            required
            style={{
                width: '100%',
                padding: '13px 14px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                fontSize: '15px',
                outline: 'none',
                backgroundColor: '#ffffff',
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
                fontSize: '14px',
                }}
          >
            Quantity
          </label>
          <input
            type="text"
            placeholder="Ex: 25 plates or 10 boxes"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
                style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: '12px',
                        border: '1px solid #d1d5db',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
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
                fontSize: '14px',
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
                padding: '13px 14px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                fontSize: '15px',
                outline: 'none',
                backgroundColor: '#ffffff',
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
                fontSize: '14px',
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
                    padding: '13px 14px',
                    borderRadius: '12px',
                    border: '1px solid #d1d5db',
                    fontSize: '15px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                }}
          />
         <div
                    style={{
                        marginTop: '24px',
                        padding: '18px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: '16px',
                    }}
                    >
                    <label
                        style={{
                        display: 'block',
                        marginBottom: '12px',
                        fontWeight: '600',
                        color: '#166534',
                        fontSize: '15px',
                        }}
                    >
                        Listing Type
                    </label>

                         <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                                <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#374151',
                                    fontWeight: '500',
                                }}
                                >
                                <input
                                    type="radio"
                                    name="listingType"
                                    value="donate"
                                    checked={listingType === 'donate'}
                                    onChange={(event) => setListingType(event.target.value)}
                                />
                                Donate
                                </label>

                                <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#374151',
                                    fontWeight: '500',
                                }}
                                >
                                <input
                                    type="radio"
                                    name="listingType"
                                    value="sell"
                                    checked={listingType === 'sell'}
                                    onChange={(event) => setListingType(event.target.value)}
                                 />
                                    Sell
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
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(21, 128, 61, 0.18)',
                }}
      >
        Submit Listing
      </button>
    </form>
  )
}

export default FoodListingForm