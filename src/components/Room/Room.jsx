import React from 'react'
import useFetch from '../../hooks/useFetch'

const Room = ({ id, rooms, setRooms }) => {
  const { data, loading } = useFetch(`/hotels/room/${id}`)
  const handleRoomClick = (type) => {
    setRooms(prev => [...prev, [type.title, type.price]])
  }
  return (
    <div className="rooms">
      {loading ? "Loading..." : data && data.map(rm => {


        return (
          rm.roomNumbers.map(room => <div onClick={e => handleRoomClick(rm)} className="room-data">
            <div >{rm?.title}</div>
            <div style={{ fontSize: ".9rem", color: "gray" }}>{rm.desc}</div>
            <div style={{ fontSize: ".9rem", color: "gray" }}>Max People: {rm.maxPeople}</div>
            <div style={{ fontSize: ".9rem", color: "gray" }}>Room no.-{room.number}</div>
            <div style={{ fontSize: ".9rem" }}>₹{rm?.price} / night</div>
          </div>)
        )

      })}

    </div>
  )
}

export default Room