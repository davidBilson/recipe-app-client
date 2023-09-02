import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const Login = () => {

  useEffect(() => {
    window.localStorage.setItem("userId", '')
    window.localStorage.setItem("userName", '')    
  }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [_, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response =  await axios.post("http://localhost:3005/auth/login", {username, password})
        console.log(response)
        console.log(response.data)
        console.log(response.data.token)

        if (!response.data.success) {
          alert(response.data.message)
          console.log(response.data.message)
        } else {
          setCookies('access_token', response.data.token)
          window.localStorage.setItem("userId", response.data.userId)
          window.localStorage.setItem("userName", response.data.userName)
          navigate('/')
        }

    } catch(err) {
      console.error(err)
      alert('Wrong username or password')
    }
  }



  return (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
              <label htmlFor="">Username:</label>
              <input type="text" required id='username' onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input type="password" required id='password' onChange={(e) => setPassword(e.target.value) } value={password} />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
  )
}

export default Login