import React from 'react';
import '../css/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='header'>
    <nav>
      <div className='logo'>Game</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
