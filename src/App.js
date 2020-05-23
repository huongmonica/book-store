import React, { useState } from "react";
import NavBar from "./NavBar";
import CarouselBook from "./CarouselBook";
import BookList from "./BookList";
import Footer from "./Footer";
import { BookProvider } from "./BookContext";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <CarouselBook />
      <CartProvider>
        <NavBar show={show} setShow={setShow} />
        <BookProvider>
          <BookList />
        </BookProvider>
        <Cart show={show} setShow={setShow} />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
