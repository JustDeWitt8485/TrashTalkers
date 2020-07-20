import React, {useContext} from 'react'
import Post from './Post';
import AddPost from './AddPost';
import {PostsContext} from '../providers/PostsProvider'
import {UserContext} from '../providers/UserProvider'

const Posts = () => {
  const posts = useContext(PostsContext)
  const user = useContext(UserContext)
  return (
    <section
    style={{
    display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center'}}
     className="Posts">
      {user && <AddPost user={user} />}
 <br/>
 <br/>
        { posts.map(post => <Post {...post} key={post.id} />)}
    </section>
  )
}

export default Posts;
