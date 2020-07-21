import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
// import CurrentUser from './CurrentUser';
// import SignInAndSignUp from './SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';
import './Authentication.css';
import download from '../images/download.jpeg';

const Authentication = ({ loading }) => {
  const user = useContext(UserContext)
  if (loading) return null;

  return (
<<<<<<< HEAD
    <div className='button'>
      <Button 
        href="/signin" 
        variant="outline-info">
          Sign In
      </Button>
      <Button href="/signup" variant="outline-info">Sign Up</Button>
      <Card className='about'>
          <Card.Header>About The Creators</Card.Header>
          <Card.Body>
            The people who were responsible for creating this app were Arianna G Basha, Meagan Ramey, Tracy DeWitt, Chad Thompson, Joshua Luvera, and Leann James. We have put our hearts into this app in hopes of making it great!
          </Card.Body>
          <Card.Footer>We hope you enjoy using our app!</Card.Footer>
        </Card>
    </div>
=======
    <React.Fragment>
      <div className='Application'>
        <div className='row'>
          <div className='column'>
            <h2>Are you in search of somewhere to vent to other likeminded individuals? Look no further!</h2>
            <p>With this app, you can chat virtually with others at no cost!
              <br />
              If you're new to the app, feel free to sign up!
              <br />
              If you're already a member, welcome back!
            </p>
          </div>
          <div className='column'>
            <img src={download} alt="People Talking" />
          </div>
        </div>
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
      </div>
    </React.Fragment>
>>>>>>> 0f7066e52d12c8240c2be0bf6ad8e01152b342bf
  )
};

export default Authentication;
