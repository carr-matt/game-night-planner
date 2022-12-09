import { NavLink } from 'react-router-dom';
import logo from "./Images/dice-logo.ico";
import gon from "./Images/gon.png";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-success" id="navbar"></nav> */}
      <div className="container-fluid">
        <img src={logo} className="logo" />
        <NavLink className="nav-item" to="/">Game Night Planner </NavLink>
        <NavLink className="nav-item" to="/MainPage/"> Let's Pick a Game! </NavLink>
        <NavLink className="nav-item" to="/SearchForm/"> Search All Games</NavLink>
        <NavLink className="nav-item" to="/UserDashboard/">My Dashboard</NavLink>
        <DropdownButton title={<img className='avatar' src={gon}/>} variant="dark" id="dropdown-button-image" menuVariant='dark'>
          <Dropdown.Item href='/Login/'>Login</Dropdown.Item>
          <Dropdown.Item href='/SignUp/'>SignUp</Dropdown.Item>
        </DropdownButton>
        {/* <NavLink className="nav-item" to="/Detail/">Detail</NavLink> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </div>
    </nav>
  )
}

export default Nav;
