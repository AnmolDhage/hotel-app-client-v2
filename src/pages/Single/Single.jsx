import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './../../components/Navbar/Navbar'
import useFetch from './../../hooks/useFetch'
import Carousel from "./../../components/Carousal/Carousal"
import DatePicker from 'react-datepicker'
import Room from "./../../components/Room/Room"
import Footer from "./../../components/Footer/Footer"
import "./single.css"
import { MdIosShare } from 'react-icons/md';
import Recommended from './../../components/ReccomendedHotels/ReccomendedHotels'
import Rating from '@mui/material/Rating';
import { AuthContext } from './../../context/AuthContext'
import { SearchContext } from './../../context/SearchContext'
import axios from 'axios'
import { GiCancel } from "react-icons/gi"
import { CopyToClipboard } from "react-copy-to-clipboard"


const Single = () => {
  const { user } = useContext(AuthContext);
  const { date } = useContext(SearchContext)
  const location = useLocation()
  const url = window.location.href;
  const [index, setIndex] = useState(0);
  const [load, setLoad] = useState({ length: 300, bool: false });
  const query = location.pathname.split('/')[2]
  const { data, loading, reFetch } = useFetch(`/hotels/find/${query}`)
  const [startDate, setStartDate] = useState(date.startDate);
  const [endDate, setEndDate] = useState(date.endDate);
  const navigate = useNavigate()
  const [comment, setComment] = useState("")
  const [rooms, setRooms] = useState([])
  const [shareOpen, setShareOpen] = useState(false)
  const [carouselOpen, setCarouselOpen] = useState(false)


  let total = 0;
  const [reservation, setReservation] = useState({
    hotelName: data?.title,
    Location: data?.address,
    Rooms: rooms,
    StartDate: startDate,
    EndDate: endDate,
    TotalPrice: total,
  })


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleClick = () => {
    load.bool === false ?
      setLoad({ length: data?.desc?.length, bool: true }) : setLoad({ length: 300, bool: false })
  }

  const MILLISECONDS = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dayDiff = Math.ceil(timeDiff / MILLISECONDS);
    return dayDiff;
  }

  const days = startDate && endDate ? dayDifference(startDate, endDate) : 0


  const handleComment = async () => {
    const reviews = data.reviews;
    user ?
      (
        await axios.put(`/hotels/${data._id}`, { reviews: [...reviews, { username: user.username, comment: comment }] })

      )

      : navigate("/login")

    reFetch()
    setComment("")
  }

  const handleCancel = (e) => {
    setRooms(rooms.filter((r, index) => { return index !== e }))
  }

  const handleReservation = async () => {
    if (user) {

      days > 0 && rooms.length > 0 ? (
        await axios.put(`/users/createRes/${user._id}`, reservation)
          .then(() => navigate("/reservation"))
      ) : alert("Please Fill All info")
    } else {
      alert("Please Login ")
      navigate("/login")
    }
  }


  useEffect(() => {
    setReservation({
      HotelName: data?.name,
      Location: data?.address,
      Rooms: rooms,
      StartDate: startDate,
      EndDate: endDate,
      TotalPrice: total * days,
    })
  }, [rooms, startDate, endDate, total, days, data?.name, data?.address])


  return (
    <div >
      <Navbar type="single" />

      <div className={carouselOpen ? `show-carousel` : `in-active`}>
        <button className="carousel-cancel-button" onClick={e => { setCarouselOpen(!carouselOpen) }}><GiCancel /></button>
        <Carousel data={data?.photos} />
      </div>

      <div className="info-body">

        <div className="hotel-name">
          <span>{data?.name}</span>
          {
            loading ? "Loading..." :
              data &&
              <Rating name="half-rating-read" defaultValue={data?.rating} precision={0.5} readOnly />
          }
        </div>
        <div className="hotel-subheading">

          <div style={{ display: 'flex', alignItems: 'center', gap: ".5rem" }}>

            <span className="hotel-location">

              {data?.city ? data.city[0].toUpperCase() + data.city.slice(1) : 'loading...'}

            </span>


          </div>

          <div style={{ position: 'relative' }}>
            <button className="hotel-location-share" onClick={e => { setShareOpen(!shareOpen) }}><MdIosShare /><span>Share</span> </button>
            <div className={shareOpen ? `share-body` : `share-body in-active`}>
              <span>{url}</span>
              <CopyToClipboard text={url}>
                <button className="copy-button" onClick={e => { setShareOpen(!shareOpen) }}>Copy </button>
              </CopyToClipboard>
            </div>
          </div>

        </div>


        {data?.photos ? <div className="image-grid">
          <img className="image-grid-col-2 image-grid-row-2" src={data?.photos[index]} alt="Main" />
          <img onClick={e => setIndex(e.target.id)} id='0' src={data?.photos[0]} alt="1" />
          <img onClick={e => setIndex(e.target.id)} id='1' src={data?.photos[1]} alt="2" />
          <img onClick={e => setIndex(e.target.id)} id='2' src={data?.photos[2]} alt="3" />
          <div onClick={e => { setCarouselOpen(!carouselOpen) }} className="show-more"> Show All</div>
        </div> : "Loading..."
        }

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "space-between" }}>
          <div style={{ width: "60%", }}>
            <div className="subheading">Description:</div>


            <div style={{ color: 'gray' }}>{data?.desc?.length > 300 ? <div>{data?.desc.slice(1, load.length)}<button style={{ border: "none", cursor: "pointer", backgroundColor: "transparent" }} onClick={handleClick} >{load.bool ? ' ...show less' : ' ... show more'} </button>

            </div> : data?.desc}

              <div style={{ margin: "1rem 0", display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'black' }}> <span className="subheading">Location:</span> <span style={{ color: 'gray' }}> {data?.address}</span></div>

            </div>
            <div className="subheading" style={{ marginTop: "3rem" }}>Rooms:</div>

            <Room id={query} rooms={rooms} setRooms={setRooms} />


            <div className="line"></div>
            <div style={{ margin: "0 0 2rem 0" }}>



              <div className="subheading" style={{ margin: "2rem 0 .5rem 0" }}>Reviews:</div>
              {
                loading ? "Loading" : data && data?.reviews?.map((review, index) =>
                  <div key={index} style={{ marginTop: ".8rem" }}>
                    <div >{review?.username} says,</div>
                    <div style={{ fontSize: ".9rem" }}>"{review?.comment}"</div>
                  </div>
                )
              }


            </div>
            <div className="comment-adder">
              <input placeholder="Add your review" type="text" onChange={e => { setComment(e.target.value) }} className="comment" />
              <button className="comment-button" onClick={handleComment}>Comment</button></div>



          </div>
          <div className="hotel-res-info">

            <div style={{ display: "flex", width: "100%" }}>
              <div className="hotel-res-info-dates">
                <span>Check in</span>
                <span><DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  wrapperClassName="hotel-res-info-date-picker"
                  placeholderText={'Please select Start Date'}
                /></span>
              </div>
              <div className="hotel-res-info-dates">
                <span>Check out</span>
                <span><DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate ? startDate : new Date()}
                  wrapperClassName="hotel-res-info-date-picker"
                  placeholderText={'Please select End Date'}
                /></span>
              </div>
            </div>
            <div className="line"></div>
            <div className="bill">
              <div className="selected-rooms">
                {rooms?.map((r, index) => {
                  total += r[1];
                  return <div >
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      <span>{r[0]}</span>
                      <span style={{ cursor: "pointer" }} onClick={e => handleCancel(index)}>
                        <GiCancel />
                      </span>
                    </div>
                    <div>
                      ₹{r[1]}
                    </div>

                  </div>
                }
                )}

              </div>
              <div className="bill-details">
                <div>Rooms: {rooms.length}</div>
                <div>Days: {days}</div>
                <div>Total: ₹{days * total}</div>
              </div>
            </div>
            <button onClick={handleReservation} className="reserve-button">Reserve</button>
            {days > 0 ? '' : <span>*Please Select Dates</span>}
            {rooms.length > 0 ? '' : <span>*Please Select Rooms</span>}
            {user ? '' : <span>*Please login</span>}
          </div>

          <div>
          </div>
        </div>

        <div className="line"></div>



        <Recommended city={data?.city} />
      </div>
      <Footer />
    </div >


  )
}

export default Single

