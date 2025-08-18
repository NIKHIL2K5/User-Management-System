import React from 'react'
import Navbar from './pages/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <footer>Footer</footer>
    </div>
  )
}

export default Layout