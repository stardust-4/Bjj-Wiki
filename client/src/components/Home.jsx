import { useNavigate, Link } from "react-router-dom"

const Home = (props) => {
  let navigate = useNavigate()
  const showMove = (move) => {
    navigate(`${move.id}`)
      }

  return (
  <div className="move-grid">
    {/* <main>Home</main> */}
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