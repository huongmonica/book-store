import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import BookDetails from "./BookDetails";

const Book = ({ book }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Card className="m-2 book-card" border="coral-pink">
      <Card.Body onClick={handleShow}>
        <Card.Title>{book.name}</Card.Title>
        <img src={require(`${book.image}`)} width="100px" alt="book" />
        <Card.Text>{book.author}</Card.Text>
        <Card.Text>
          <span className="text-primary">{book.price} euros</span>
        </Card.Text>
      </Card.Body>

      {
        /* show Book Details if 'show' is true */ show && (
          <BookDetails id={book.id} show={show} setShow={setShow} />
        )
      }
    </Card>
  );
};

export default Book;
