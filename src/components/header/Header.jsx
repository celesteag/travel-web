import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '/src/logo/travel-web-logo.png'

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/" className="header-logo">
          <img src={logo} alt="TravelWeb logo" />
        </NavLink>

        <nav className="header-nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header
