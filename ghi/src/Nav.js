import { NavLink } from 'react-router-dom';
import logo from "./Images/dice-logo.ico";
import gon from "./Images/gon.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" id="navbar">
      <div className="container-fluid">
        <img src={logo} />
        <NavLink className="nav-item" to="/">Game Night Planner </NavLink>
        <NavLink className="nav-item" to="/MainPage/"> Let's Pick a Game! </NavLink>
        <NavLink className="nav-item" to="/SearchForm/"> Search All Games</NavLink>
        <NavLink className="nav-item" to="/UserDashboard/">My Dashboard</NavLink>
        <NavLink className="nav-item" to="/Login/">Login</NavLink>
        <NavLink className="nav-item" to="/SignUp/">SignUp</NavLink>
        {/* <NavLink className="nav-item" to="/Detail/">Detail</NavLink> */}
        <img className='avatar' src={gon} />
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </div>
    </nav>
  )
}

export default Nav;
