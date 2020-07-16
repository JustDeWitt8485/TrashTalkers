import React, { Component } from 'react'
import Authentication from './Authentication';
import NavBar from './NavigationBar'
import Posts from './Posts';









class Application extends Component {
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

  render() {
  return (
    <main className="Application" style={{
      background: "url(https://skinrenewalmarco.com/wp-content/uploads/2016/03/shutterstock_345970301-e1536599252720.jpg) no-repeat center center fixed",
      // backgroundSize: "cover",
      height: "100%"
      }}>
      <NavBar />
      <h1>Think Piece</h1>
      <Authentication />
      <Posts />
    </main>
  );
}
  
}
export default Application;