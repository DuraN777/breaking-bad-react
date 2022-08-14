import React from 'react'
import logo from '../../img/logo.png'

// Creating a header, using center class and adding a logo img
const Header = () => {
  return (
    <header className='center'>
      <img src={logo} alt='' />
    </header>
  )
}

export default Header