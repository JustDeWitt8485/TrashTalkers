import React, {useContext} from 'react'
import Post from './Post';
import AddPost from './AddPost';
import {PostsContext} from '../providers/PostsProvider'
import {UserContext} from '../providers/UserProvider'

const Posts = () => {
  const posts = useContext(PostsContext)
  const user = useContext(UserContext)
  return (
    <section className="Posts">
      {user && <AddPost user={user} />}
      {/* <PostsContext.Consumer> */}
        {
        // posts => 
        posts.map(post => <Post {...post} key={post.id} />)}
      {/* </PostsContext.Consumer> */}
    </section>
  )
}

export default Posts;
