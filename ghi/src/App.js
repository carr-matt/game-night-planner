import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './DashBoardComponents/UserDashboard';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainDetailComponents/MainPage';
import SearchForm from './MainDetailComponents/SearchForm';
import DetailPage from './MainDetailComponents/DetailPage';
import { useParams } from "react-router-dom";

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  return (

    <BrowserRouter>
    <Nav />
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage/" element={<MainPage />} />
        <Route path="/UserDashboard/" element={<UserDashboard />} />
        <Route path="/SearchForm/" element={<SearchForm />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/detail/:bgaID" element={<DetailPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
