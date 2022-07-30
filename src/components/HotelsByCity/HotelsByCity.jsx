import React from 'react'
import useFetch from '../../hooks/useFetch'
import RoomCard from '../RoomCard/RoomCard'
import Title from '../Title/Title'

const HotelByCity = () => {

  const { data, loading } = useFetch("/hotels/countByCity")
  return (
    <div className="recommended-rooms-container">

      <Title
        title1="Hotels By City "
        url="sdfasdf"
        buttonText="View All Rooms"
      />

      <div className="recommended-rooms-cards">
        {loading ? <h1>Loading ...</h1> : data && data.map((city, index) => {

          return (<RoomCard key={index} data={city} type="city" />)
        })}
      </div>

    </div>
  )
}

export default HotelByCity