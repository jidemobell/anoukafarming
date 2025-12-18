import React from 'react'
import './Crops.css'
import { GiChicken } from 'react-icons/gi'

const Crops = () => {
  const crops = [
    {
      name: "Millet",
      description: "Drought-resistant grain crop, rich in nutrients and well-suited to Borno's climate",
      benefits: ["High protein", "Gluten-free", "Drought tolerant"],
      season: "Rainy season (May-October)"
    },
    {
      name: "Sorghum",
      description: "Versatile cereal grain used for food, animal feed, and traditional brewing",
      benefits: ["High fiber", "Iron rich", "Climate resilient"],
      season: "Rainy season (June-November)"
    },
    {
      name: "Cowpea (Black-eyed Peas)",
      description: "Protein-rich legume that improves soil fertility through nitrogen fixation",
      benefits: ["High protein", "Soil improvement", "Multiple uses"],
      season: "Rainy season (May-September)"
    },
    {
      name: "Groundnuts (Peanuts)",
      description: "Oil-rich crop valuable for food security and export potential",
      benefits: ["High oil content", "Export value", "Nutrition dense"],
      season: "Rainy season (May-October)"
    },
    {
      name: "Sesame",
      description: "High-value oil seed crop with excellent market demand",
      benefits: ["Premium oil", "Export crop", "Medicinal properties"],
      season: "Rainy season (June-October)"
    },
    {
      name: "Maize",
      description: "Staple grain crop providing food security and animal feed",
      benefits: ["Staple food", "Animal feed", "Processing potential"],
      season: "Rainy season (May-September)"
    }
  ]

  const poultry = {
    name: "Poultry Farm",
    description: "Our newly acquired poultry farm produces high-quality eggs and poultry meat, diversifying our agricultural output and providing additional protein sources for local communities.",
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
