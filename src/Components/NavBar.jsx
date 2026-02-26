import React from 'react';
import '../css/NavBar.css'

function NavBar() {
  return (
    <div className='header'>
    <nav>
      <div className='logo'>Game</div>
      <ul>
        <li><a href="/online_quiz">Home</a></li>
        <li><a href="/quiz">Quiz</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
