import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from 'utils/useFetch'

function PostDetails() {
  const { id } = useParams()
  const history = useHistory()
  const [deleteError, setDeleteError] = React.useState(null)
  const { data, isLoading, error } = useFetch(
    'http://localhost:8080/posts/' + id
  ) // 3 state changes - 3 renders from useFetch

  async function deletePost() {
    setDeleteError(null)
    const response = await fetch('http://localhost:8080/posts/' + id, {
      method: 'DELETE',
    })
    if (!response.ok) setDeleteError(response.statusText)
    history.push('/')
  }

  if (isLoading) {
    return (
      <div className="blog-details">
        <h2>Loading...</h2>
      </div>
    )
  }
  if (error) {
    return (
      <div className="blog-details">
        <h2>
          Oh no! There is an error: <br />
          {error}
        </h2>
      </div>
    )
  }
  const { author, body, title } = data
  return (
    <div className="blog-details">
      <article>
        <h2>{title}</h2>
        <p>Posted by {author}</p>
        <p>{body}</p>
        <button onClick={deletePost}>Delete post</button>
        {deleteError && (
          <p>
            <b>Can't delete the post: {deleteError}</b>
          </p>
        )}
      </article>
    </div>
  )
}

export default PostDetails
