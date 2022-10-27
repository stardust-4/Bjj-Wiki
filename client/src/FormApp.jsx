import './form.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MoveForm from './components/MoveForm'

const FormApp = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getIssues = async () => {
      try {
        let res = await axios.get('http://localhost:3001/moves')
        console.log(res.data)
        setIssues(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getIssues()
  }, [])

  return (
    <div className="App">
      <MoveForm />
      <h1>Issues:</h1>
      {issues.map((issue) => (
        <div key={issue._id}>
          <h3>Type: {issue.type}</h3>
          <p>Subject: {issue.subject}</p>
          <p>Message: {issue.message}</p>
        </div>
      ))}
    </div>
  )
}

export default FormApp
