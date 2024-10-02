import React from "react";

interface WeatherCardProps {
  weatherData: {
    name: string;
    main: { temp: number; humidity: number };
    wind: { speed: number };
    weather: [{ description: string; icon: string }];
  };
  unit: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, unit }) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl xl:text-4xl mb-2 font-semibold">{weatherData.name}</h1>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
          className="text-7xl my-3"
        />
        <p className="font-medium bg-primary text-white w-fit py-1.5 px-2 rounded-md mb-3">{weatherData.weather[0].description.toLocaleUpperCase()}</p>
      </div>
      <div className="space-y-3">
        <p className="text-gray">Temperature: <span className="text-dark font-medium">{weatherData.main.temp} °{unit === "imperial" ? "F" : "C"}</span></p>
        <p className="text-gray">Humidity: <span className="text-dark font-medium">{weatherData.main.humidity}%</span></p>
        <p className="text-gray">Wind Speed: <span className="text-dark font-medium">{weatherData.wind.speed} {unit === "imperial" ? "MPH" : "m/s"}</span></p>
      </div>
    </div>
  );
};

export default WeatherCard;
