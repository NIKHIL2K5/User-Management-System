import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from './contexts/ThemeContex'

import './App.css';

import { Authentication } from './pages/Authentication';
import { UserProfile } from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import { Home } from './pages/Home';
import Navbar from './pages/Navbar';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

  );
}

export default App;