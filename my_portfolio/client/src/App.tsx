import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './pages/Footer';

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
  );
};

export default App;
