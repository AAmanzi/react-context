export const fetchPosts = () =>
  fetch("http://localhost:5000/posts").then((response) => {
    return response.json();
  });

export const fetchPostDetails = (postId) =>
  fetch(`http://localhost:5000/posts/${postId}`).then((response) => {
    return response.json();
  });

export const createPost = (post) =>
  fetch("http://localhost:5000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const updatePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const deletePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "DELETE",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
