import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, thumbnail, category, title, desc, authorID, createdAt}) => {
    const shortDesc = desc.length > 145 ? desc.substr(0, 145) + '...' : desc;
    const shortTitle = desc.length > 30 ? title.substr(0, 30) + '...' : title;

  return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt="Thumbnail" />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{shortTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{__html: shortDesc}}></p>
            <div className="post__footer">
                <PostAuthor authorID={authorID} createdAt={createdAt}/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
