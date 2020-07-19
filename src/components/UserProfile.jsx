import React, { useState, useContext } from "react";
import { auth, firestore, storage } from "../firebase";
import moment from "moment";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfile = (user) => {
  // console.log(user)
  const { displayName, photoURL, email, createdAt } = user;
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
    event.preventDefault();
    let newState = { ...state };
    let file = state.imageInput.current.files[0];
    if (state.newDisplayName === "") {
      delete newState.newDisplayName;
    }
    if (newState.newDisplayName) {
      // console.log("in displayname")
      // console.log(userRef, state)
      // console.log(user)
      userRef.update({ displayName: newState.newDisplayName });
    }
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
  };
  const goHome = (event) => {
    redirectSetState((redirect = !redirect));
  };
  let { newDisplayName, newBio, newEmail, newLocation, newSocialMedia } = state;
  let bio,
    location,
    socialMedia = null;
  state.imageInput = React.createRef();
  state.imageExpression = React.createRef();
  return (
    <>
      <Card
        style={{
          width: 400 + "px",
          minHeight: 200 + "px",
          border: 2 + "px solid black",
          margin: 20 + "px",
        }}
      >
        <section className="UserProfile">
          <div className="CurrentUser--profile">
            {photoURL && (
              <img
                className="card-img-top rounded"
                src={photoURL}
                alt={displayName}
                style={{
                  width: 300 + "px",
                  minHeight: 200 + "px",
                  margin: 0 + " auto",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
              />
            )}
            <form onSubmit={handleSubmit}>
              <label for="imageInput">Update your profile picture:</label>
              <input
                type="file"
                id="imageInput"
                // ref={(ref) => (imageInput = ref)}
                ref={state.imageInput}
              />
              <label for="imageInput">
                Add more pictures to express who you are!
              </label>
              <input
                type="file"
                id="imageExpression"
                // ref={(ref) => (imageInput = ref)}
                ref={state.imageExpression}
              />
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
                  <div>Bio: {bio ? { bio } : ""}</div>
                  <label for="newBio">Update your bio:</label>
                  <input
                    type="text"
                    value={newBio}
                    id="newBio"
                    name="newBio"
                    onChange={handleChange}
                    placeholder="Bio"
                  />
                  <div>Where are you from? {location ? { location } : ""}</div>
                  <label for="newLocation">Update your location:</label>
                  <input
                    type="text"
                    value={newLocation}
                    id="newLocation"
                    name="newLocation"
                    onChange={handleChange}
                    placeholder="Location"
                  />
                  <div>
                    Your social media: {socialMedia ? { socialMedia } : ""}
                  </div>
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
              <input className="update" type="submit" />
            </form>
          </div>
        </section>
      </Card>
    </>
  );
};
export default UserProfile;
