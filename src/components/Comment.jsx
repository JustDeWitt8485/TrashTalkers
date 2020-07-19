import React, {useContext} from 'react';
import { Card } from 'react-bootstrap'
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
    <Card className="Comment">
      <span className="Comment--author">{user.displayName ? user.displayName : "Anon"+Math.floor(Math.random()*1000)}</span>
      <span className="Comment--value">{value}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>
      {belongsToCurrentUser(currentUser, user) && <button className="delete" onClick={remove}>
            Delete
        </button>}
    </Card>
    {errorMessage && 
      <>
    <p style={{ color: "red" }}>{errorMessage}</p>
    <p>good work</p>
    </>}
    </>
  );
});

// Comment.defaultProps = {
//   title: 'An Incredibly Hot Take',
//   content:
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
//   user: {
//     displayName: 'Bill Murray',
//     email: 'billmurray@mailinator.com',
//     photoURL: 'https://www.fillmurray.com/300/300',
//   },
//   createdAt: new Date(),
// };

export default Comment;
