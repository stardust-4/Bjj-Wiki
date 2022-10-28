import { useNavigate, Link, useRouteLoaderData, Route} from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
// import Edit from "./Edit"
// const api = axios.create({baseURL:`http://localhost:3001/moves/`})
const Home = (props) => {

let navigate = useNavigate()
const [moves, setMoves] = useState([{name: 1}]);

// Get/Read
useEffect(()=>{
  const getMoves = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/moves/`)
        setMoves(response.data.moves);
        // console.log(response.data.moves);
    } catch (error) {
      console.log(error)
    }
}
getMoves()
},[])
const deleteMove = (id) => {
  axios.delete(
    `http://localhost:3001/delete/${id}`)
    window.location.reload();
    return false;}
//////////putt//////

// const [showForm, setShowForm] = useState(false);

// // const form = () => {
// //   setShowForm(!showForm);
// // }
let chosenOne = 0
    let conditionalRender = false;
      const getMove = async (id) => {
conditionalRender = true;
        try {
          const response = await axios.get(
            `http://localhost:3001/move/${id}`)
            // setMoves(response.data.moves);
              // setShowForm(showForm);
            console.log(response.data.bjjMove.id);
            console.log(conditionalRender)
            chosenOne = response.data.bjjMove.id
        } catch (error) {
          console.log(error)
        }
    }
    console.log(chosenOne)
    
      const initialState = {
        id: '',
        name: '',
        imgUrl:''
      }
      const [formState, setFormState] = useState(initialState);
      const handleSubmit = event => {
        event.preventDefault();
        // do something with the data in the component state
        // axios.put()
        // let result = 
        axios.put(`http://localhost:3001/update`, formState)
      // console.log(result.data)
      console.log(chosenOne)
        // console.log(formState);
        // clear the form
        setFormState(initialState);
      };
      const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

const putNewInfo = async (id) => { try {
  await axios.put(
    `http://localhost:3001/update/${id}`)
} catch (error) {
  console.log(error)
}
}
/////////put/////////

  return (
  <div className="move-grid">
    {
      // props.if
      // moves.length>0&&
    
      moves.map((move, index) => (
        
        <div className="move-card" key={index}>
          <img style={{ display: 'block' }} src={move.imgUrl} alt={move.name} />
          <h3>{move.name}</h3>
          <button onClick={()=>{deleteMove(move.id)}}>x</button>
          <button onClick={()=>{getMove(move.id)}}>edit</button>
          <div>
          {/* (!conditionalRender ? form blank  :  form open ) */}
        <form onSubmit={handleSubmit}>
        <label htmlFor="id">id: </label>
        <input
        id="id"
        type="number"
        onChange={handleChange}
        value={formState.id}
      /><label htmlFor="name">name: </label>
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

    </div>
        </div>
      ))}
      <footer><Link to="new">add move</Link></footer>
    
    </div>
    )}

export default Home

