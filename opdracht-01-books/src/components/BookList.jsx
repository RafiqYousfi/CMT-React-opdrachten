import Book from "./Book";
import booksData from "../data.js";
import { useState } from "react";
import Bookcounter from "./BookCounter";

const BookList = ({}) => {
  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);


  

  const filteredBooks = booksData.filter((book) => 
    book.title.toLowerCase().includes(newSearch.toLowerCase())
  )

  setBooks(filteredBooks)
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="zoek hier uw boek"
          name="search"
          onChange={searchHandler}
          value={searchInput}
        />
      </div>

      <section className="container">
        <Bookcounter aantal={books.length} />
        {books.map((book) => (
          <Book title={book.title} author={book.author} image={book.image} />
        ))}
      </section>
    </>
  );
};

export default BookList;
