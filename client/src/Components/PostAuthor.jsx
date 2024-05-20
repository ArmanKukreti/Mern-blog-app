import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import enIN from 'javascript-time-ago/locale/en-IN.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(enIN)

const PostAuthor = ({authorID, createdAt}) => {
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const getAuthor = async() => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/authors/${authorID}`)
        setAuthor(response?.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAuthor();
  }, [])

  return (
    <div className='post__author'>
        <div className="post__author-avatar">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="Avatar" />
        </div>
        <div className="post__author-details">
            <h5>By: {author?.name}</h5>
            <small><ReactTimeAgo date={new Date(createdAt)} locale='en-US'/></small>
        </div>
    </div>
  )
}

export default PostAuthor
