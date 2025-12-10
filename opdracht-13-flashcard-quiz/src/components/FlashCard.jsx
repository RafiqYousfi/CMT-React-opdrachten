import { useState } from "react";

export default function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(true);

  const flippHandler = () => {
    setFlipped(!flipped);
  };
  return (
    <section onClick={flippHandler}>
      {flipped ? <h2>{question}</h2> : <h2>{answer}</h2>}
    </section>
  );
}
