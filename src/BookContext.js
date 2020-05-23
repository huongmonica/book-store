import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBook] = useState([
    {
      id: 111,
      name: "Lord of The Ring",
      description:
        "The Lord of the Rings by J.R.R. Tolkien tells the story of the War of the Ring in the fictional world of Middle-earth. The long novel, commonly published as three volumes and mistakenly called a trilogy, centers around the magical One Ring, which was discovered by Bilbo Baggins in the earlier novel The Hobbit.",
      price: 25,
      author: "J.R.R. Tolkien",
      image: "./img/book_1.jpg",
    },
    {
      id: 112,
      name: "Oxford Dictionary",
      description:
        "Oxford University Press is a department of the University of Oxford. It furthers the University's objective of excellence in research, scholarship, and education by publishing worldwide",
      price: 28,
      author: "Oxford Press",
      image: "./img/book_2.jpg",
    },
    {
      id: 113,
      name: "Normal book",
      description: "this is not a special book",
      price: 5,
      author: "Ms Huong",
      image: "./img/book_1.jpg",
    },
    {
      id: 114,
      name: "Normal book",
      description: "this is not a special book",
      price: 18,
      author: "Ms Huong",
      image: "./img/book_1.jpg",
    },
    {
      id: 115,
      name: "OK book",
      description: "this is not a special book",
      price: 33,
      author: "Ms Huong",
      image: "./img/book_1.jpg",
    },
    {
      id: 116,
      name: "Excellent book",
      description: "this is not a special book",
      price: 23,
      author: "Ms Huong",
      image: "./img/book_1.jpg",
    },
  ]);
  return (
    <BookContext.Provider value={[books, setBook]}>
      {props.children}
    </BookContext.Provider>
  );
};
