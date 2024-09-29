import { useEffect, useState } from 'react'

import NavButton from './NavButton'

function NavBar({ }) {

  return (
    <>
      <nav className='btm-nav'>
        <NavButton className={'bi bi-sliders'} link={'/settings'} />
        <NavButton className={'bi bi-camera-video'} link={'/'} />
        <NavButton className={'bi bi-film'} link={'/videos'} />
        <NavButton className={'bi bi-bell'} link={'/logs'} />
      </nav>
    </>
  )
}

export default NavBar
