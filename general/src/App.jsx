import { useState } from 'react'
import CommentForm from './components/comment_form'
import CommentView from './components/comment_view'

import './App.css'


function App() {

  const [comments, setComments] = useState([])

  const addComment = ({email, comment})=>{
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();
    const commentData = {email, comment, date, id}
    setComments(state => [commentData, ...state])
  }

  return (
    <div id='container'>
      <h1>Comment Section</h1>
      <CommentForm addComment = {addComment} comments={comments}/>
      <hr />
      <div id='comments'>

        {comments.length > 0 ?(
          comments.map( (commentData)=>(
            <CommentView
              key = {commentData.id}
              email = {commentData.email}
              comment = {commentData.comment}
              date = {commentData.date}
            />
          ))
        ):(
          <p>Faça o primeiro comentário!</p>
        )
        }
      </div>
    </div>
  )
}

export default App
