import { useNavigate, Link } from "react-router-dom"

const Home = (props) => {
  let navigate = useNavigate()
  const showMove = (move) => {
    navigate(`${move.id}`)
      }

  return (
  <div className="move-grid">
    <h1>Home</h1>
    {
      props.moves.map((move) => (
        <>
        <div className="move-card" onClick={() => showMove(move)} key={move.id}>
          <img style={{ display: 'block' }} src={move.imgUrl} alt={move.name} />
          <h3>{move.name}</h3>
          <h4></h4>
        </div>
        </>
      ))}
    <Link to="new">add move</Link>
    </div>
    )}

export default Home