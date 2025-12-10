import { useState } from 'react'
import './App.css'

function App() {

const [flipped, setFlipped] = useState(true)

const flippHandler = () => {
  setFlipped(!flipped)
}

  return (
    <>
      <h1>Opdracht 13 - Flashcard Quiz</h1>

<section onClick={flippHandler}>
{flipped ? <h2>Vraag</h2> : <h2>Antwoord</h2>}
</section>
    </>
  )
}

export default App
