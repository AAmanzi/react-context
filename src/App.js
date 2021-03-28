import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import ErrorProvider from "./providers/error";
import PostsProvider from "./providers/posts";

const App = () => {
  return (
    <ErrorProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/posts">
            <PostsProvider>
              <Posts />
            </PostsProvider>
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Error />
      </BrowserRouter>
    </ErrorProvider>
  );
};

export default App;
