import React, {useContext} from 'react'
import Comment from './Comment';
import AddComment from './AddComment';
import {UserContext} from '../providers/UserProvider'
import { Card,  } from 'react-bootstrap'

const Comments = ({ comments, onCreate }) => {
  const user = useContext(UserContext)
  return (
    <Card className="Comments">
      {user && <AddComment onCreate={onCreate} /> }
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </Card>
  )
}

export default Comments;
