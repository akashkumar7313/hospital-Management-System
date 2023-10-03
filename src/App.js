import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainBox from './components/MainBox';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}></Route>
        <Route element={<Navbar />} />
        <Route element={<MainBox />} />
      </Routes>
    </Router>
  );
}


function Layout() {
  return (
    <>
      <Navbar />
      <MainBox />
    </>
  );
}

export default App;