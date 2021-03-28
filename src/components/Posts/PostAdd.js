import React, { useState } from "react";
import { Redirect } from "react-router";

import { useCreatePost } from "../../providers/posts/hooks";
import Loading from "../Loading";
import PostForm from "./PostForm";

const PostAdd = () => {
  const [newPostId, setNewPostId] = useState(null);
  const [createPost, { loading }] = useCreatePost();

  const handleCreatePost = (postToAdd) => {
    createPost(postToAdd).then((post) => {
      setNewPostId(post.id);
    });
  };

  if (newPostId) {
    return <Redirect to={`posts/${newPostId}`} />;
  }

  if (loading) {
    return <Loading />;
  }

  return <PostForm onSubmit={handleCreatePost} />;
};

export default PostAdd;
