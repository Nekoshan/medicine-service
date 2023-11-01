import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import MainPage from './MainPage';

export default function App({ medicines }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage medicines={medicines} />} />
      </Routes>
    </div>
  );
}
