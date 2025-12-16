import { useState } from "react";

const Book = ({ image, title, author, category, description, year, pages }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function toggleLike() {
    setLiked(!liked);
  }

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <article 
      className={`book ${isFlipped ? "flipped" : ""}`} 
      onClick={handleFlip}
    >
      <div className="book-inner">
        {/* ➤ Voorkant */}
        <div className="book-front">
          <img className="image" src={image} alt={title} />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p><strong>Categorie:</strong> {category}</p>

          <div className="favorite-section">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // voorkomt flip bij klikken op like
                toggleLike();
              }}
            >
              {liked ? "❤️" : "🤍"}
            </button>

            {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation(); // voorkomt flip bij klikken op teller
              verhoogTeller();
            }}
          >
            Keer gelezen: {aantalKeerGelezen}
          </button>
        </div>

        {/* ➤ Achterkant */}
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina's:</strong> {pages}</p>
          <p>{description}</p>
          <p className="click-to-back">Klik op het boek om terug te gaan</p>
        </div>
      </div>
    </article>
  );
};

export default Book;