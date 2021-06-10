import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({ posts }) {
  // console.log('BlogList render')
  return (
    <div className="posts">
      {posts.map((post) => {
        const { id, title, author, body } = post
        return (
          <div className="blog-preview" key={id}>
            <Link to={`/post/${id}`}>
              <h2>{title}</h2>
              <p>Written by {author}</p>
              <p>{body}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList
