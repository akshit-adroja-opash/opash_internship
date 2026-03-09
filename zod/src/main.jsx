import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './form.jsx'
import ZodForm from './Zodform.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ZodForm/>
  </StrictMode>,
)
