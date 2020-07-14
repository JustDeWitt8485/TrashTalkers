import React, { Component } from 'react'
import Authentication from './Authentication';
import {firestore} from '../firebase'


import Posts from './Posts';
import { collectsIdsAndDocs } from '../ultilities';

class Application extends Component {
  state = {
    posts: []
  };
  
  unsubscribe = null;

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  // componentDidMount = async () => {
  //this.unsubscribeFromFirestore = firestore.collection('posts')
  //const posts = snapshot.docs.map(collectIdsAndDocs)
  //console.log({ posts })
  // this.setState({ posts })
  // }

  // this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>);
  // this.setState({user})



  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectsIdsAndDocs);
      this.setState({posts})
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
      <h1>Think Piece</h1>
      <Authentication user={user} />
      <Posts posts={posts} onCreate={this.handleCreate} />
    </main>
  );
}
  
}
export default Application;
