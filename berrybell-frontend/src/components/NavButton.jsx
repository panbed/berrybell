import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';

function NavButton({ className, link }) {
  const location = useLocation()

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (location.pathname == link) {
      console.log(location.pathname)
      console.log(link)
      setActive(true)
    }
    else {
      setActive(false)
    }
  }, [location.pathname])

  return (
    <Link to={link} className={active ? 'active' : ''}>
      <button >
        <i className={className} />
      </button>
    </Link>
  )
}

export default NavButton
