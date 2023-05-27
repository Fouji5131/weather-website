import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Particle from "./components/particles/particles";
import Weather from "./components/weather/weather";
import Input from "./components/ui/input";

function App() {
  const API_KEY = "22dc56efa069eb03e68e1fc3ed879eb0";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [city, setCity] = useState("london");

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
  }, [city]);

  if (isLoading) {
    return (
      <div className="relative flex justify-center space-y-10 text-white">
        <Particle className="z-0" />
        <div className="z-10 relative flex justify-center space-y-10 2xl:space-y-40 w-11/12">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex justify-center space-y-10 text-white">
        <Particle className="z-0" />
        <div className="z-10 relative flex flex-col justify-center space-y-5 2xl:space-y-40 w-4/5">
          <div>
            <Input setCity={setCity} />
          </div>
          <div className="text-center text-xl">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center space-y-10 text-white">
      <Particle className="z-0" />
      <div className="z-10 relative space-y-10 2xl:space-y-40 w-4/5">
        <Input setCity={setCity} />

        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
