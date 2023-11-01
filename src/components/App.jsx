import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ProfilePage from './ProfilePage';
// import {User}from '../../db/models'

export default function App({user}) {
  return (
   <div className='container'>
   <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage user={user}/>} />
      </Routes>
      </div>
  );
}

