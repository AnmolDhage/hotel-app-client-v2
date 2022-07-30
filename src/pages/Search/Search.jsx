import React, { useState } from 'react'
import Navbar from './../../components/Navbar/Navbar'
import useFetch from "./../../hooks/useFetch"
import { useLocation } from 'react-router-dom'
import "./search.css"
import DetailCard from './../../components/DetailsCard/DetailsCard'
import SmallSearch from './../../components/SmallSearch/SmallSearch'

const Search = () => {

  const location = useLocation();
  const [city, setDestination] = useState(location.state.city);
  // const [min, setMin] = useState(null);
  // const [max, setMax] = useState(null);

  const { data, loading } = useFetch(`/hotels?city=${city}`);



  return (
    <div>
      <Navbar type="single" />
      <SmallSearch
        data={data}
        city={city}
        setDestination={setDestination}
      />
      <div className="search-details-body">
        {loading ? "Loading..." : data && data.map(hotel =>
          <DetailCard data={hotel} key={hotel._id} />
        )}
      </div>
    </div>
  )
}

export default Search