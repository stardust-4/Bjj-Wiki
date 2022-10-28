import { useState } from 'react'
import axios from 'axios'
const EditForm = (props) => {
  const [formState, setFormState] = useState(props.move)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/update/${props.move._id}`, formState)
    props.setEditing(false)
    props.getMoves()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">id: </label>
      <input
        id="id"
        type="number"
        onChange={handleChange}
        value={formState.id}
      />
      <label htmlFor="name">name: </label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="imgUrl">imgUrl: </label>
      <input
        id="imgUrl"
        type="url"
        onChange={handleChange}
        value={formState.imgUrl}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default EditForm
