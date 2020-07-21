import React, {useContext} from 'react';
import { Card, Button } from 'react-bootstrap'
import moment from 'moment';
import { UserContext } from '../providers/UserProvider'
import { firestore } from '../firebase';
import { withRouter } from 'react-router-dom'

const belongsToCurrentUser = (currentUser, commentAuthor) => {
  if (!currentUser) return false
  // it'll check if the currentuser is equal to the post creater 
  // and if they are the same, allow them to delte the post
  return currentUser.uid === commentAuthor.uid
}


const Comment = withRouter(({ value, user, createdAt, errorMessage, id, match }) => {
  const currentUser = useContext(UserContext)
  const commentRef = firestore.doc(`posts/${match.params.id}/comments/${id}`)
  const remove = () => commentRef.delete();
  return (
    <>
    <Card
      padding = '3rem'
      bg='light'
      border="info"
      style={{
        width:'80%',
        margin:"1rem",
        fontSize:"150%",}}
         className="Comment">
      <span className="Comment--author">{user.displayName ? user.displayName : "Anon"+Math.floor(Math.random()*1000)}</span>
      <span className="Comment--value">{value}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>
      {belongsToCurrentUser(currentUser, user) && 
      <Button
      style={{
        // width:"15%",
        borderRadius:"25px",
        margin:'.5rem',
        padding:'.25rem',
        fontSize:"100%"}}
        variant="outline-info"
       className="delete" onClick={remove}>
            Delete
        </Button>}
    </Card>

    {errorMessage && 
      <>
    <p style={{ color: "red" }}>{errorMessage}</p>
    <p>good work</p>
    </>}
    </>
  );
});
export default Comment;
