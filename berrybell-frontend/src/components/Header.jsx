import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Header({ title }) {

  return (
    <>
      <nav className='p-4 navbar rounded-lg justify-between bg-black bg-opacity-20'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p className='opacity-75'>berrybell</p>
      </nav>
    </>
  )
}

export default Header
