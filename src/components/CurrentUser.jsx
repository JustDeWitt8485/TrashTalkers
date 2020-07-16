import React from 'react';
import {signOut} from '../firebase'
import moment from 'moment';
import { Card } from 'react-bootstrap'

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <Card style={{
      width:300 +"px", 
      border:2+'px solid black',
      margin: 20+'px'
      }}>
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img className='card-img-top' src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <div className="card-header">{displayName}</div>
          <div className='card-body' className="email">{email}</div>
          <div className="created-at">{moment(createdAt).calendar()}</div>
        </div>
      </div>
      <div>
        <div className='card-footer'>{children}</div>
        <button onClick={ signOut }>Sign Out</button>
      </div>
    </section>
    </Card>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date(),
};

export default CurrentUser;
