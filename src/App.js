import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './Components/Home/Homepage';
import Pregnancy from './Components/Pregnancy/Pregnancy';
import Gynecologist from './Components/Gynecologist/Gynecologist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/pregnancy" element={<Pregnancy/>}/>
        <Route path="/gynecologist" element={<Gynecologist/>}/>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
