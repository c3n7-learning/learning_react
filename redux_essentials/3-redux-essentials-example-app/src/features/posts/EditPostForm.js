import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostCliecked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          id="postTitle"
          type="text"
          name="postTitle"
          placeholder="What is on your mind"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          cols="30"
          rows="10"
          value={content}
          onChange={onContentChanged}
        ></textarea>
      </form>
      <button type="button" onClick={onSavePostCliecked}>
        Save Post
      </button>
    </section>
  )
}
