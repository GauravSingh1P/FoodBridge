function AboutPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fdf9 0%, #f3fbf5 100%)',
        padding: '48px 24px 72px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#1f2937',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
        }}
      >
        <section
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <p
            style={{
              display: 'inline-block',
              backgroundColor: '#dcfce7',
              color: '#166534',
              border: '1px solid #bbf7d0',
              padding: '10px 18px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '20px',
            }}
          >
            About FoodBridge
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
              lineHeight: '1.08',
              color: '#14532d',
              margin: '0 0 18px',
              fontWeight: '800',
              letterSpacing: '-1px',
            }}
          >
            A platform built to reduce food waste and improve food access.
          </h1>

          <p
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4b5563',
            }}
          >
            FoodBridge connects surplus food providers with organizations and
            communities that need food support. The goal is simple: reduce
            wastage, improve access, and create a practical bridge between
            extra food and real need.
          </p>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '22px',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h2
              style={{
                margin: '0 0 12px',
                fontSize: '24px',
                color: '#166534',
              }}
            >
              The Problem
            </h2>
            <p
              style={{
                margin: 0,
                color: '#4b5563',
                lineHeight: '1.75',
                fontSize: '15px',
              }}
            >
              Large amounts of food are wasted after events, weddings,
              gatherings, and catering operations, even when that food is still
              usable and valuable.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h2
              style={{
                margin: '0 0 12px',
                fontSize: '24px',
                color: '#166534',
              }}
            >
              The Solution
            </h2>
            <p
              style={{
                margin: 0,
                color: '#4b5563',
                lineHeight: '1.75',
                fontSize: '15px',
              }}
            >
              FoodBridge provides a role-based system where food givers can
              create listings and food receivers can discover, request, or buy
              available food in a simple and accessible way.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h2
              style={{
                margin: '0 0 12px',
                fontSize: '24px',
                color: '#166534',
              }}
            >
              The Vision
            </h2>
            <p
              style={{
                margin: 0,
                color: '#4b5563',
                lineHeight: '1.75',
                fontSize: '15px',
              }}
            >
              The long-term vision is to make food redistribution easier,
              faster, and more structured through technology, so that useful
              food reaches people instead of going to waste.
            </p>
          </div>
        </section>

        <section
          style={{
            background: 'linear-gradient(135deg, #14532d, #166534)',
            borderRadius: '28px',
            padding: '34px',
            color: '#ffffff',
            marginBottom: '56px',
          }}
        >
          <p
            style={{
              margin: '0 0 10px',
              fontSize: '13px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#bbf7d0',
            }}
          >
            Who FoodBridge serves
          </p>

          <h2
            style={{
              margin: '0 0 18px',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.15',
            }}
          >
            Designed for both providers and seekers of food support.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '20px',
                padding: '20px',
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: '20px',
                }}
              >
                Food Givers
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: '1.7',
                  color: 'rgba(255,255,255,0.86)',
                  fontSize: '14px',
                }}
              >
                Event organizers, caterers, restaurants, wedding hosts, and
                anyone with extra usable food.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '20px',
                padding: '20px',
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: '20px',
                }}
              >
                Food Receivers
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: '1.7',
                  color: 'rgba(255,255,255,0.86)',
                  fontSize: '14px',
                }}
              >
                NGOs, orphanages, shelters, old-age homes, and similar
                institutions looking for support.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              borderRadius: '22px',
              padding: '24px',
            }}
          >
            <h3
              style={{
                margin: '0 0 10px',
                fontSize: '22px',
                color: '#166534',
              }}
            >
              Current MVP
            </h3>
            <p
              style={{
                margin: 0,
                color: '#4b5563',
                lineHeight: '1.7',
                fontSize: '15px',
              }}
            >
              The MVP focuses on landing, giver, and receiver flows with food
              listing creation, listing display, and action-based interaction.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              borderRadius: '22px',
              padding: '24px',
            }}
          >
            <h3
              style={{
                margin: '0 0 10px',
                fontSize: '22px',
                color: '#166534',
              }}
            >
              Future Direction
            </h3>
            <p
              style={{
                margin: 0,
                color: '#4b5563',
                lineHeight: '1.7',
                fontSize: '15px',
              }}
            >
              Future versions can include authentication, real-time data,
              location-based matching, and backend integration for production
              use.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage