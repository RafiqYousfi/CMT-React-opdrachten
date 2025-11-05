import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Animal from '../components/Animal.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (AnimalId) => {
    navigate(`/animal/${AnimalId}`);
  };

  return (
    <section>
      
      {animalList.map(animal => (
        <Animal
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Home;