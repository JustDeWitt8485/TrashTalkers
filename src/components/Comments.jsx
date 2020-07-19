import React, {useContext} from 'react'
import Comment from './Comment';
import AddComment from './AddComment';
import {UserContext} from '../providers/UserProvider'

const Comments = ({ comments, onCreate }) => {
  const user = useContext(UserContext)
  return (
    <section className="Comments">
      {user && <AddComment onCreate={onCreate} /> }
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </section>
  )
}

export default Comments;
