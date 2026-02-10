import './App.css'
import Step1 from './step1.tsx'
import Step2 from './step2.tsx'
import Step3 from './step3.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="form-header">
        <h1>Multi-Step Registration</h1>
        <p>Complete your profile in just 3 easy steps</p>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </Router>
      <div className="form-footer">
        <p>Secure & Private • Powered by React</p>
      </div>
    </div>
  )
}

export default App
