import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";  // ✅ Case-sensitive fix


import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Book Library</h1>
      
      {/* Add Book Button */}
      <Link to="/add-book">
        <button style={{ padding: "10px 20px", marginBottom: "20px" }}>Add Book</button>
      </Link>

      {/* List of Books */}
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
