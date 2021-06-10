import React from 'react'
import { useParams } from 'react-router'

function PostDetails() {
  const {id} = useParams()
  return (
    <div className="blog-details">
      Post details {id}
    </div>
  )
}

export default PostDetails