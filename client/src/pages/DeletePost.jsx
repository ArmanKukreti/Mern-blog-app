import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import Loader from '../Components/Loader'

const DeletePost = ({postId: id}) => {

  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  
  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!currentUser) {
      navigate('/login')
    }
  })

  const removePost = async() => {

    setIsLoading(true)
    try {
      const response = await axios.delete(`/api/posts/${id}`, {withCredentials: true})
      if(response.status == 200) {
        if(location.pathname == `/myposts/${currentUser._id}`) {
          navigate(0) //refresh that page
        } else {
          navigate('/home')
        }
      }
    } catch (error) { 
      console.log("Couldn't delete post.")
    } finally {
      setIsLoading(false)
    }
  }

  if(isLoading) {
    return <Loader/>
  }

  return (
    <Link className='btn sm danger' onClick={() => removePost(id)}>Delete</Link>
  )
}

export default DeletePost
