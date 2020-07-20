import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
// import CurrentUser from './CurrentUser';
// import SignInAndSignUp from './SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';
import './Authentication.css';

const Authentication = ({ loading }) => {
  const user = useContext(UserContext)
  if (loading) return null;

  return (
    <div>
      <Button href="/signin">Sign In</Button>
      <Button href="/signup">Sign Up</Button>
      {/* {user ? <CurrentUser {...user} /> : <SignInAndSignUp />} */}
    </div>
  )
};

export default Authentication;
