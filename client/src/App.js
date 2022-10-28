import './App.css'
import movesArray from './data/moves'
import { useState } from 'react'
import Home from './components/Home'
import MoveDetails from './components/MoveDetails'
import Nav from './components/Nav'
import FormApp from './components/MoveForm'

import { Routes, Route } from 'react-router-dom'
import Edit from './components/Edit'

const App = () => {
  const [moves, setMoves] = useState(movesArray)
  // const [newMove, setNewMove] = useState({
  //   id: '',
  //   name: '',
  //   img: '',
  //   description: ''
  // })

  // const addMove = (e) => {
  //   e.preventDefault()
  //   const currentMoves = moves
  //   const createdMove = {
  //     ...newMove,
  //     id: parseInt(moves.length + 1)
  //   }
  //   currentMoves.push(createdMove)
  //   setMoves(currentMoves)
  //   setNewMove({ id: '', name: '', imgUrl: '' })
  // }

  // const handleChange = (e) => {
  //   setNewMove({ ...newMove, [e.target.name]: e.target.value })
  // }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home moves={moves} />} />
          <Route path="/move/:id" element={<MoveDetails moves={moves} />} />
          {/* <Route
            path="new"
            element={
              <MoveForm
                newMove={newMove}
                handleChange={handleChange}
                addMove={addMove}
              />
            }
          /> */}
          <Route path="new" element={<FormApp />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
