import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = ({ show, setShow }) => {
  // cart information
  const [cart, setCart] = useContext(CartContext);
  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // Edit item's quantity
  const addQuantity = (id, add) => {
    const editedItem = cart.findIndex((item) => item.id === id);
    if (add === true) {
      cart[editedItem]["quantity"]++;
    } else {
      cart[editedItem]["quantity"]--;
    }
    // remove item if quantity is less than 1
    if (cart[editedItem]["quantity"] < 1) {
      cart.splice(editedItem, 1);
    }
    setCart((items) => [...items]);
  };

  // Empty the cart
  const emptyCart = () => {
    setCart([]);
  };
  // Close Cart Modal
  const handleClose = () => setShow(false);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cart.map((item) => (
            <Row key={item.id}>
              <Col className="mb-2">
                <img src={require(`${item.image}`)} width="70px" alt="" />
              </Col>
              <Col xs={4}>{item.name}</Col>
              <Col>{item.price} eur</Col>
              <Col>
                <Button onClick={() => addQuantity(item.id, false)}>-</Button>
                <Button disabled className="mx-1">
                  {item.quantity}
                </Button>
                <Button onClick={() => addQuantity(item.id, true)}>+</Button>
              </Col>
            </Row>
          ))}
        </Container>
        {cart.length < 1 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="text-right mt-3">
            <div>Total number: {totalProducts} items</div>
            <div>Total price: {totalPrice} euros</div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={emptyCart}>
          Empty cart
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Go to checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Cart;
