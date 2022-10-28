import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MoveCard from './MoveCard'

const Home = () => {
  const [moves, setMoves] = useState([{ name: 1 }])

  const getMoves = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/moves`)
      setMoves(response.data.moves)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMoves()
  }, [])

  return (
    <>
      <div className="move-grid">
        {moves.map((move, index) => (
          <MoveCard
            moves={moves}
            setMoves={setMoves}
            move={move}
            index={index}
            key={move._id}
            getMoves={getMoves}
          />
        ))}
      </div>
      <footer>
        <Link to="new">add move</Link>
      </footer>
    </>
  )
}

export default Home
