import React from 'react'
import './Crops.css'

const Crops = () => {
  const products = [
    {
      name: "Maize",
      description: "Staple grain crop providing food security and serving as a key ingredient in local cuisine and animal feed",
      benefits: ["Staple food", "Animal feed", "Processing potential"],
      season: "Rainy season (May-September)"
    },
    {
      name: "Rice",
      description: "Premium paddy rice cultivated using sustainable irrigation methods to meet growing local demand",
      benefits: ["High yield", "Local demand", "Food security"],
      season: "Rainy season (June-October)"
    },
    {
      name: "Beans",
      description: "Protein-rich legume that improves soil fertility through nitrogen fixation and serves as dietary staple",
      benefits: ["High protein", "Soil improvement", "Affordable nutrition"],
      season: "Rainy season (May-September)"
    },
    {
      name: "Seasonal Onions",
      description: "High-value cash crop grown during the dry season, essential for Nigerian cuisine and markets",
      benefits: ["High market value", "Dry season crop", "Long storage life"],
      season: "Dry season (October-March)"
    },
    {
      name: "Poultry",
      description: "High-quality eggs and poultry meat, providing essential protein sources for local communities",
      benefits: ["Fresh eggs", "Quality meat", "Sustainable practices"],
      season: "Year-round production"
    }
  ]

  return (
    <section id="crops" className="crops">
      <div className="container">
        <h2>Our Products</h2>
        <p className="crops-intro">
          We cultivate a diverse range of crops and manage a poultry farm, all well-adapted to Borno State's climate 
          and contributing significantly to Nigeria's agricultural output and food security.
        </p>
        
        <div className="crops-grid">
          {products.map((product, index) => (
            <div key={index} className="crop-card">
              <h3>{product.name}</h3>
              <p className="crop-description">{product.description}</p>
              
              <div className="crop-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="crop-season">
                <strong>{product.name === "Poultry" ? "Availability:" : "Growing Season:"}</strong> {product.season}
              </div>
            </div>
          ))}
        </div>
        
        <div className="crops-footer">
          <p>
            All our products are produced using sustainable practices that preserve soil health, 
            support biodiversity, and maximize quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Crops
