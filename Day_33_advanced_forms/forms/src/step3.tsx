import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

interface FormErrors {
  state?: string;
  country?: string;
}

const Step3: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!state.trim()) newErrors.state = 'State is required'
    if (!country.trim()) newErrors.country = 'Country is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Registration Complete!\nState: ${state}\nCountry: ${country}`);
      // Reset form or navigate to success page
      navigate('/');
    }
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '100%' }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Final Details</h2>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">🌍</span> State
          </label>
          <input
            type="text"
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
            className={errors.state ? 'error' : ''}
            placeholder="Enter your state"
          />
          {errors.state && <span className="error-message">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">🌎</span> Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
            className={errors.country ? 'error' : ''}
            placeholder="Enter your country"
          />
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>
        <div className="button-group">
          <button type="button" onClick={() => navigate('/step2')}>Back</button>
          <button type="submit">Complete Registration</button>
        </div>
      </form>
    </>
  )
}

export default Step3;
