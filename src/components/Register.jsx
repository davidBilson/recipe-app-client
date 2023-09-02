import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    window.localStorage.setItem("userId", '')
    window.localStorage.setItem("userName", '')    
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3005/auth/register", {username, password})
      console.log(response)
      alert(response.data.message)
    } catch (err) {
        console.log(err)
    }
  }

  return (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
              <label htmlFor="">Username:</label>
              <input type="text" autoComplete='off' required id='username' onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input type="password" required autoComplete='off' id='password' onChange={(e) => setPassword(e.target.value) } value={password} />
            </div>
            <button type='submit'>Register</button>
          </form>
        </div>
  )
}

export default Register