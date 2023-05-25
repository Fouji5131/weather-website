import React from "react";

const CurrentWeather = (props) => {
  return (
    <div className="flex flex-col items-center justify-center xl:p-10 xl:w-1/2">
      <div className=" space-y-10 w-full">
        <div className="flex justify-center">
          <div className="text-center p-5">
            <h1 className="text-9xl">
              {Math.round(props.weatherData.main.temp) + "°"}
            </h1>
            <p className="text-3xl">{props.weatherData.weather[0].main}</p>
          </div>
        </div>
        <p>
          Wed {Math.round(props.weatherData.main.temp_max) + "°" + " / "}
          {Math.round(props.weatherData.main.temp_min) + "°"}
        </p>
        <div className="flex justify-between w-full">
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
          <div>
            <p>Now</p>
            <p>27</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
