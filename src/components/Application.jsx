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
  // moved state = {} to componentWillUnmount = () to Providers


  // state = {
  //   user: null
  // };
  // unsubscribeFromAuth = null;
  // componentDidMount = async () => {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     this.setState({ user })
  //   }); 
  // };

  // componentWillUnmount = () => {
  //   this.unsubscribeFromAuth();
  // };

  // handleCreate = async post => {
  //   // const { posts } = this.state;
  //    firestore.collection('posts').add(post)
  //   // const doc = await docRef.get();
  //   // const newPost = collectsIdsAndDocs(doc)
  //   // this.setState({ posts: [newPost, ...posts] });
  // };

  // handleRemove = async id => {
  //   // const allPosts = this.state.posts;
  //   firestore.doc(`posts/${id}`).delete();
  //   // console.log(id)
  //   // const posts = allPosts.filter(post => post.id !== id);
  //   // this.setState({posts});
  // }

  // render() {
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
        <Route exact path="/profile" component={ ProfilePage } />
        <Route exact path="/posts/:id" component={ PostPage } />
        <Route exact path="/signout" component={ SignOut} />
        <Route exact path="/signin" component={ SignIn } />
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/edityourprofile" component={() => < UserProfile {...user}/>} />
        <Route path="*" component={() => <NotFound />} />
      </Switch>
    </main>
  );
}
  
// }
export default Application;