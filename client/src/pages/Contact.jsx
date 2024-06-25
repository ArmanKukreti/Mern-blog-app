import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Contact = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [phone, setPhone] = useState('')
      const [category, setCategory] = useState('General inquires')
      const [query, setQuery] = useState('')
      const [attachment, setAttachment] = useState('')
      const [error, setError] = useState('')

      const navigate = useNavigate()

      const QUERY_CATEGORIES = ["General inquires", "Blog Posting", "New listing", "Advertisement", "Business proposal", "Other topic"]


      const handleSubmit = async (e) => {
        e.preventDefault()

        const postData = new FormData()
        postData.set('name', name)
        postData.set('email', email)
        postData.set('phone', phone)
        postData.set('category', category)
        postData.set('query', query)
        postData.append('attachment', attachment)

        try {
          axios.defaults.withCredentials = true;
          const response = await axios.post(`https://mern-blog-app-backend-f8zg.onrender.com/api/contact/`, postData)

          if(response.status === 201) {
            navigate(0)
          }

        } catch (error) {
          if (error.response && error.response.data && error.response.data.error) {
            setError(error.response.data.error);
          } else {
            setError("An error occurred while posting query. Please try again later.");
          }
        }
      }

    
      return (
        <section className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.</p>
            <form className="form login__form" onSubmit={handleSubmit}>
              {error && <p className="form__error-message">{error}</p>}
              <input type="text" name="name" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} autoFocus/>
              <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <PhoneInput country={'us'} value={phone} onChange={(value) => setPhone(value)} inputProps={{required: true}}/>
              <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {
                  QUERY_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)
                }
              </select>
              <textarea name="query" value={query} placeholder='Query' rows={8} onChange={(e) => setQuery(e.target.value)}></textarea>
              <input type="file" onChange={e => setAttachment(e.target.files[0])} accept='png jpg jpeg'/>
              <button type='submit' className='btn primary'>Send</button>
            </form>
          </div>
        </section>
      )
}

export default Contact
