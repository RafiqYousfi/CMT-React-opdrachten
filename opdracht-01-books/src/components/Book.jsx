import { useState } from "react";

const Book = ({ image, title, author }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    const [liked, setLiked] = useState(false);

    function verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1);
    }

    function toggleLike() {
        setLiked(!liked);
    }

    return (
        <section className='book-container'> 
            <img className="image" src={image} alt="" />
            <h2>{title}</h2>
            <h3>{author}</h3>

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