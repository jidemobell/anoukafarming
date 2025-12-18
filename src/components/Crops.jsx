import React from 'react'
import './Crops.css'
import { GiChicken } from 'react-icons/gi'

const Crops = () => {
  const crops = [
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
    }
  ]

  const poultry = {
    name: "Poultry Farm",
    description: "Our poultry farm produces high-quality eggs and poultry meat, diversifying our agricultural output and providing essential protein sources for local communities.",
    products: ["Fresh Eggs", "Broiler Chickens", "Layer Hens"],
    benefits: ["Fresh local produce", "High-quality protein", "Sustainable practices"]
  }

  return (
    <section id="crops" className="crops">
      <div className="container">
        <h2>Our Products</h2>
        <p className="crops-intro">
          We cultivate a diverse range of crops and manage a poultry farm, all well-adapted to Borno State's climate 
          and contributing significantly to Nigeria's agricultural output and food security.
        </p>

        {/* Poultry Section */}
        <div className="poultry-section">
          <div className="poultry-card">
            <div className="poultry-icon"><GiChicken /></div>
            <div className="poultry-content">
              <h3>{poultry.name}</h3>
              <p>{poultry.description}</p>
              <div className="poultry-details">
                <div className="poultry-products">
                  <h4>Products:</h4>
                  <ul>
                    {poultry.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
                <div className="poultry-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {poultry.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="crops-subheading">Our Crops</h3>
        
        <div className="crops-grid">
          {crops.map((crop, index) => (
            <div key={index} className="crop-card">
              <h3>{crop.name}</h3>
              <p className="crop-description">{crop.description}</p>
              
              <div className="crop-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {crop.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="crop-season">
                <strong>Growing Season:</strong> {crop.season}
              </div>
            </div>
          ))}
        </div>
        
        <div className="crops-footer">
          <p>
            All our crops are grown using sustainable farming practices that preserve soil health 
            and support biodiversity while maximizing yield and quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Crops
