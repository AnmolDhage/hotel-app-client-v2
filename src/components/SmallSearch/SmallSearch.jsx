import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';



const SmallSearch = ({ city, setDestination }) => {

  const location = useLocation();

  const { dispatch } = useContext(SearchContext)
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);


  const handleClick = () => {
    dispatch({ type: "NEW_SEARCH", payload: { city, date, options } });

  }

  return (
    <div className="home-search">
      <div ><input className="search-input" type="text" value={city} onChange={e => setDestination(e.target.value)} placeholder="Search " /></div>
      <div className="home-search-items" style={{ outline: "0" }}>
        <DatePicker
          selected={date.startDate}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          onChange={date => setDate(prev => ({ ...prev, startDate: date }))}
          wrapperClassName="date-picker"
          placeholderText={'Please select Start Date'}
        />
      </div>
      <div> <DatePicker
        selected={date.endDate}
        dateFormat="dd/MM/yyyy"
        onChange={date => setDate(prev => ({ ...prev, endDate: date }))}
        minDate={date.startDate ? date.startDate : new Date()}
        wrapperClassName="date-picker"
        placeholderText={'Please select End Date'}
      /></div>
      <div className="room-select">
        Rooms:  <input type="number" id="quantity" value={options.room} onChange={e => setOptions(prev => ({ ...prev, room: e.target.value }))} name="quantity" min="1" max="50" className="search-select" />
      </div>
      <button onClick={handleClick} className="home-search-button">Search</button>
    </div>
  )
}

export default SmallSearch