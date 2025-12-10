import data from './data.js'
import FlashCard from './flashcard.jsx';

const FlashCardList = () => {
    return ( 
    <section>
         {data.map((d) => (
         <FlashCard question={d.question} answer={d.answer}/>
        ))}

    </section> 
    );
}
 
export default FlashCardList;