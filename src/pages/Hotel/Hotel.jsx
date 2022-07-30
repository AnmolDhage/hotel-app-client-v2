import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import Header from '../../components/Header/Header'
import SearchBody from '../../components/SearchBody/SearchBody'
import Footer from '../../components/Footer/Footer'
import useFetch from '../../hooks/useFetch'
const Hotel = () => {
  const location = useLocation()
  const query = location.search
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data, loading } = useFetch(`/hotels${query}`)
  return (

    <div>


      <Header />
      <div className="home">
        {loading ? "Loading..." : data && <SearchBody data={data} />}
      </div>
      <Footer />
    </div>
  )
}

export default Hotel