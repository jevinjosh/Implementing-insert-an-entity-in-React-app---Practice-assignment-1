import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Added:", formData);

    // Redirect back to Home page after submission
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Book Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="coverImage"
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
