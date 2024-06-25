import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import Loader from '../Components/Loader'
import DeletePost from './DeletePost'

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()

  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate()
  
  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!currentUser) {
      navigate('/login')
    }
  })

  useEffect(() => {
    const fetchPosts = async() => {
      setIsLoading(true)
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(`https://mern-blog-app-backend-f8zg.onrender.com/api/posts/authors/${id}`)
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [id])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <section className="dashboard">
      <h2>My Dashboard</h2>
      {
        posts.length ? (<div className='container dashboard__container'>
          {
            posts.map((post) => (
              <article key={post._id} className='dashboard__post'>
                <div className='dashboard__post-info'>
                  <div className='dashboard__post-thumbnail'>
                    {post.thumbnail && <img src={post.thumbnail.url} alt='Thumbnail'></img>}
                  </div>
                  <h5>{post.title}</h5>
                </div>

                <div className='dashboard__post-actions'>
                  <Link to={`/posts/${post._id}`} className='btn sm'>View</Link>
                  <Link to={`/posts/${post._id}/edit`} className='btn sm primary'>Edit</Link>
                  <DeletePost postId={post._id}/>
                </div>
              </article>
            ))
          }
        </div>) : <h2 className='center'>You have no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard
