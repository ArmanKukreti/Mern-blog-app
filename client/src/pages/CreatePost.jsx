import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'


const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('News')
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

  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{"code-block": true}],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 
    'code-block',
  ]

  const createPost = async (e) => {
    e.preventDefault()

    const postData = new FormData()
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.append('thumbnail', thumbnail)

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`https://mern-blog-app-backend-f8zg.onrender.com/api/posts/create`, postData,)
      if (response.status == 201) {
        return navigate('/home')
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
            <option value="News">News</option>
            <option value="NFTs">NFTs</option>
            <option value="Research">Research</option>
            <option value="Lunching pool">Lunching pool</option>
            <option value="Airdrop">Airdrop</option>
            <option value="Ventures">Ventures</option>
            <option value="Market updates">Market updates</option>
            <option value="Tips and Tutorials">Tips and Tutorials</option>
            <option value="Earn free crypto">Earn free crypto</option>
            <option value="Web3">Web3</option>
          </select>

          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />

          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='image/*' />

          <button type="submit" className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost