import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { AuthContext } from './AuthProvider'

const Login = () => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        { username, password }
      )

      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)

      setIsLoggedIn(true)
      navigate('/dashboard')

    } catch (err) {
      setError("Invalid username or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='text-light container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-light-dark p-5 rounded'>
          <h3 className='text-center mb-4'>Login to our portal</h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Username'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="password"
              className='form-control mb-4'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className='text-danger mb-3'>{error}</div>}

            <button type='submit' className='btn btn-info d-block mx-auto'>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
