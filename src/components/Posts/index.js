import React from "react";
import { Switch, Route } from "react-router-dom";

import PostList from "./PostList";
import PostAdd from "./PostAdd";
import PostDetails from "./PostDetails";
import PostEdit from "./PostEdit";

const Posts = () => {
  return (
    <Switch>
      <Route exact path="/posts">
        <PostList />
      </Route>
      <Route exact path="/posts/add">
        <PostAdd />
      </Route>
      <Route exact path="/posts/:id">
        <PostDetails />
      </Route>
      <Route exact path="/posts/edit/:id">
        <PostEdit />
      </Route>
    </Switch>
  );
};

export default Posts;
