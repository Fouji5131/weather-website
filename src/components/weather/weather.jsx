import React from "react";
import Thermometer from "../../assets/images/thermometer.png";
import Wind from "../../assets/images/wind.png";
import Humidity from "../../assets/images/humidity.png";
import UV from "../../assets/images/uv.png";
import Visibility from "../../assets/images/visibility.png";
import AirPressure from "../../assets/images/air-pressure.png";

const Weather = (props) => {
  const getDayOfWeek = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return days[dayIndex];
  };

  return (
    <div className=" space-y-10 w-full">
      <div className="flex justify-center  ">
        <div className="text-center p-5 space-y-2">
          <h1 className="text-9xl">
            {Math.round(props.weatherData.main.temp) + "°"}
          </h1>
          <p className="text-2xl">{props.weatherData.weather[0].main}</p>
          <p>
            {getDayOfWeek()}{" "}
            {Math.round(props.weatherData.main.temp_max) + "°" + " / "}
            {Math.round(props.weatherData.main.temp_min) + "°"}
          </p>
          <h1 className="text-4xl">{props.weatherData.name}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-2 xl:gap-5 w-full pb-5 ">
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={Thermometer} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>Feels like</p>
              <h1>{Math.round(props.weatherData.main.feels_like) + "°"}</h1>
            </div>
          </div>
        </div>
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={Wind} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>Wind</p>
              <h1>
                {Math.round(props.weatherData.wind.speed * 1.60934) + " km/h"}
              </h1>
            </div>
          </div>
        </div>
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={Humidity} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>Humidity</p>
              <h1>{Math.round(props.weatherData.main.humidity) + "%"}</h1>
            </div>
          </div>
        </div>
        {/* <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={UV} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>UV</p>
              <h1>28</h1>
            </div>
          </div>
        </div> */}
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={Visibility} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>Visibility</p>
              <h1>{Math.round(props.weatherData.visibility / 1000) + " km"}</h1>
            </div>
          </div>
        </div>
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={AirPressure} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>Air Pressure</p>
              <h1>{Math.round(props.weatherData.main.pressure) + " hPa"}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
