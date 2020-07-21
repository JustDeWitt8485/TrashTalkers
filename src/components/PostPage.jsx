import React, {Component} from 'react'
import Post from './Post'
import Comments from './Comments'
import { firestore } from '../firebase'
import { collectsIdsAndDocs } from '../ultilities'
import { withRouter } from 'react-router-dom'
import  withUser  from './withUser'


class PostPage extends Component {
    state = {
        post: null,
        comments: []
    }
    get postId() {
        return this.props.match.params.id
    }
    get postRef() {
        return firestore.doc(`posts/${this.postId}`)
    }
    get commentsRef() {
        return this.postRef.collection('comments')
    }
    unsubscribeFromPosts = null
    unsubscribeFromComments = null
    componentDidMount = () => {
        this.unsubscribeFromPosts = this.postRef.onSnapshot(snapshot => {
            const post = collectsIdsAndDocs(snapshot)
            this.setState({ post })
        })
        this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
            const comments = snapshot.docs.map(collectsIdsAndDocs)
            this.setState({ comments })
        })
    }
    componentWillUnmount = () => {
        this.unsubscribeFromPosts();
        this.unsubscribeFromComments()
    }
    createComment = (comment) => {
        // console.log(comment)
        const user = this.props.user
        try {
        this.commentsRef.add({
            ...comment,
            user
        })
    } catch (error) {
        console.log("We caught an error.")
    }
    }
    render () {
        const { post, comments } = this.state
        return (
            <section
            style={{
                margin: "0 auto",
              }}
            >
                {post && <Post {...post} />}
            <div
            style={{
                width: "40rem",
                height: "auto",
                margin: "auto",
                textAlign: "center",
                padding: "10px",
                backgroundColor: "whitesmoke",
                border: "1px solid black",
                borderRadius: "10px",
                marginLeft: "5px",
              }}
            >
                <Comments 
                    comments={comments} 
                    onCreate={this.createComment}
                    />
                    </div>
            </section>
        )
    }
}
export default withRouter(withUser(PostPage))