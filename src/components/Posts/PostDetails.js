import React from "react";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const post = { id: 1, title: "neki post", author: "neki autor" };

  return (
    <div>
      <h3>Title: {post.title}</h3>
      <p>Id: {post.id}</p>
      <p>Author: {post.author}</p>
      <Link to={`/posts/edit/${post.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default PostDetails;
