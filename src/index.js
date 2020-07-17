import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Application from "./components/Application";
import PostsProvider from "./providers/PostsProvider";
import UserProvider from "./providers/UserProvider";

render(
  <Router>
    <UserProvider>
      <PostsProvider>
        <Application />
      </PostsProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
