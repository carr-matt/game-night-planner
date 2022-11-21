import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainDetailComponents/MainPage';
import Login from './SignUpComponents/Login';
import Signup from './SignUpComponents/Signup';

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
    <div>
      <Routes>
        <Route path="mainpage/" element={<MainPage />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
