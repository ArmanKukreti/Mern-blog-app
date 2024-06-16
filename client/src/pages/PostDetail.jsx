import React, { useContext, useEffect, useState } from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import DeletePost from './DeletePost'
import Loader from '../Components/Loader'
import axios from 'axios'

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const {currentUser} = useContext(UserContext)


  useEffect(() => {
    const getPost = async() => {
      setIsLoading(true)

      try {
        const response = await axios.get(`/api/posts/${id}`)
        setPost(response?.data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false) 
      }
    }

    getPost()
  }, [])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <section className="post-detail">
      {error && <p className='error'>{error}</p>}

      {post && <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          {currentUser?._id == post?.creator && <div className="post-detail__buttons">
            <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
            <DeletePost postId={id}/>
          </div>}
        </div>

        <h1>{post?.title}</h1>
        
        <div className="post-detail__thumbnail">
          {post?.thumbnail && <img src={post.thumbnail.url} alt="Thumbnail" />}
        </div>
        <p dangerouslySetInnerHTML={{__html: post?.description}}></p>
      </div>}
    </section>
  )
}

export default PostDetail
