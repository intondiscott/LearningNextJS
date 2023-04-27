import styles from "../weather/page.css";

export default async function Weather() {
  const { name, main, weather } = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=41.3165&lon=-73.0932&appid=${process.env.API_KEY}`
  ).then((res) => {
    return res.json();
  });
  return (
    <main class="main">
      <h1>
        <span>Temp:</span> {parseInt(((main.temp - 273.15) * 9) / 5) + 32}°F
      </h1>
      <h1>
        <span>City:</span> {name}
      </h1>
      <h1>
        <span>Humidity:</span>
        {main.humidity}%
      </h1>
      <h1>
        <span>Weather:</span> {weather[0].description}
      </h1>

      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      ></img>
    </main>
  );
}
