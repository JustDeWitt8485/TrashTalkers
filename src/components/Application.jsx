import React, { Component } from 'react';



import Posts from './Posts';
import Authentication from './Authentication';
// import { auth } from 'firebase';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

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

handleCreate = post => {
  const { posts } = this.state;
  this.setState({ posts: [post, ...posts] });
};

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
