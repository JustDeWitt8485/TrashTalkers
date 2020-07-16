import React, { Component, createContext } from "react";
import { auth, createUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (user) {
    //     const userDocument = await createUserDocument(user);
    //     return this.setState({ user: userDocument.data() });
    //   }
    //   this.setState({ user: null });
    const user = await createUserDocument(userAuth)
    console.log(user)
    this.setState({user})
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };
  render () {
      const {user} = this.state
      const {children} = this.props
      return (
          <UserContext.Provider value={user}>
              {children}
          </UserContext.Provider>
      )
  }
}
export default UserProvider;
