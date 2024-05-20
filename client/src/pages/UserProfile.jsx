import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

const UserProfile = () => {

  const [avatar, setAvatar] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [error, setError] = useState('')

  const [isAvatarTouched, setIsAvatarTouched] = useState(false)

  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate()
  
  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!currentUser) {
      navigate('/login')
    }
  })

  useEffect(() => {
    const getAuthor = async() => {
      const response = await axios.get(`/api/authors/${currentUser._id}`, {withCredentials: true})
  
      const {name, email, avatar} = response.data
      setName(name)
      setEmail(email)
      setAvatar(avatar)
    }

    getAuthor()
  }, [])


  const changeAvatarHandler = async() => {
    setIsAvatarTouched(false)
    try {
      const postData = new FormData()
      postData.set("avatar", avatar)

      const response = await axios.post(`/api/authors/change-avatar`, postData, {withCredentials: true})
      setAvatar(response?.data.avatar)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUserDetail = async(e) => {
    e.preventDefault()

    try {
      const userData = new FormData()
      userData.set('name', name)
      userData.set('email', email)
      userData.set('currentPassword', currentPassword)
      userData.set('newPassword', newPassword)
      userData.set('confirmNewPassword', confirmNewPassword)

      const response = await axios.patch(`/api/authors/edit`, userData, {withCredentials: true})
      if(response.status == 200) {
        //logout the user
        navigate('/logout')
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred updating profile. Please try again later.");
      }
    }
  }

  return (
    <section className="profile">
      <div className="container profile__container">
        <div className='profile__buttons'>
          <Link to={`/myposts/${currentUser._id}`} className='btn'>My posts</Link>
          <Link to={`/register`} className='btn'>Add Author</Link>
        </div>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={`/uploads/${avatar}`} alt="Avatar" />
            </div>
            {/* Form to updata Avatar */}
            <form className='avatar__form'>
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
              <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)}><FaEdit /></label>
            </form>
            {isAvatarTouched && <button className="profile__avatar-btn" onClick={changeAvatarHandler}><FaCheck /></button>}
          </div>
        </div>

        <h1>{currentUser.name}</h1>

        {/* Form to update Details */}
        <form className="form profile__form" onSubmit={updateUserDetail}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="text" placeholder='Full Name' name="name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='Email' name="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Current password' name="" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
          <input type="password" placeholder='New password' name="" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <input type="password" placeholder='Confirm new password' name="" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
          <button type="submit" className='btn primary'>Update details</button>
        </form>
      </div>
    </section>
  )
}

export default UserProfile
