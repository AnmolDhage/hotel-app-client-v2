import React from 'react'
import Carousel from '../../component/Carousal/Carousal'
import Navbar from '../../component/Navbar/Navbar'

const ShowAllImages = ({ data }) => {
  return (
    <div>
      <Navbar type="single" />
      <Carousel data={data?.photos} />

    </div>
  )
}

export default ShowAllImages