import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}></Route>
        <Route element={<Navbar />} />
        <Route element={<Main />} />
      </Routes>
    </Router>
  );
}


function Layout() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;