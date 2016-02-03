import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => {
  const { name, to } = props;
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
        <NavLink name="Projects" to={`/projects`}/>
        <NavLink name="Home" to={`/`}/>
        <NavLink name="Reading" to={`/reading`}/>
      </ul>
    </nav>
  )
}

export default Nav;
