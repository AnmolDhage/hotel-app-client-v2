import React from 'react'
import './facility.css'

const Facilities = () => {
  return (
    <div className="facilty-container">
      <h1>Facilities We Provide</h1>

      <div className="facilty-list-container">

        <div>
          <img className="facilty-image" src="./images/water.png" alt="" />
          <h2>24X7 Water Supply</h2>
        </div>

        <div>
          <img className="facilty-image" src="./images/electricity.png" alt="" />
          <h2>24X7  Electricity</h2>
        </div>

        <div>
          <img className="facilty-image" src="./images/air-conditioner.png" alt="" />
          <h2>AC Rooms</h2>
        </div>

        <div>
          <img className="facilty-image" src="./images/big-screen.png" alt="" />
          <h2>Beautiful View</h2>
        </div>
      </div>
    </div>
  )
}

export default Facilities