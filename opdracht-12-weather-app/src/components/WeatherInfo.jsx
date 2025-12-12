const WeatherInfo = ({city, temp, feeltemp, damp, windspeed}) => {
    return ( 
        <section>
    <h2>{city}</h2>
    <h3>Temperatuur: {Math.round(temp)} graden</h3>
    <h3>Voelt als: {Math.round(feeltemp)} graden</h3>
    <h3>Luchtvochtigheid: {Math.round(damp)}%</h3>
    <h3>Windkracht: {Math.round(windspeed)}m/s</h3>
    </section>
);
}
 
export default WeatherInfo;