import React from 'react'
import useFetch from '../../hooks/useFetch'
import RoomCard from '../RoomCard/RoomCard'
import Title from '../Title/Title'

const HotelsByCity = () => {
  const { data, loading } = useFetch("/hotels/countByType")
  return (
    <div className="recommended-rooms-container">

      <Title
        title1="Hotels By Type"
        title2=""
        url="sdfasdf"
        buttonText="View all Hotels"
      />

      <div className="recommended-rooms-cards">
        {loading ? <h1>Loading...</h1> : data && data.map((type, index) => <RoomCard key={index} data={type} type="type" />)}
      </div>

    </div>
  )
}

export default HotelsByCity