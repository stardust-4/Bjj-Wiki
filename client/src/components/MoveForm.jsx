import axios from "axios";
import { useState } from "react"


const MoveForm = () => {
const initialState = {
  id: '',
  name: '',
  imgUrl:''
}
const [formState, setFormState] = useState(initialState);
const handleSubmit = event => {
  event.preventDefault();
  // do something with the data in the component state
  // axios.post()
  let result = axios.post('http://localhost:3001/create', formState)
console.log(result.data)
  // console.log(formState);
  // clear the form
  setFormState(initialState);
};
const handleChange = event => {
  setFormState({ ...formState, [event.target.id]: event.target.value });
};

  return ( 
  <div>
    <h1>New Addition Move Form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">id: </label>
      <input
        id="id"
        type="number"
        onChange={handleChange}
        value={formState.id}
      />
      <label htmlFor="name">Move name: </label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="imgUrl">Image url: </label>
      <input
        id="imgUrl"
        type="url"
        onChange={handleChange}
        value={formState.imgUrl}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
  
}
export default MoveForm