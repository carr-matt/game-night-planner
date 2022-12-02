import { useEffect, useState } from 'react';
// import ErrorNotification from './ErrorNotification';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './DashBoardComponents/UserDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainDetailComponents/MainPage';
import SearchForm from './MainDetailComponents/SearchForm';
import Detail from './MainDetailComponents/DetailPage';

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_game_night_API_HOST}/api/money_maker/;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])


  return (

    <BrowserRouter>
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
        <Route path="/detail/" element={<Detail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
