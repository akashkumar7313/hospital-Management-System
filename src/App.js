import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainBox from './components/MainBox';
import Category from './components/pages/Master/Category';
import Unit from './components/pages/Master/Units';
import Departments from './components/pages/Master/Departments';
import Test from './components/pages/Master/Test';
import BloodGroups from './components/pages/Master/BloodGroups';
import TestParticulars from './components/pages/Master/TestParticulars';
import PaymentMode from './components/pages/Master/PaymentMode';
import Nationality from './components/pages/Master/Nationality';
import AddDoctor from './components/pages/Doctor/AddDoctor';
import DoctorCommision from './components/pages/Doctor/DoctorCommision';
import Report from './components/pages/Doctor/Report';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Master/Category" element={<Category />}></Route>
      <Route path="/Master/Unit" element={<Unit />}></Route>
      <Route path="/Master/Department" element={<Departments />}></Route>
      <Route path="/Master/Test" element={<Test />}></Route>
      <Route path="/Master/BloodGroups" element={<BloodGroups />}></Route>
      <Route path="/Master/TestParticulars" element={<TestParticulars />}></Route>
      <Route path="/Master/PaymentMode" element={<PaymentMode />}></Route>
      <Route path="/Master/Nationality" element={<Nationality />}></Route>
      <Route path="/Doctor/AddDoctor" element={<AddDoctor />}></Route>
      <Route path="/Doctor/DoctorCommision" element={<DoctorCommision />}></Route>
      <Route path="/Doctor/Report" element={<Report />}></Route>
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