import React, { useContext } from 'react'
import Booking from './../../components/Booking/Booking'
import Navbar from './../../components/Navbar/Navbar'
import { AuthContext } from './../../context/AuthContext'
import useFetch from './../../hooks/useFetch'
import "./reservation.css"

const Reservations = () => {

  const { user } = useContext(AuthContext)
  const { data, loading, reFetch } = useFetch(`/users/${user._id}`)
  return (
    <div>
      <Navbar type="single" />
      <div style={{ margin: "2rem 10vw" }}>
        <h2>Reservations :</h2>

        <div>{loading ? "Loading..." : data && data?.bookings?.map(booking =>
          <Booking data={booking} reFetch={reFetch} />
        )
        }
        </div>
        <div>{data?.bookings?.length < 1 ? <h2 style={{ margin: "2rem 0" }}>No Bookings...</h2> : ""}</div>
      </div>
    </div>
  )
}

export default Reservations