import { useNavigate, Link, useRouteLoaderData} from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
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
        console.log(response.data.moves);
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
          {/* <button>edit</button> */}
        </div>
        
      ))}
      <footer><Link to="new">add move</Link></footer>
    
    </div>
    )}

export default Home