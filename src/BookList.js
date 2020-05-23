import React,{ useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";

const BookList = () => {
  const [books] = useContext(BookContext);
  
  return (
    <div className="book-list">
      <h3>Book list</h3>
        <div className="d-flex flex-wrap justify-content-around">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
    </div>
  );
};

export default BookList;
