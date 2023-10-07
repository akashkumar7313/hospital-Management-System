import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainBox from './components/MainBox';
import Category from './components/pages/Master/Category';
import Unit from './components/pages/Master/Units';
import Departments from './components/pages/Master/Departments';
import Test from './components/pages/Master/Test';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Master/Category" element={<Category />}></Route>
      <Route path="/Master/Unit" element={<Unit />}></Route>
      <Route path="/Master/Department" element={<Departments />}></Route>
      <Route path="/Master/Test" element={<Test />}></Route>
      <Route path="/" element={<Layout />}>
          <Route path="navbar" element={<Navbar />} />
          <Route path="mainBox" element={<MainBox />} />
      </Route>
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