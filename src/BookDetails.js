import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { CartContext } from "./CartContext";
import { BookContext } from "./BookContext";

const BookDetails = ({ id, show, setShow }) => {
  // render full details of the book by using id
  // TODO: Replace this with a http request later
  const [books] = useContext(BookContext);
  const book = books.find((book) => book.id === id);
  // notification state
  const [added, setAdded] = useState(false);
  // Add to cart
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const existedItem = cart.findIndex((item) => item.id === id);
    if (existedItem !== -1) {
      // increase quantity if book has already been added to cart
      // update existed book's quantity in array --> setCart
      cart[existedItem]["quantity"]++;
      setCart((items) => [...items]);
    } else {
      // add new item and its quantity to cart if it's not yet existed
      book.quantity = 1;
      setCart((items) => [...items, book]);
    }
    // Notify user that item is added
    setAdded(true);
    setTimeout(() => {
      setAdded(false)
    }, 1000);
  };
  //   Close Book Details Modal
  const handleClose = () => setShow(false);

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={4}>
              <img src={require(`${book.image}`)} width="200px" alt="book" />
            </Col>
            <Col lg={8}>
              <Row>
                <h4>{book.name}</h4>
              </Row>
              <Row>
                <p>{book.description}</p>
              </Row>
              <Row>
                <h6 className="text-primary">{book.price} eur</h6>
              </Row>
              <Row>
                <span className="text-secondary mx-1">Author: </span>
                <strong>{book.author}</strong>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Alert variant="success" show={added}>
          This item has been added!
        </Alert>
        <Button variant="primary" onClick={addToCart}>
          Add To Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BookDetails;
