import axios from "axios"
import { useEffect, useState } from "react"

const Edit = () => {


useEffect(()=>{
  const getMove = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/move/3`)
        // setMoves(response.data.moves);
        console.log(response.data);
    } catch (error) {
      console.log(error)
    }
}
getMove()
},[])

return (
  <div>
    edit
  </div>
)}

export default Edit


