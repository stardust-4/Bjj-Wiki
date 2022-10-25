import { Link } from 'react-router-dom'

const Nav = () => {
  return (<nav className='navbar'>
    <div>
        <Link to="/">Home</Link>
        <Link to="/move/:id">Move Details</Link>
        <Link to="new">Add Move</Link>
      </div>
  </nav>)
}

export default Nav