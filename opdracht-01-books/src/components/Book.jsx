import { useState } from "react";

const Book = ({ image, title, author, category }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <section className="book-container">
      <img className="image" src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>

      {/* 👉 Categorie tonen */}
      <p><strong>Categorie:</strong> {category}</p>

      <div className="favorite-section">
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && (
          <p className="favorited-text">
            Toegevoegd aan favorieten
          </p>
        )}
      </div>

      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </section>
  );
};

export default Book;