import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './pages/Footer';
<<<<<<< HEAD
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/navbar' element={<Navbar/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
=======

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path='/navbar' element={<Navbar/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
  );
};

export default App;
