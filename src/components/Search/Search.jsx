import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import "./search.css"
import { SearchContext } from "./../../context/SearchContext"

const Search = () => {

  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);
  const [city, setDestination] = useState("");

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { dispatch } = useContext(SearchContext)

  const handleClick = () => {
    dispatch({ type: "NEW_SEARCH", payload: { city, date, options } });
    navigate(`./search/hotels?city=${city}`, { state: { city, date, options } })
  }
  return (
    <div className="home-reservation-search">

      <div className="home-reservation-search-heading"> Reservation</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="home-reservation-search-guests">
          <span>Guests</span>
          <div className="home-reservation-search-guestselect"> <span>Adults</span>  <input type="number" id="quantity" value={options.adult} onChange={e => setOptions(prev => ({ ...prev, adult: e.target.value }))} name="quantity" min="1" max="50" className="reservation-search-select" /></div>

          <div className="home-reservation-search-guestselect"><span>Children</span>   <input type="number" id="quantity" value={options.children} onChange={e => setOptions(prev => ({ ...prev, children: e.target.value }))} name="quantity" min="1" max="50" className="reservation-search-select" /></div>

        </div>

        <div className="home-reservation-search-guests">

          <span>Dates</span>

          <div className="home-reservation-search-dates" style={{ outline: "0" }}>
            <DatePicker
              selected={date.startDate}
              onChange={date => setDate(prev => ({ ...prev, startDate: date }))}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              wrapperClassName="date-picker"
              placeholderText={'Please select Start Date'}
            />

          </div>
          <div className="home-reservation-search-dates"> <DatePicker
            selected={date.endDate}
            onChange={date => setDate(prev => ({ ...prev, endDate: date }))}
            dateFormat="dd/MM/yyyy"
            minDate={date.startDate ? date.startDate : new Date()}
            wrapperClassName="date-picker"
            placeholderText={'Please select End Date'}
          />
          </div>

        </div>
      </div>



      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="header-reservation-search-destination">
          <div>Destination</div>
          <input className="reservation-search-input" type="text" placeholder="Search " onChange={e => setDestination(e.target.value)} />
        </div>

        <div className="home-reservation-search-room">
          <span>Rooms: </span>
          <input type="number" id="quantity" value={options.room} onChange={e => setOptions(prev => ({ ...prev, room: e.target.value }))} name="quantity" min="1" max="50" />
        </div>
      </div>


      <button onClick={handleClick} className="home-reservation-search-button">Search</button>
    </div>
  )
}

export default Search