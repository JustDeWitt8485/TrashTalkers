import React, { Component } from "react";
import { signInWithGoogle, auth, signInWithFacebook } from "../firebase";
import { Button, Form, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
    redirect: false,
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({ redirect: true });
        console.log("User is logged in");
      })
      .catch((error) => {
        // console.log("We are in the catch, this is the error : ", error.message);
        this.setState({ errorMessage: error.message });
      });
    this.setState({ email: "", password: "" });
    this.setState({ redirect: false });
  };
  render() {
    const { email, password, errorMessage, redirect } = this.state;
    return (
      <>
        <Card
          bg="light"
          border="info"
          style={{ width: "28rem", padding: "1rem", margin: "auto" }}
        >
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
            <Button variant="outline-info" type="submit">
              Sign In
            </Button>

            <Button variant="outline-info" onClick={signInWithGoogle}>
              Sign In With Google
            </Button>
            <Button variant="outline-info" onClick={signInWithFacebook}>
              Sign In With Facebook
            </Button>

            {/* <fb:login-button
            scope="public_profile,email"
            onlogin="checkLoginState();"
          ></fb:login-button> */}
          </Form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {redirect && <Redirect key={auth.getUid()} to={"/posts"} />}
        </Card>
        <Card
          bg="light"
          border="info"
          style={{ width: "28rem", padding: "1rem", margin: "auto" }}
        >
          <Button
            style={{
              width: "26rem",
              height: "auto",
              margin: "auto",
              textAlign: "center",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
              marginLeft: "5px",
            }}
            variant="outline-info"
            href="/signup"
            variant="outline-info"
          >
            Sign Up Instead
          </Button>
        </Card>
      </>
    );
  }
}

export default SignIn;
