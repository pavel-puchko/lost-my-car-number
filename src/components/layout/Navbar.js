import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <ul class="centeer">
          <li>
            <NavLink exact to='/'>Найденные номера</NavLink>
          </li>
        </ul>
        <ul class="right">
          <li>
            <NavLink to='/foundNumber'>Я НАШЕЛ НОМЕР</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
