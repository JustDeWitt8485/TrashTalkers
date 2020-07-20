import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
// import CurrentUser from './CurrentUser';
// import SignInAndSignUp from './SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';
import './Authentication.css';

const Authentication = ({ loading }) => {
  const user = useContext(UserContext)
  if (loading) return null;

  return (
    <div className='button'>
      <Button 
        href="/signin" 
        variant="outline-info">
          Sign In
      </Button>
      <Button href="/signup" variant="outline-info">Sign Up</Button>
      {/* {user ? <CurrentUser {...user} /> : <SignInAndSignUp />} */}
    </div>
  )
};

export default Authentication;
