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
    <React.Fragment>
    <h2>Are you in search of somewhere to vent to other likeminded individuals? Look no further!</h2>
    <div className='button'>      
      <Button 
        href="/signin" 
        variant="outline-info">
          Sign In
      </Button>
      <Button href="/signup" variant="outline-info">Sign Up</Button>
 
      {/* {user ? <CurrentUser {...user} /> : <SignInAndSignUp />} */}
      <Card className='about'>
          <Card.Header>About The Creators</Card.Header>
          <Card.Body>
            The people who were responsible for creating this app were Arianna G Basha, Meagan Ramey, Tracy DeWitt, Chad Thompson, Joshua Luvera, and Leann James. We have put our hearts into this app in hopes of making it great!
          </Card.Body>
          <Card.Footer>We hope you enjoy using our app!</Card.Footer>
        </Card>
    </div>
    </React.Fragment>
  )
};

export default Authentication;
