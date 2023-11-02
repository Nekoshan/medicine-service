import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';

import MainPage from './MainPage';

export default function App({user, medicines }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage user={user}/>} />
      </Routes>
    </div>
  );
}
