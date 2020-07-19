import React, { Component } from 'react'
import Authentication from './Authentication';
import NavBar from './NavigationBar'
import Posts from './Posts';
import {Switch, Route, Link} from 'react-router-dom'
import  UserProfile  from './UserProfile';
import PostPage from './PostPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut'








class Application extends Component {
  render() {
  return (
    <main 
    className="Application" 
    style={{
      background: "url(https://skinrenewalmarco.com/wp-content/uploads/2016/03/shutterstock_345970301-e1536599252720.jpg) no-repeat center center fixed",
      backgroundSize:'cover',
      height: '100%',
      overflow: 'hidden'
      // height: "500%",
      // width: '100%'
      }}>
      <NavBar />
      <h1>Think Piece</h1>
      {/* <Authentication /> */}
      <Switch>
        <Route exact path="/" component={Authentication}/>
        {/* <Route exact path="/" component={Posts}/> */}
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/profile" component={ UserProfile } />
        <Route exact path="/posts/:id" component={ PostPage } />
        <Route exact path="/signout" component={ SignOut} />
        <Route exact path="/signin" component={ SignIn } />
        <Route exact path="/signup" component={ SignUp } />
      </Switch>
    </main>
  );
}
  
}
export default Application;