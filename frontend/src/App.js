import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import User from './Store/UserContext';

import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Booking from './Pages/Booking';
import Records from './Pages/Records';
import UsersAdmin from './Pages/UsersAdmin';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Error from './Pages/Error';

import './App.css';
import AdminLogin from './Components/Admin/AdminLogin';


function App() {

  return (
    <Fragment>
      <User>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>  
      <Route path='/login' element={<LoginPage/>}/>  
      <Route path='/Signup' element={<SignupPage/>}/>    
      {/* <Route path='/app' element={<Application/>}/>     */}

      <Route path='/admin/login' element={<AdminLogin/>}/>    
      <Route path='/admin' element={<Admin/>}/>    
      <Route path='/admin/records' element={<Records/>}/>    
      <Route path='/admin/booking' element={<Booking/>}/>    
      <Route path='/admin/users' element={<UsersAdmin/>}/>    

      <Route path='*' element={<Error/>}/>    
    </Routes>
   </Router>
   </User>
   </Fragment>
  );
}

export default App;
