import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from "./Images/dice-logo.ico";
import gon from "./Images/gon.png";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './nav.css';



function Nav() {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleMouseEnter = () => {
    setIsVibrating(true);
  }

  const handleMouseLeave = () => {
    setIsVibrating(false);
  }

  const refreshPage = () => {
    window.reload(false)
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand jm-logo" onClick={refreshPage} to="/">
          <img src={logo}
          className={`logo ${isVibrating ? 'vibrate' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          />
        </NavLink>
        <NavLink className="nav-item" to="/SearchForm/"> Let's Pick a Game! </NavLink>
        <NavLink className="nav-item" to="/SearchForm/"> Search All Games</NavLink>
        <NavLink className="nav-item" to="/UserDashboard/">My Dashboard</NavLink>
        <DropdownButton title={<img className='avatar' src={gon}/>} variant="dark" id="dropdown-button-image" menuVariant='dark'>
          <Dropdown.Item href='/Login/'>Login</Dropdown.Item>
          <Dropdown.Item href='/SignUp/'>SignUp</Dropdown.Item>
          </DropdownButton>
      </div>
    </nav>
  )
}

export default Nav;
