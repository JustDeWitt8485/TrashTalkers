import React, { Component } from 'react';
import { auth } from '../firebase';
import { Button, Form, Card } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    errorMessage: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, displayName } = this.state;
    try {

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password)

        user.updateProfile({ displayName })
    } catch (error){
      console.error(error)
      this.setState({errorMessage: error.message})
    }

    this.setState({ displayName: '', email: '', password: '' });
  };

  render() {
    const { displayName, email, password, errorMessage } = this.state;

    return (
      <Card
      padding = '3rem'
      bg='light'
      border="info"
      style={{width:'18rem', padding:'1rem', margin:'auto'}}>
      <Form className="SignUp" onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <Form.Group controlId=" formBasicDisplay">
        <Form.Label>What Would Like To Be Called</Form.Label> <br/>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={this.handleChange}
        /></Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label> Favorite Email Adrress </Form.Label><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> <br/>
        <input
          type="password"
          name="password"
          placeholder="6 characters or longer"
          value={password}
          onChange={this.handleChange}
        />
        </Form.Group>
        <Button 
        variant="outline-info"
        type="submit" 
        value="Sign Up"
        >
          Sign Up
          </Button> 
      </Form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Card>
    );
  }
}

export default SignUp;
