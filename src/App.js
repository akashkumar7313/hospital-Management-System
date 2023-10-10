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
import Patient from './components/pages/Patient/Patient';
import Registration from './components/pages/Patient/Registration';
import VisitDetails from './components/pages/Patient/VisitDetails';
import ReportManager from './components/pages/Patient/ReportManager';
import CreateInvoice from './components/pages/Invoice/CreateInvoice';
import Bills from './components/pages/Invoice/Bills';
import BusinessReport from './components/pages/Invoice/BusinessReport ';

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
      <Route path="/Patient/Patients" element={<Patient />}></Route>
      <Route path="/Patient/Registration" element={<Registration />}></Route>
      <Route path="/Patient/VisitDetails" element={<VisitDetails />}></Route>
      <Route path="/Patient/ReportManager" element={<ReportManager />}></Route>
      <Route path="/Invoice/CreateInvoice" element={<CreateInvoice />}></Route>
      <Route path="/Invoice/Bills" element={<Bills />}></Route>
      <Route path="/Invoice/BusinessReport" element={<BusinessReport />}></Route>
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