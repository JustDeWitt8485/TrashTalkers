import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../firebase';
import { Button, Form, Card } from 'react-bootstrap';


class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password} = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password)
    } catch (error){
      console.error(error)
    }

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Card
      bg='light'
      border="info"
      style={{width:'28rem', padding:'1rem'}}>
      <Form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <Button
        variant="outline-info" 
        type="submit"
        >
           Sign In 
        </Button>


        <Button 
        variant="outline-info" 
        onClick={signInWithGoogle}
        >
          Sign In With Google
          </Button>
      </Form>
      </Card>
    );
  }
}

export default SignIn;
