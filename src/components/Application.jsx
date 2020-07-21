import React, { useContext } from 'react'
import Authentication from './Authentication';
import NavBar from './NavigationBar'
import Posts from './Posts';
import {Switch, Route } from 'react-router-dom'
import  UserProfile  from './UserProfile';
import PostPage from './PostPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut'
import ProfilePage from './ProfilePage';
import {UserContext} from '../providers/UserProvider'
import  NotFound  from './NotFound'
import './style.css'




const Application = () => {
  const user = useContext(UserContext)

  return (
    <main 
    className="Application" 
    style={{
      background: "url(https://i.pinimg.com/564x/93/74/13/93741395307093f31463dcb4a0ffff14.jpg)",
      backgroundSize:'cover',
      height: '100%',
      width: '100%',
      backgroundPosition: 'center'
      }}>
      <NavBar />
      <h1>Power Talk</h1>
      {/* <Authentication /> */}
      <Switch>
        <Route 
        exact path="/" 
        component={Authentication}
        />
        <Route 
        exact path="/posts" 
        component={Posts}
        />
        <Route 
        exact path="/profile" 
        component={ ProfilePage } 
        />
        <Route 
        exact path="/posts/:id" 
        component={ PostPage } 
        />
        <Route 
        exact path="/signout" 
        component={ SignOut} 
        />
        <Route 
        exact path="/signin" 
        component={ SignIn } 
        />
        <Route 
        exact path="/signup" 
        component={ SignUp } 
        />
        <Route 
        exact path="/edityourprofile" 
        component={() => < UserProfile {...user}/>} 
        />
        <Route 
        path="*" 
        component={() => <NotFound />} 
        />
      </Switch>
      <div>
<<<<<<< HEAD
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
=======
         {/* <br/>
>>>>>>> 0f7066e52d12c8240c2be0bf6ad8e01152b342bf
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}
      </div>
    </main>
  );
}
  
// }
export default Application;