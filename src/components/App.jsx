import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Reactdatepicker from './Reactdatepicker';


export default function App({ medicines, user}) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/date" element={<Reactdatepicker />} />
        <Route path="/" element={<MainPage medicines={medicines}/>} />
        <Route path="/profile" element={<ProfilePage user={user}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
