import React from 'react'
import RoomCard from '../RoomCard/RoomCard'
import "./searchBody.css"

const SearchBody = ({ data }) => {
  console.log(data)

  return (
    <div className="search-body">
      {data?.map(hotel =>
        < RoomCard data={hotel} type="single" />
      )}
    </div>
  )
}

export default SearchBody