import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from "./Images/dice-logo.ico";
import gon from "./Images/gon.png";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './nav.css';
import { useLogOutMutation } from "./app/authApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



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


function Logout() {
  const navigate = useNavigate();
  const [logOut, { data }] = useLogOutMutation();

  useEffect(() => {
    if (data) {
      navigate('/login/');
    }
  });

  return (
    <div>
      <div onClick={logOut}>
        Log out
      </div>
    </div>
  );
}


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand jm-logo" onClick={refreshPage} to="/">
          <img src={logo}
          className={`logo ${isVibrating ? 'vibrate' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt='logo'
          />
        </NavLink>
        <NavLink className="nav-item" to="/SearchForm/"> Let's Pick a Game! </NavLink>
        <NavLink className="nav-item" to="/Trending/"> Trending Games</NavLink>
        <NavLink className="nav-item" to="/UserDashboard/">My Dashboard</NavLink>
        <DropdownButton title={<img className='avatar' src={gon} alt='avatar' />} variant="dark" id="dropdown-button-image" menuVariant='dark'>
          <Dropdown.Item href='/Login/'>Login</Dropdown.Item>
          <Dropdown.Item href='/SignUp/'>SignUp</Dropdown.Item>
           <Dropdown.Item><Logout /></Dropdown.Item>
        </DropdownButton>
      </div>
    </nav>
  )
}

export default Nav;
