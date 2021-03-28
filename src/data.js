const FAIL_PERCENTAGE = 0;

const shouldFail = () => {
  const random = Math.floor(Math.random() * 100);

  return random < FAIL_PERCENTAGE;
};

export const fetchPosts = () =>
  fetch("http://localhost:5000/posts").then((response) => {
    if (shouldFail()) {
      throw new Error("error");
    }

    return response.json();
  });

export const fetchPostDetails = (postId) =>
  fetch(`http://localhost:5000/posts/${postId}`).then((response) => {
    if (shouldFail()) {
      throw new Error("error");
    }

    return response.json();
  });

export const fetchCreatePost = (post) =>
  fetch("http://localhost:5000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (shouldFail()) {
      throw new Error("error");
    }

    return response.json();
  });

export const updatePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (shouldFail()) {
      throw new Error("error");
    }

    return response.json();
  });

export const deletePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "DELETE",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (shouldFail()) {
      throw new Error("error");
    }

    return response.json();
  });
