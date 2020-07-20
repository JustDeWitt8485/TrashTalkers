import React, { useState } from "react";
import { auth, firestore, storage } from "../firebase";
import { Redirect } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfile = (user) => {
  // console.log(user)
  const {
    uid,
    displayName,
    photoURL,
    email,
    bio,
    location,
    socialMedia,
  } = user;
  let defaultImage = require("../images/profile.png");
  const [state, setState] = useState({
    newDisplayName: "",
    imageInput: null,
    newEmail: "",
    newBio: "",
    newLocation: "",
    newSocialMedia: "",
  });
  let [redirect, redirectSetState] = useState(false);
  const userRef = firestore.doc(`users/${user.uid}`);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    // console.log(state);
    event.preventDefault();
    let file = state.imageInput.current.files[0];
    if (state.newDisplayName !== "") {
      // delete newState.newDisplayName;
      userRef.update({ displayName: state.newDisplayName });
    }
    if (state.newEmail !== "") {
      // delete newState.newEmail;
      userRef.update({ email: state.newEmail });
    }
    if (state.newBio !== "") {
      // delete newState.newBio;
      userRef.update({ bio: state.newBio });
    }
    if (state.newLocation !== "") {
      // delete newState.newLocation;
      userRef.update({ location: state.newLocation });
    }
    if (state.newSocialMedia !== "") {
      // delete newState.newSocialMedia;
      userRef.update({ socialMedia: state.newSocialMedia });
    }
    // if (newState) {
    //   delete newState.imageInput
    //   console.log(newState)
    //   console.log("in displayname")
    //   // console.log(userRef, state)
    //   // console.log(user)
    //   userRef.update({ newState });
    // }
    if (file) {
      // goes to storage; gets all profiles; only allows changes to the file with user's uid
      // console.log("in imageinput")
      storage
        .ref()
        .child("userProfiles")
        .child(auth.getUid())
        .child(file.name)
        .put(file)
        .then((response) => response.ref.getDownloadURL())
        .then((photoURL) => userRef.update({ photoURL }));
    }
    redirectSetState((redirect = !redirect));
  };
  const goHome = (event) => {
    redirectSetState((redirect = !redirect));
  };
  let { newDisplayName, newBio, newEmail, newLocation, newSocialMedia } = state;
  state.imageInput = React.createRef();
  // state.imageExpression = React.createRef();
  return (
    <>
      <Card
        padding="3rem"
        bg="light"
        border="info"
        style={{ width: "32rem", padding: "1rem", margin: "auto" }}
      >
        <section className="UserProfile">
          <div className="CurrentUser--profile">
            {photoURL && (
              <img
                className="card-img-top rounded"
                src={photoURL}
                alt={displayName}
                style={{
                  width: "30rem",
                  minHeight: 200 + "px",
                  margin: " auto",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
              />
            )}
            <Form onSubmit={handleSubmit}>
              <label for="imageInput">Update your profile picture:</label>
              <Button
                as="input"
                variant="outline-info"
                type="file"
                id="imageInput"
                // ref={(ref) => (imageInput = ref)}
                ref={state.imageInput}
              />
              {/* <label for="imageInput">
                Add more pictures to express who you are!
              </label>
              <input
                type="file"
                id="imageExpression"
                // ref={(ref) => (imageInput = ref)}
                ref={state.imageExpression}
              /> */}
              <div className="CurrentUser--information">
                <div className="card-body">
                  <div>Display Name: {displayName}</div>
                  <label for="newDisplayName">Update your display name:</label>
                  <input
                    type="text"
                    value={newDisplayName}
                    id="newDisplayName"
                    name="newDisplayName"
                    onChange={handleChange}
                    placeholder="Display Name"
                  />
                  <div>Email: {email}</div>
                  <label for="newEmail">Update your email:</label>
                  <input
                    type="email"
                    value={newEmail}
                    id="newEmail"
                    name="newEmail"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <div>Bio: {bio ? bio : ""}</div>
                  <label for="newBio">Update your bio:</label>
                  <input
                    type="text"
                    value={newBio}
                    id="newBio"
                    name="newBio"
                    onChange={handleChange}
                    placeholder="Bio"
                  />
                  <div>Where are you from? {location ? location : ""}</div>
                  <label for="newLocation">Update your location:</label>
                  <input
                    type="text"
                    value={newLocation}
                    id="newLocation"
                    name="newLocation"
                    onChange={handleChange}
                    placeholder="Location"
                  />
                  <div>Your social media: {socialMedia ? socialMedia : ""}</div>
                  <label for="newSocialMedia">Other social medias: </label>
                  <input
                    type="text"
                    value={newSocialMedia}
                    id="newSocialMedia"
                    name="newSocialMedia"
                    onChange={handleChange}
                    placeholder="Facebook / Instagram / Twitter "
                  />
                </div>
              </div>
              <Button
                as="input"
                variant="outline-info"
                className="update"
                type="submit"
              />
            </Form>
            <button onClick={goHome}>Discard Changes</button>
          </div>
          {/* {loading && <Loader />} */}
          {/* {error && (
            <p style={{ color: "red" }}> */}
          {/* Sorry, that didn't go through. 
Please make sure the username, password, and display name are between 3 and 30 characters, and then try again. */}
          {/* {error}
            </p>
          )} */}
          {redirect && <Redirect key={uid} to={"/profile"} />}
        </section>
      </Card>
    </>
  );
};
export default UserProfile;
