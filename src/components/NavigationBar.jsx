import React, { useContext } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { UserContext } from '../providers/UserProvider';
import { signOut } from '../firebase'

const NavigationBar = () => {
  const currentUser = useContext(UserContext)
  return (
    <>
  {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Think Piece</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Think Piece</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar> */}

  {/* <br /> */}
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Power Talk</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {currentUser && <Nav.Link href="/profile">Your Profile</Nav.Link>}
      <Nav.Link href="/posts">Posts Feed</Nav.Link>
      {currentUser ? 
          <Nav.Link  href="/signout" onClick={ signOut }>Sign out</Nav.Link>
          : <>
          <Nav.Link href="/signin">Sign in</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
          </> }
    </Nav>
  </Navbar>
</>
  );
}
export default NavigationBar;