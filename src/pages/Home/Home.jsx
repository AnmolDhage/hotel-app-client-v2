import React, { useEffect } from 'react'
import Footer from "./../../components/Footer/Footer"
import "./home.css"
import 'react-datepicker/dist/react-datepicker.css'
import FeaturedHotels from './../../components/FeaturedHotels/FeaturedHotels'
import HotelsByType from './../../components/HotelsByType/HotelsByType'
import HotelByCity from './../../components/HotelsByCity/HotelsByCity'
import Header from './../../components/Header/Header'


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <div >

      <Header />
      <div className="home">

        <HotelByCity />
        <HotelsByType />
        <FeaturedHotels />

      </div>
      <Footer />

    </div>
  )
}

export default Home