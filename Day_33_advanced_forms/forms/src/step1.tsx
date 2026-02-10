// multi step form
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

const Step1: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid'
    if (!password.trim()) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number must be 10 digits'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/step2');
    }
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '33.33%' }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">👤</span> First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            className={errors.firstName ? 'error' : ''}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">👤</span> Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            className={errors.lastName ? 'error' : ''}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">📧</span> Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">🔒</span> Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label className="label-with-icon">
            <span className="icon">📞</span> Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            className={errors.phone ? 'error' : ''}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="button-group">
          <button type="button" disabled>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  )
}

export default Step1;
