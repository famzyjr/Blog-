import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [isPending, setisPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author_name,  content};

    setisPending(true);
    //making an api request

    const endpoint = "https://cw-blog-backend.onrender.com";

    fetch(`${endpoint}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create blog");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New blog added:", data);
        setisPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setisPending(false);
      });
  };
  return (
    <div className="create">
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog author</label>
        <input
          type="text"
          required
          value={author_name}
          onChange={(e) => setAuthor_name(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>adding blog ...</button>}
      </form>
    </div>
  );
}

export default Create;
