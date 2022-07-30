import React, { useContext, useState } from 'react'
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Navbar = ({ type }) => {
  const navigate = useNavigate()
  const [showAcc, setShowAcc] = useState(false)
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = async () => {
    await axios.post(`/auth/logout`)
    dispatch({ type: "LOGOUT" })
    navigate("/login")
  }
  return (
    <nav className={type === "single" ? "nav-shadow" : ""}>
      <div className="nav-brand">Hotel Booking</div>
      <div>
        <ul>

          <li>
            <Link to="/" className="li-link">Home</Link>
          </li>
          <li>
            <Link to="/" className="li-link">About</Link>
          </li>
          <li style={{ position: 'relative' }}>
            <div onClick={e => setShowAcc(!showAcc)}>Account</div>
            <div className={showAcc ? "account-dropdown " : " account-dropdown account-dropdown-inactive"}>
              {user ?
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span>Hello, {user?.username}</span>
                  <div>
                    <button onClick={e => { navigate("/reservation") }} className="account-buttons">Show Bookings</button>
                    <button onClick={handleLogout} className="account-buttons">Logout</button>
                  </div>
                </div> :
                <div className="not-signed-in">
                  <h4>Please login to continue!!</h4>
                  <div>
                    <Link to="/login" ><button className="account-buttons" >Login</button></Link>
                    <Link to="/signup" ><button className="account-buttons">Signup</button></Link>
                  </div>
                </div>
              }


            </div>
          </li>


        </ul>
      </div>
    </nav >
  )
}

export default Navbar;