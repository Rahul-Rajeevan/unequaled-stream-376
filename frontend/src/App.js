import logo from './logo.svg';
import './App.css';
import Login from './Components/Mohit/Login';
import Homepage from './HomePage/Homepage';
import LandingPage from './pages/landing/LandingPage';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './Components/SignUpThing/FirstPage';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<FirstPage/>}/>
     <Route path="/landing" element={<RequireAuth><LandingPage/></RequireAuth>}/>
     </Routes>
    </div>
  );
}


export default App;
