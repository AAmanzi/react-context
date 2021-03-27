import React from "react";

import PostForm from "./PostForm";

const PostAdd = () => {
  const handleCreatePost = (postToAdd) => {
    console.log(postToAdd);
  };

  return <PostForm onSubmit={handleCreatePost} />;
};

export default PostAdd;
