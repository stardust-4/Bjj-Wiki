import { useEffect, useState } from 'react'
import axios from 'axios'
const MoveDetails = () => {

  const [moves, setMoves] = useState([{description: 1}]);
// Get/Read
useEffect(()=>{
  const getMoves = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/details/`)
        setMoves(response.data.details);
        console.log(response.data.details);
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
        
        <div className="move-card" key={index}>
          <h1>{move.category}</h1>
          <h3>{move.description}</h3>
        </div>
        
      ))}
    
    </div>
    )
  // return (<h1>MoveDetails</h1>)


}

export default MoveDetails