import './App.css';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './DashBoardComponents/UserDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainDetailComponents/MainPage';
import SearchForm from './MainDetailComponents/SearchForm';
import DetailPage from './MainDetailComponents/DetailPage';
import Trending from './MainDetailComponents/Trending';


function App() {

    const domain = /https:\/\/[^/]+/;
    const basename = process.env.PUBLIC_URL.replace(domain, '');

  return (

    <BrowserRouter basename={basename}>
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
        <Route path="/trending/" element={<Trending />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
