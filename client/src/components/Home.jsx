import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'

const Home = (props) => {
  let navigate = useNavigate()
  const showMove = async (move) => {
    console.log(`${move.id}`)
    navigate(`${move.id}`)
    console.log(await axios.get(
      `http://localhost:3001/move/${move.id}`
    ))
    // document.querySelector('div').innerHTML = `<img src =${move.imgUrl}>`

      }

  return (
  <div className="move-grid">
    {
      props.moves.map((move) => (
        <>
        <div className="move-card" onClick={() => showMove(move)} key={move.id}>
          <img style={{ display: 'block' }} src={move.imgUrl} alt={move.name} />
          <h3>{move.name}</h3>
        </div>
        </>
      ))}
      <footer><Link to="new">add move</Link></footer>
    
    </div>
    )}

export default Home