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





const Application = () => {
  const user = useContext(UserContext)

  return (
    <main 
    className="Application" 
    style={{
      background: "url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed",
      backgroundSize:'cover',
      height: '100%',
      overflow: 'hidden'
      }}>
      <NavBar />
      <h1>Think Piece</h1>
      {/* <Authentication /> */}
      <Switch>
        <Route exact path="/" component={Authentication}/>
        {/* <Route exact path="/" component={Posts}/> */}
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/profile" component={ ProfilePage } />
        <Route exact path="/posts/:id" component={ PostPage } />
        <Route exact path="/signout" component={ SignOut} />
        <Route exact path="/signin" component={ SignIn } />
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/edityourprofile" component={() => < UserProfile {...user}/>} />
        <Route path="*" component={() => <NotFound />} />
      </Switch>
      <div>
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
        <br/>
        <br/>
      </div>
    </main>
  );
}
  
// }
export default Application;