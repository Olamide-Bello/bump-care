import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './Components/Home/Homepage.js';
import Pregnancy from './Components/Pregnancy/Pregnancy.js';
import Gynecologist from './Components/Gynecologist/Gynecologist.js';
import Childbirth from './Components/Childbirth/Childbirth.js';
import Babycare from './Components/Babycare/Babycare.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/pregnancy" element={<Pregnancy/>}/>
        <Route path="/gynecologist" element={<Gynecologist/>}/>
        <Route path="/childbirth" element={<Childbirth/>}/>
        <Route path="/babycare" element={<Babycare/>}/>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
