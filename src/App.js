import React, { useEffect, useState } from "react";
import "./App.css";
import Particle from "./components/particles/particles";
import Input from "./components/ui/input";
import CurrentWeather from "./components/weather/currentWeather";
import WeatherDetails from "./components/weather/weatherDetails";

function App() {
  const API_KEY = "22dc56efa069eb03e68e1fc3ed879eb0";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [city, setCity] = useState("lahore");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setIsLoading(false);
        } else {
          setError("Error fetching weather data");
          setIsLoading(false);
        }
      } catch (error) {
        setError("Error fetching weather data");
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (isLoading) {
    return (
      <div className="relative flex justify-center space-y-10 text-white">
        <Particle className="z-0" />
        <div className="z-10 relative flex justify-center space-y-10 2xl:space-y-40 w-11/12">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {/* <Particle className="z-0" /> */}
        <div>
          <div>{error}</div>
          <div>
            <Input setCity={setCity} />
          </div>
        </div>
      </div>
    );
  }

  console.log(weatherData);

  return (
    <div className="relative flex justify-center space-y-10 text-white">
      <Particle className="z-0" />
      <div className="z-10 relative space-y-10 2xl:space-y-40 w-11/12">
        <Input setCity={setCity} />

        <div className="flex flex-col xl:flex-row justify-center space-y-10 xl:space-y-0 xl:space-x-10 w-full ">
          <CurrentWeather weatherData={weatherData} />

          <WeatherDetails weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
