import logo from './logo.svg';
import './App.css';
import RequestsPage from './components/hotel_side/RequestsPage';
import Profile from './components/hotel_side/Profile';
import UpdateDetails from './components/hotel_side/UpdateDetails';
import Login from './components/hotel_side/Login';
import Navbar_hotel from './components/hotel_side/Navbar_hotel';
import Logoutpage from './components/hotel_side/logoutpage';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar_hotel></Navbar_hotel>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/updatehotel' element={<UpdateDetails/>}/>
        <Route path='/dashboard' element={<Profile/>}/>
        <Route path='/requests' element={<RequestsPage/>}/>
        <Route path='/logout' element={<Logoutpage/>}/>

      </Routes>
       
    </div>
  );
}

export default App;