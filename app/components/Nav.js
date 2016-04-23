import React from 'react'
import { Link } from 'react-router'

const NavLink = ({ name, to }) => {
  return (
    <Link to={to} activeClassName="active" onlyActiveOnIndex={true}>
      <li>{name}</li>
    </Link>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink name="Home" to="/" />
        <NavLink name="Projects" to="/projects" />
        <NavLink name="Reading" to="/reading" />
      </ul>
    </nav>
  )
}

export default Nav
