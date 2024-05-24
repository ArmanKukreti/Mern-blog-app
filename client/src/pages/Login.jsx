import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import {UserContext} from '../context/userContext.js'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async(e) => {
    e.preventDefault() 
    try {
      const response = await axios.post(`/api/authors/login`, userData, {
        withCredentials: true
      });
      const user = await response.data;
      setCurrentUser(user)
      navigate('/home');

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while loggging in. Please try again later.");
      }
    }
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary '>Login</button>
        </form>
        <small>Only admins can login. Any query? click <Link to={'/contact'}>here</Link></small>
      </div>
    </section>
  )
}

export default Login
