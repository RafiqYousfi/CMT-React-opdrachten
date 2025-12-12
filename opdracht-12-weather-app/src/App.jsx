import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('Rotterdam');
  const [textInput, setInput] = useState('');
  const apiKey = '4fe844971d7a226536a0b0ae7d461b20';

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);      
      const data = await response.json();
      console.log (data);
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  const searchHandler = (e) => {
    e.preventDefault();
    setCity(textInput)

//zorg er nu voor dat city veranderd naar wat je in textInput invoert
  };

  return (
    <section>
      
        <div>
      <input type="text" value={textInput} onChange={(e) => setInput(e.target.value)} />
      <button onClick={searchHandler}>zoek stad</button>
      </div>

      {weather ? <WeatherInfo city={weather.name} temp ={weather.main.temp} feeltemp ={weather.main.feels_like} damp ={weather.main.humidity} windspeed ={weather.wind.speed}/>
      : <p>Weer aan het laden</p>}
     
    </section>
  );
};

export default App;