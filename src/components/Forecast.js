import React from "react";

const Forecast = ({ weather, toDate }) => {
  const { data } = weather;
  const { name, sys, main, weather: weatherDetails, wind, clouds } = data;

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-md mx-auto text-gray-800 font-sans">
      <h2 className="text-2xl font-semibold mb-2">
        {name}, <span className="text-blue-600">{sys.country}</span>
      </h2>
      <p className="text-sm text-gray-600 mb-4">{toDate()}</p>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
          alt={weatherDetails[0].description}
          className="w-16 h-16"
        />
        <div>
          <p className="text-xl font-medium">
            {weatherDetails[0].main}
          </p>
          <p className="text-gray-500 capitalize">
            {weatherDetails[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-semibold text-gray-700">Temperature:</p>
          <p>{(main.temp - 273.15).toFixed(2)}°C</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Feels Like:</p>
          <p>{(main.feels_like - 273.15).toFixed(2)}°C</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Min Temp:</p>
          <p>{(main.temp_min - 273.15).toFixed(2)}°C</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Max Temp:</p>
          <p>{(main.temp_max - 273.15).toFixed(2)}°C</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Humidity:</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Pressure:</p>
          <p>{main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Wind Speed:</p>
          <p>{wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Cloud Coverage:</p>
          <p>{clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
