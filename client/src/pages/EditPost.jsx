import React, { useState, useContext, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'

const EditPost = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [error, setError] = useState('')

  const {currentUser} = useContext(UserContext)

  const navigate = useNavigate()
  const {id} = useParams()
  
  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!currentUser) {
      navigate('/login')
    }
  })

  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Weather"]


  useEffect(() => {
    const getPost = async() => {
      try {
        const response = await axios.get(`/api/posts/${id}`)
        setTitle(response.data.title)

        setDescription(response.data.description)
        setCategory(response.data.category)
        // setThumbnail(response.data.thumbnail)

      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError("An error occurred while editing post. Please try again later.");
        }
      }
    }

    getPost()
  }, [])

  const editPost = async(e) => {
    e.preventDefault()

    const postData = new FormData()
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.append('thumbnail', thumbnail)

    try {
      const response = await axios.patch(`/api/posts/${id}`, postData, {
        withCredentials: true
      })
      if (response.status == 200) {
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
        <h2>Edit Post</h2>
        {error && <p className="form__error-message">{error}</p>}
        <form className="form create-post__form" onSubmit={editPost}>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png jpg jpeg'/>
          <button type="submit" className='btn primary'>Update</button>
        </form>

      </div>
    </section>
  )
}

export default EditPost