import React from 'react'
import "./title.css"

const Title = ({ title1, url, buttonText }) => {

  return (
    <div className="recommended-rooms-header">
      <h1 className="recommend-room-title">{title1}</h1>
      <button className="all-rooms-button"  >{buttonText}</button>
    </div>
  )
}

export default Title