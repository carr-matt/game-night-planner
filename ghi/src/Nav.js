import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" id="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Game Night Planner </NavLink>
        <NavLink className="nav-item" to="/MainPage/">Let's Pick a Game! </NavLink>
        <NavLink className="nav-item" to="/SearchForm/">Search All Games</NavLink>
        <NavLink className="nav-item" to="/UserDashboard/">User Dashboard</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav;
