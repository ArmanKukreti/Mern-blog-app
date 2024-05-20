import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [error, setError] = useState('')

  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser, navigate])

  const createPost = async (e) => {
    e.preventDefault()

    const postData = new FormData()
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.append('thumbnail', thumbnail)

    try {
      const response = await axios.post(`/api/posts/create`, postData, {
        withCredentials: true
      })
      if (response.status == 201) {
        return navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while creating post. Please try again later.");
      }
    }
  }

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {error && <p className="form__error-message">{error}</p>}
        <form className="form create-post__form" onSubmit={createPost}>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Art">Art</option>
            <option value="Investment">Investment</option>
            <option value="Weather">Weather</option>
          </select>

          <ReactQuill value={description} onChange={setDescription} />

          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='image/*' />

          <button type="submit" className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost