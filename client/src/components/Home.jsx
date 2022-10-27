import { useNavigate, Link, resolvePath } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
// const api = axios.create({baseURL: `http://localhost:3001/moves`})

const Home = (
  props
  ) => {
  let navigate = useNavigate()
  const showMove = async (move) => {
    navigate(`${move.id}`)
    console.log(await axios.get(
      `http://localhost:3001/move/${move.id}`
    ))
    // document.querySelector('div').innerHTML = `<img src =${move.imgUrl}>`
}
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

  return (
  <div className="move-grid">
    {
      // props.if
      moves.length>0&&
    
      moves.map((move, index) => (
        
        <div className="move-card" onClick={() => showMove(move)} key={index}>
          <img style={{ display: 'block' }} src={move.imgUrl} alt={move.name} />
          <h3>{move.name}</h3>
        </div>
        
      ))}
      <footer><Link to="new">add move</Link></footer>
    
    </div>
    )}

export default Home