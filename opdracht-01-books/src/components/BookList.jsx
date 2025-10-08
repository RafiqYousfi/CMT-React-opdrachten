import Book from './Book'
const BookList = ({}) => {
    return (
        <section className='container'>
       <Book title="het leven van een loser" author="Jason" image='./images/book-1.png'/>
       <Book title="102 verdiepingen" author="Pieter" image='./images/book-2.png'/>
       <Book title="10000 luchtbalonnen" author="K3" image='./images/book-3.png'/>
        </section>
    )
};

export default BookList;