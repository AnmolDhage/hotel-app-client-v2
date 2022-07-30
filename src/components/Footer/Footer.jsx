import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <div className="footer">
      <div className="company-names">
        <img src="https://download.logo.wine/logo/Trivago/Trivago-Logo.wine.png" alt="" />
        <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="" />
        <img src="https://download.logo.wine/logo/Vrbo/Vrbo-Logo.wine.png" alt="" />
        <img src="https://download.logo.wine/logo/Hotels.com/Hotels.com-Logo.wine.png" alt="" />
        <img src="https://download.logo.wine/logo/Booking.com/Booking.com-Logo.wine.png" alt="" />
        <img src="https://download.logo.wine/logo/TripAdvisor/TripAdvisor-Logo.wine.png" alt="" />
      </div>
      <div className="subcribe">Subscribe & <br /> get special discount</div>
      <div className="newsletter">Don't wanna miss something? Subcribe right now and get the special discount and brand monthly newsletter</div>
      <div className="search">
        <input type="text" />
        <button>Subcribe</button>
      </div>
      <div className="newsletter">*Copyrights reserved 2022</div>
    </div>
  )
}

export default Footer