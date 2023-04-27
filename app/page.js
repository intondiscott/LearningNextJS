import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const { name, main, weather } = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=41.3165&lon=-73.0932&appid=${process.env.API_KEY}`
  ).then((res) => {
    return res.json();
  });
  return (
    <main class="main">
      <h1>Temp: {parseInt(((main.temp - 273.1) * 9) / 5) + 32}</h1>
      <h1>City: {name}</h1>
      <h1>Weather: {weather[0].description}</h1>

      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      ></img>
    </main>
  );
}
