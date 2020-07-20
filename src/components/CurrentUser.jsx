import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CurrentUser = ({ displayName, photoURL, email, createdAt, children, bio, socialMedia, location }) => {
  // console.log(createdAt);
  let defaultImage = require("../images/profile.png");
  return (
    <Card
      style={{
        width: 400 + "px",
        minHeight: 200 + "px",
        border: 2 + "px solid black",
        margin: 20 + "px",
      }}
    >
      <section className="CurrentUser">
        <div className="CurrentUser--profile">
          <img
            className="card-img-top rounded"
            src={photoURL ? photoURL : defaultImage}
            alt={displayName}
            style={{
              width: 300 + "px",
              minHeight: 200 + "px",
              margin: 0 + " auto",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
          <div className="CurrentUser--information">
            <Link to="profile">
              <div className="card-header">{displayName}</div>
            </Link>
            <div className="card-body email">
              {email}
            </div>
            <div className="created-at">
              User since: {moment(createdAt).calendar()}
            </div>
            <div>Bio: {bio ? bio : "Why you need to know?"}</div>
            {/* <div>Following / Followers</div> */}
            <div>From: {location ? location : "Somewhere... out there"}</div>
            {socialMedia && <div>Social Media Links : {socialMedia}</div>}
            {/* <div>Posts</div> */}
            {/* <div>Friends</div> */}
          </div>
        </div>
        <div className="card-footer">
          <Link to="/edityourprofile">Edit your Profile</Link>
        </div>
      </section>
    </Card>
  );
};

// CurrentUser.defaultProps = {
//   displayName: 'Bill Murray',
//   email: 'billmurray@mailinator.com',
//   photoURL: 'https://www.fillmurray.com/300/300',
//   createdAt: new Date(),
// };

export default CurrentUser;
