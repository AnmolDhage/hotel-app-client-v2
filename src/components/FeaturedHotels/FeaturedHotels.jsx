import React from 'react'
import useFetch from '../../hooks/useFetch'
import RoomCard from '../RoomCard/RoomCard'
import Title from '../Title/Title'
import './featuredHotels.css'

const FeaturedHotels = () => {

  const { data, loading } = useFetch("/hotels?featured=true")


  return (
    <div className="recommended-rooms-container">

      <Title
        title1="Featured Hotels"
        title2=""
        url="sdfasdf"
        buttonText="View all Hotels"
      />

      <div className="recommended-rooms-cards">
        {loading ? <h1>Loading...</h1> : data &&
          data.map(hotel => <RoomCard key={hotel._id} data={hotel} type="single" />)
        }

      </div>

    </div>
  )
}

export default FeaturedHotels