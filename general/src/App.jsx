import { useState } from 'react'
import CommentForm from '../components/comment_form'
import CommentView from '../components/comment_view'

import './App.css'


function App() {


  return (
    <div id='container'>
      <h1>Comment Section</h1>
      <CommentForm></CommentForm>
      <hr />
      <CommentView ></CommentView>
    </div>
  )
}

export default App
