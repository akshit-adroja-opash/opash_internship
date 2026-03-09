import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Name:', name)
    console.log('Age:', age)
    console.log('Password:', password)

  }
  console.log("Rendering App component");
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
      <br />

      <button type="submit">Submit</button>
   
    </div>
  )

}
export default App
