import React from 'react'
import "./roomCard.css"
import { useNavigate } from "react-router-dom"



const RoomCard = ({ data, type }) => {

  const navigate = useNavigate()

  const handleClick = () => {

    if (type === "single") {
      navigate(`/single/${data._id}`);
    } else if (type === "type") {
      navigate(`/hotel/hotels?type=${data.type}`)
    } else {
      navigate(`/hotel/hotels?city=${data.city}`)
    }



  }

  return (
    <div className="roomCard" onClick={handleClick}>
      <div className="image-container">
        <img src={data?.photos ? data?.photos[0] : data?.img} alt="" className="card-image" />
        <div className="discount">10% off</div>

        <div className="card-content">
          <h3>{data?.name?.toUpperCase() || data?.city?.toUpperCase() || data?.type?.toUpperCase()}</h3>
          <h4>{data?.count ? <span>Count : {data?.count}</span> : <span>Count :{data.cityCount || "$40"}</span>}</h4>
          <h4>

          </h4>
        </div>



      </div>
    </div>
  )
}

export default RoomCard