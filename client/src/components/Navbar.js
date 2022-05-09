import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>
            <Link className='link' to='/'>
                Andy App
            </Link>
        </span>
        <ul>
            <li className='list'>
                <img
                    src='./../img/perfil.jpeg'
                    alt='imagen de logo'
                    className='avatar'
                />
            </li>
            <li className='listItem'>Andrea Cortez</li>
            <li className='listItem'>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar