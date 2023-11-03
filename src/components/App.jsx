import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CardMed from './CardMed';
import NewNavBar from './UI/NewNavBar';

export default function App({ medicines, user, shop }) {
  return (
    <div className="container">
      <NewNavBar user={user} shop={shop} />
      <Routes>
        <Route path="/" element={<MainPage medicines={medicines} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/" element={<MainPage medicines={medicines} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add" element={<CardMed />} />
      </Routes>
    </div>
  );
}
