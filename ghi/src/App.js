import { useEffect, useState } from 'react';
// import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
import UserDashboard from './DashBoardComponents/UserDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainDetailComponents/MainPage';
import SearchForm from './MainDetailComponents/SearchForm';

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);  

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      console.log('fastapi url: ', url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, [])


  return (
    
    <BrowserRouter>
    <Nav />
    <div>
      <ErrorNotification error={error} />
      {/* <Construct info={launch_info} /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/UserDashboard/" element={<UserDashboard />} />
        <Route path="/SearhForm/" element={<SearchForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
