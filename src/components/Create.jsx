import React, { useState } from 'react'
import { useHistory } from 'react-router'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [smtError, setSmtError] = useState(null)

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    setSmtError(null)
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, author }),
    })

    if (!response.ok) setSmtError(response.statusText)
    console.log(response)
    history.push('/')
  }

  return (
    <div className="create">
      <h2>Add a new post</h2>
      {smtError && <h2>Could not add a new post: {smtError}</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post title:</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="text">Post text:</label>
        <textarea
          id="text"
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="author">Author:</label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="jack">Jack</option>
        </select>
        <button type="submit">Add post</button>
      </form>
    </div>
  )
}

export default Create
