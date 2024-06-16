import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            8,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.99,.98,.99,.99)",    // Easing on enter/exit.
}

const PostItem = ({postID, thumbnail, category, title, desc, authorID, createdAt}) => {
    let shortDesc = desc.length > 100 ? desc.substr(0, 100) + '...' : desc;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;

    const stripHtml = (html) => {
        return html.replace(/<\/?[^>]+(>|$)/g, "");
      };

    shortDesc = stripHtml(shortDesc)

  return (
    <Tilt options={defaultOptions}>
    <article className="post">
        <div className="post__thumbnail">
            <img src={`${thumbnail.url}`} alt="Thumbnail" />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h1>{shortTitle}</h1>
            </Link>
            <p dangerouslySetInnerHTML={{__html: shortDesc}}></p>
            <div className="post__footer">
                <PostAuthor authorID={authorID} createdAt={createdAt}/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
    </Tilt>
  )
}

export default PostItem
