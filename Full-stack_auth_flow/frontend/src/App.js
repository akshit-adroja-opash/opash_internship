import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
