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
    componentDidMount = async () => {
        this.unsubscribeFromPosts = await this.postRef.onSnapshot(snapshot => {
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
        const user = this.props.user
        this.commentsRef.add({
            ...comment,
            user
        })
    }
    render () {
        const { post, comments } = this.state
        // this console.log should show history, match, props, 
        // ANNNDDD the user's inforamation O.o
        console.log(this.props)
        return (
            <section>
                {post && <Post {...post} />}
                <Comments 
                    comments={comments} 
                    onCreate={this.createComment}
                    />
            </section>
        )
    }
}
export default withRouter(withUser(PostPage))