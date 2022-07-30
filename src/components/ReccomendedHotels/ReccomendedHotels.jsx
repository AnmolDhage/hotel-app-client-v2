import React from 'react'
import useFetch from '../../hooks/useFetch'
import RoomCard from '../RoomCard/RoomCard'
import Title from '../Title/Title'



const Recommended = ({ city }) => {

  const { data, loading } = useFetch(`/hotels/?city=${city}&&limit=3`)
  return (
    <div className="recommended-rooms-container">

      <Title
        title1={`More hotels in ${city}`}
        url="sdfasdf"
        buttonText="View All Rooms"
      />

      <div className="recommended-rooms-cards">
        {loading ? <h1>Loading ...</h1> : data && data.map((city, index) => {

          return (<RoomCard key={index} data={city} type="single" />)
        })}
      </div>

    </div>
  )
}

export default Recommended