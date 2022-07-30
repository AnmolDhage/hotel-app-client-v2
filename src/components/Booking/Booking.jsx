import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./booking.css"

const Booking = ({ data, reFetch }) => {

  const { user } = useContext(AuthContext)

  const handleCancel = async () => {
    await axios.delete(`/users?userId=${user._id}&&bookingId=${data?._id}`)
      .then(() => reFetch())
  }


  return (
    <div >{data ?

      <div className="booking-card">
        <div>
          <span className="booking-card-title">Booking Id : </span>
          <span className="booking-card-info">{data?._id}</span>
        </div>
        <div>
          <span className="booking-card-title">Hotel Name : </span>
          <span className="booking-card-info">{data?.HotelName}</span>

        </div>
        <div>
          <span className="booking-card-title">From : </span>
          <span className="booking-card-info"> {data?.StartDate?.split('T')[0]}</span>

        </div>
        <div>
          <span className="booking-card-title">Till : </span>
          <span className="booking-card-info"> {data?.EndDate?.split('T')[0]}</span>

        </div>
        <div >
          <span className="booking-card-title">Rooms : </span>
          <div className="booking-card-rooms">
            {data?.Rooms.map(room =>

              <div className="room-data">
                <div >{room[0]}</div>
                <div style={{ fontSize: ".9rem" }}>₹{room[1]} / night</div>
              </div>
            )}
          </div>
        </div>
        <div>
          <span className="booking-card-title">Location : </span>
          <span className="booking-card-info"> {data?.Location}</span>

        </div>
        <div>
          <span className="booking-card-title">Total : </span>
          <span className="booking-card-info">₹ {data.TotalPrice}/-</span>

        </div>

        <button onClick={handleCancel} className="cancel-button">Cancel Booking</button>
      </div>

      : "Loading..."}
    </div>
  )
}

export default Booking