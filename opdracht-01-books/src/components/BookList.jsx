import Book from "./Book";
import booksData from "../data.js";
import { useState } from "react";
import Bookcounter from "./BookCounter";

const BookList = () => {
  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );

    setBooks(filteredBooks);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(booksData);
    } else {
      const filteredBooks = booksData.filter(
        (book) => book.category === category
      );
      setBooks(filteredBooks);
    }
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

      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <section className="container">
        <Bookcounter aantal={books.length} />

        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
            description={book.description}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;