import React from 'react';
import './App.css';
import Login from './components/Login.jsx';
import Typography from '@mui/material/Typography';
import Registration from './components/Registration.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';

function App() {
  
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Registration/>}/>
        </Routes>
      </Router> */}
      <Dashboard/>
    </>
  )
}

export default App
