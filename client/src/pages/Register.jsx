import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/userContext'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {currentUser} = useContext(UserContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!currentUser) {
      navigate('/login')
    }
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const registerUser = async(e) => {
    e.preventDefault() 
    try {
      const response = await axios.post(`/api/authors/register`, userData);
      const newUser = await response.data;
      console.log(newUser);
      navigate('/login');
      if (!newUser) {
        setError("Couldn't register. Please try again.");
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while registering. Please try again later.");
      }
    }
  }

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="text" name="name" placeholder='Full Name' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler}/>
          <input type="password" name="confirmPassword" placeholder='Confirm password' value={userData.confirmPassword} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already registered? <Link to={'/login'}>Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register
