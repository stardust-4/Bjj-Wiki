import { useState } from 'react'
import EditForm from './EditForm'
import axios from 'axios'
const MoveCard = (props) => {
  const [editing, setEditing] = useState(false)
  const toggleForm = () => {
    !editing ? setEditing(true) : setEditing(false)
  }
  const deleteMove = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    let tempState = [...props.moves]
    tempState.splice(props.index, 1)
    props.setMoves(tempState)
  }
  return (
    <div className="move-card">
      <img
        style={{ display: 'block' }}
        src={props.move.imgUrl}
        alt={props.move.name}
      />
      <h3>{props.move.name}</h3>
      <button
        className="deleteButton"
        onClick={() => {
          deleteMove(props.move._id)
        }}
      >
        &#x2620;
      </button>
      <button className="editButton" onClick={toggleForm}>
        &#x270D;
      </button>
      {editing ? (
        <EditForm
          move={props.move}
          getMoves={props.getMoves}
          setEditing={setEditing}
        />
      ) : null}
    </div>
  )
}
export default MoveCard
