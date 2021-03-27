import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Error errorMessage="Tortellini lorem tortellini lorem tortellini lorem tortellini lorem" />
    </BrowserRouter>
  );
};

export default App;
