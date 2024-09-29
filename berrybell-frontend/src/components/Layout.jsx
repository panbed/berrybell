import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import NavBar from './NavBar'

const titles = {
  '/': 'Home',
  '/settings': 'Settings',
  '/logs': 'Logs',
  '/videos': 'Videos'
}

function Layout() {

  const location = useLocation()

  return (
    <>
      <div className='p-6'>
        <nav className='p-4 navbar rounded-lg justify-between bg-black bg-opacity-20'>
          <h1 className='text-2xl font-semibold'>{titles[location.pathname]}</h1>
          <p className='opacity-75'>berrybell</p>
        </nav>

        <div className='p-3'>
          <Outlet />
        </div>
      </div>

      <NavBar title={location.pathname} />
    </>
  )
}

export default Layout
