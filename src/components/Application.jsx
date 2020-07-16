import React, { Component } from 'react'
import Authentication from './Authentication';
import {firestore, auth} from '../firebase'


import Posts from './Posts';
import { collectsIdsAndDocs } from '../ultilities';

class Application extends Component {
  state = {
    posts: [], 
    user: null
  };
  

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFireStore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectsIdsAndDocs);
      this.setState({posts})
    });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({user})
    });
 
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  } 

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
  const { posts, user } = this.state;

  return (
    <main className="Application">
      <h1>Power Talkers</h1>
      <Authentication user={user} />
      <Posts posts={posts} onCreate={this.handleCreate} />
    </main>
  );
}
  
}
export default Application;
