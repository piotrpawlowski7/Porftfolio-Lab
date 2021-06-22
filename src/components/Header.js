import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="d-flex flex-row">
        <li className="p-2"><Link to='/'>Start</Link></li>
        <li className="p-2"><Link to='/login'>Logowanie</Link></li>
        <li className="p-2"><Link to='/register'>Rejestracja</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
