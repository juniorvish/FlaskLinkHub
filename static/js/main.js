document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const postForm = document.getElementById("post-form");
  const commentForm = document.getElementById("comment-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    register();
  });

  postForm.addEventListener("submit", (event) => {
    event.preventDefault();
    create_post();
  });

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    create_comment();
  });
});

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.login_error) {
    document.getElementById("login_error").innerText = data.login_error;
  } else {
    window.location.href = "/";
  }
}

async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.register_error) {
    document.getElementById("register_error").innerText = data.register_error;
  } else {
    window.location.href = "/login";
  }
}

async function create_post() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const subreddit_id = document.getElementById("subreddit_id").value;

  const response = await fetch("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, subreddit_id }),
  });

  const data = await response.json();

  if (data.post_error) {
    document.getElementById("post_error").innerText = data.post_error;
  } else {
    window.location.href = `/subreddit/${subreddit_id}`;
  }
}

async function create_comment() {
  const content = document.getElementById("content").value;
  const post_id = document.getElementById("post_id").value;

  const response = await fetch("/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, post_id }),
  });

  const data = await response.json();

  if (data.comment_error) {
    document.getElementById("comment_error").innerText = data.comment_error;
  } else {
    window.location.reload();
  }
}