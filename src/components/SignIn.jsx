import React, { Component } from "react";
import { signInWithGoogle, auth } from "../firebase";
import { Button, Form, Card } from "react-bootstrap";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
<<<<<<< HEAD
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("User is logged in");
      })
      .catch((error) => {
        // console.log("We are in the catch, this is the error : ", error.message);
        this.setState({ errorMessage: error.message });
      });
    this.setState({ email: "", password: "" });
=======
    try {
      auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error(error)
    }

    this.setState({ email: '', password: '' });
>>>>>>> 0bff19a4340f8541d1c391f82f501bac27fb423e
  };

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <Card
<<<<<<< HEAD
        bg="light"
        border="info"
        style={{ width: "28rem", padding: "1rem" }}
      >
=======
        bg='light'
        border="info"
        style={{ width: '28rem', padding: '1rem' }}>
>>>>>>> 0bff19a4340f8541d1c391f82f501bac27fb423e
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
<<<<<<< HEAD
          <Button variant="outline-info" type="submit">
            Sign In
          </Button>

          <Button variant="outline-info" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </Form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
=======
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
>>>>>>> 0bff19a4340f8541d1c391f82f501bac27fb423e
      </Card>
    );
  }
}

export default SignIn;
