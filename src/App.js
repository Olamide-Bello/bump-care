import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './Components/Home/Homepage.js';
import Pregnancy from './Components/Pregnancy/Pregnancy.js';
import Gynecologist from './Components/Gynecologist/Gynecologist.js';
import Childbirth from './Components/Childbirth/Childbirth.js';
import Babycare from './Components/Babycare/Babycare.js';
import Community from './Components/Community/Community';
import Policy from './Components/Policy/Policy';
import AuthContextProvider from './Components/Context/AuthContext';
import { ToastContainer } from 'react-toastify';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import PasswordReset from './Components/SignIn/PasswordReset';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <ToastContainer/>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/reset" element={<PasswordReset/>} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/gynecologist" element={<ProtectedRoute><Gynecologist /></ProtectedRoute>} />
          <Route path="/childbirth" element={<Childbirth />} />
          <Route path="/babycare" element={<Babycare />} />
          <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;
