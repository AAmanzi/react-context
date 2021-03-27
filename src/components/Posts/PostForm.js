import React, { useState } from "react";

const PostForm = ({ onSubmit, post }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");

  const handleChange = (handler) => (event) => {
    handler(event.target.value);
  };

  const handleSubmit = () => {
    if (!(title && author)) {
      return;
    }

    const postToSubmit = post ? { ...post, title, author } : { title, author };

    onSubmit(postToSubmit);
  };

  return (
    <div>
      <label>title</label>
      <input value={title} onChange={handleChange(setTitle)} />
      <label>author</label>
      <input value={author} onChange={handleChange(setAuthor)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default PostForm;
