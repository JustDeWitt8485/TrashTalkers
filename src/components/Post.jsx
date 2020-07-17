import React, {useContext} from "react";
import moment from "moment";
import { firestore } from "../firebase";
import { Card } from "react-bootstrap";
import {UserContext} from '../providers/UserProvider'
import {Link} from 'react-router-dom'

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false
  // it'll check if the currentuser is equal to the post creater 
  // and if they are the same, allow them to delte the post
  return currentUser.uid === postAuthor.uid
}

const Post = ({ title, content, user, createdAt, stars, comments, id }) => {
  const currentUser = useContext(UserContext)
  const postRef = firestore.doc(`posts/${id}`); ///Needs to be fixed id
  const remove = () => postRef.delete();
  const star = () => postRef.update({ stars: stars + 1 });
  return (
    <Card
      style={{
        width: 400 + "px",
        border: 2 + "px solid black",
        margin: "auto",
      }}
    >
      {/* <article className="Post"> */}
        {/* <div className="Post--content"> */}
          <div className="card-header">
           <Link to={`/posts/${id}`}>
             <h3 style={{marginBottom: -20+"px"}}>
              {title}
              </h3>
            </Link>
            <br />
            <p style={{marginLeft: 10+'px'}}>Posted by {user.displayName}</p>
            <p style={{marginLeft: 10+'px'}}>{moment(createdAt.toDate()).calendar()}</p>
          </div>
          <div className="card-body">{content}</div>
        {/* </div> */}
        <div className="card-footer" type="Post--meta" style={{
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center'
          }}>
          <div>
            {stars}
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {comments}
            <span role="img" aria-label="comments">
              🙊
            </span>
          </div>
          <div>
            <button className="star" onClick={star}>
              Star
            </button>
            {belongsToCurrentUser(currentUser, user) && <button className="delete" onClick={remove}>
              Delete
        </button> }
          </div>
        </div>
      {/* </article> */}
    </Card>
  );
};

Post.defaultProps = {
  title: "An Incredibly Hot Take",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.",
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300",
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Post;
