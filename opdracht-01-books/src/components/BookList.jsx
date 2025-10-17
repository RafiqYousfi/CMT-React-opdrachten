import Book from "./Book";
import { useState } from "react";
import Bookcounter from "./BookCounter";

const BookList = ({}) => {
  const [books, setBooks] = useState([
    {
      title: "het leven van een loser",
      author: "rafiq",
      image: "./images/book-1.png",
    },
    {
      title: "102 verdiepingen",
      author: "pieter",
      image: "./images/book-2.png",
    },
    {
      title: "10000 luchtballonen",
      author: "K3",
      image: "./images/book-3.png",
    },
    
  ]);

  return (
    <section className="container">
     <Bookcounter aantal={books.length}/>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </section>
  );
};

export default BookList;
