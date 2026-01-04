import React from 'react';
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav>
      <div className='logo'>Game</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/quiz">Quiz</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
