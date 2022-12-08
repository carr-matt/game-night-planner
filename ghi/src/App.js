import { useEffect, useState } from 'react';
// import ErrorNotification from './ErrorNotification';
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
    {/* <Link to={`/details/${props.game_detail.id}`}></Link> */}
    <Nav />
    <div>
      {/* <ErrorNotification error={error} /> */}
      {/* <Construct info={launch_info} /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage/" element={<MainPage />} />
        <Route path="/UserDashboard/" element={<UserDashboard />} />
        <Route path="/SearchForm/" element={<SearchForm />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/detail/:bgaID" element={<DetailPage />} />
        {/* <Route path="/detail/${e.target.value}" element={<DetailPage />} />
        <Route path="/details/:detailId" element={<DetailPage />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
