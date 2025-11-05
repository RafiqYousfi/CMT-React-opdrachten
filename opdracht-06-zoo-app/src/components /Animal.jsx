const Animal = ({ animal, onShowDetail }) => {
    return (
      <section>
        <h2>{animal.name}</h2>
        <img src={animal.imageUrl} alt="" />
   
        <button onClick={() => onShowDetail(product.id)}>
          Meer info
        </button>
      </section>
    );
  };
  
  export default Animal;