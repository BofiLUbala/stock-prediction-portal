import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleReistration = async (e) => {
        e.preventDefault()

        setLoading(true)   // ✅ START loading here

        const userData = {
            username,
            email,
            password
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/v1/register/",
                userData
            )

            console.log('Resposne.data===>', response.data)
            console.log("registration successful")
            setErrors('')
            setSuccess(true)

        } catch (error) {
            setErrors(error.response.data)
            console.error("Registration error ", error.response.data)
        } finally {
            setLoading(false)   // ✅ STOP loading here
        }
    }

    return (
        <>
            <div className='text-light container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 bg-light-dark p-5 rounded'>
                        <h3 className='text-ligth text-center mb-4'>
                            Create an Account
                        </h3>

                        <form onSubmit={handleReistration}>
                            <input
                                type="text"
                                className='form-control mb-3'
                                placeholder='user name'
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <span>{errors.username && <div className='text-danger'>{errors.username}</div>}</span>

                            <input
                                type="email"
                                className='form-control mb-3'
                                placeholder='enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span>{errors.email && <div className='text-danger'>{errors.email}</div>}</span>

                            <input
                                type="password"
                                className='form-control mb-5'
                                placeholder='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {success && (
                                <div className="alert alert-success">
                                    Registration Successful
                                </div>
                            )}

                            {loading ? (
                                <button type='submit' className='btn btn-info d-block mx-auto'>
                                   <FontAwesomeIcon icon={faSpinner} spin /> Please Wait...
                                </button>
                            ) : (
                                <button type='submit' className='btn btn-info d-block mx-auto'>
                                    Register
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
