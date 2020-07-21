import React, { Component } from 'react';
import { firestore, auth } from '../firebase'
import { Card, Form, Button } from "react-bootstrap";
import { RSA_PKCS1_PSS_PADDING } from 'constants';
class AddPost extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();


    const { title, content } = this.state;
    const { uid, displayName, email, photoURL, bio, location, socialMedia } = auth.currentUser || {};


    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
        bio: '',
        location: '',
        socialMedia: '',
      },
      favorites: 0,
      comments: 0,
      stars: 0,
      createdAt: new Date(),
    }

    firestore.collection('posts').add(post)

    this.setState({ title: '', content: '' });
  };


  render() {
    const { title, content } = this.state;
    return (
      <React.Fragment>
        <Card
        bg='light'
        style={{
        borderRadius:"25px"}}
        variant="outline-info">
      <Form style={{
        // boxSizing:"border-box",
        width:"40rem",
        display:"flex",
        flexDirection:"column",
      }}
      // style={{margin:"auto", position:"absolute", left:"40%", }}
      onSubmit={this.handleSubmit} className="AddPost">
        <input
          style={{
            borderRadius:"25px",
            margin:"1rem",
            borderStyle:'ridge',
            borderColor: 'teal',
            borderWidth: '2px',
            padding: '.5rem',
            fontFamily: "Sue Ellen Francis co, cursive",
            fontSize:"150"
          }}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
        style={{
          height:"20rem",
          borderRadius:"25px",
          margin:"1rem",
          borderStyle:'ridge',
          borderColor: 'teal',
          borderWidth: '2px',
          padding:'.5rem',
          fontFamily: "Sue Ellen Francis co, cursive",
          fontSize:"150%"
        }}
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        />
        <Button
        style={{
        width:"15%",
        borderRadius:"25px",
        margin:'.5rem',
        padding:'.25rem'}}
        variant="outline-info"
        as ="input" 
        className="create" 
        type="submit" 
        value="Create Post" />
      </Form>
      </Card>
      </React.Fragment>
    );
  }
}

export default AddPost;
