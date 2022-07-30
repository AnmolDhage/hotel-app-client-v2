import React from 'react'
import "./detailsCard.css"
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const DetailCard = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/single/${data._id}`);

  }

  return (
    <div >
      {data ? <div onClick={handleClick} className="detailCard-body">
        <div className="detailCard-img"><img src={data.photos[0]} alt="" /></div>
        <div className="detailCard-info">

          <div className="detailCard-info-name"><span>{data.name}</span><Rating name="half-rating-read" defaultValue={data?.rating} precision={0.5} readOnly /></div>
          <div className="detailCard-info-desc">{data.desc.slice(0, 100)}...</div>
          <div ><span>Address: </span><span className="detailCard-info-desc">{data.address}</span></div>
          <div ><span>Type: </span><span className="detailCard-info-desc">{data.type}</span></div>
          <div ><span>Min-Price: </span><span className="detailCard-info-desc">${data.cheapestPrice}</span></div>

        </div>

      </div> : "Loading..."}</div>
  )
}

export default DetailCard