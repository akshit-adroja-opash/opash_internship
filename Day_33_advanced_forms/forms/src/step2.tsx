// multi step form step 2
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Step2: React.FC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [pin, setPin] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/step3');
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '66.66%' }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Address Information</h2>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">🏠</span> Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">🏙️</span> City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">📮</span> Pin
          </label>
          <input
            type="text"
            value={pin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPin(e.target.value)}
            placeholder="Enter your pin code"
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={() => navigate('/step1')}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  )
}

export default Step2
