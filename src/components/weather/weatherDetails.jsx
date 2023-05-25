import React from "react";
import Thermometer from "../../assets/images/thermometer.png";
import Wind from "../../assets/images/wind.png";
import Humidity from "../../assets/images/humidity.png";
import UV from "../../assets/images/uv.png";
import Visibility from "../../assets/images/visibility.png";
import AirPressure from "../../assets/images/air-pressure.png";

const WeatherDetails = (props) => {
  return (
    <div className="xl:w-1/2 space-y-10 xl:space-y-5 pb-10 xl:pb-0">
      <div className=" background flex items-center justify-center h-60 2xl:h-80">
        <table className="w-11/12">
          <tbody className="space-y-3 2xl:space-y-5 flex flex-col">
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
            <tr className="w-full flex justify-between">
              <td>Tomorrow</td>
              <td>Thunderstorm</td>
              <td>31/22</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-2 xl:gap-5 w-full">
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
        <div className="background h-24 flex items-center justify-around">
          <div className="flex justify-between w-4/5">
            <img src={UV} alt="" className="w-12 h-12" />
            <div className="text-right">
              <p>UV</p>
              <h1>28</h1>
            </div>
          </div>
        </div>
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

export default WeatherDetails;
