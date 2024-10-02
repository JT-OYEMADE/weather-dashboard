import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

interface ForecastData {
  dt: number; // Timestamp for the forecast day
  temp: {
    day: number;
  };
  humidity: number;
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

function App() {
  const [city, setCity] = useState(""); // To track city input
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // To store current weather data
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null); // To store 7-day forecast data
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [unit, setUnit] = useState("imperial"); // Store the temperature unit (Fahrenheit or Celsius)
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // To store recent searches from local storage

  const API_KEY = "d1e2d0763204896fd894698f5c6e27ee";
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

  // Load recent searches from localStorage when the component mounts
  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const fetchWeather = async (selectedCity?: string) => {
    const searchCity = selectedCity || city;

    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          q: searchCity,
          units: unit,
          appid: API_KEY,
        },
      });
      const data = response.data;
      setWeatherData(data);

      if (!recentSearches.includes(searchCity)) {
        const updatedSearches = [searchCity, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      }

      fetchForecast(data.coord.lat, data.coord.lon);
      setError(null);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
      setForecastData(null);
    }
  };

  const fetchForecast = async (lat: number, lon: number) => {
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall`,
      {
        params: {
          lat,
          lon,
          exclude: "current,minutely,hourly",
          units: unit,
          appid: API_KEY,
        },
      }
    );
    setForecastData(forecastResponse.data.daily.slice(1, 8));
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    fetchWeather();
  };

  const clearHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const toggleUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  };

  return (
    <div>
      <div className="bg-primary text-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white py-10">
        <h1>Weather Dashboard</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="bg-primary-light lg:w-[360px] lg:min-h-screen px-4 md:px-6 pt-4 lg:max-w-[40%]">
          <SearchBar
            city={city}
            onChange={(e) => setCity(e.target.value)}
            onSearch={handleSearch}
            onToggleUnit={toggleUnit}
            unit={unit}
            onClearHistory={clearHistory}
            recentSearches={recentSearches}
            onSelectRecentSearch={(search) => fetchWeather(search)}
          />
        </div>

        <div className="bg-white flex-grow px-4 md:px-6 pt-5">
          <div className="border border-[#525866] min-w-full rounded-md">
            {weatherData ? (<WeatherCard weatherData={weatherData} unit={unit} />) : (
              (error ? <ErrorMessage error={error} /> : <p className="p-4">Search for a city to get weather information.</p>)
            )}
          </div>

          {/* 7-Day Forecast display can be added here similar to WeatherCard */}
          {forecastData && (
            <div className="mt-3">
              <h1 className="text-2xl mb-2 font-medium">7-Day Forecast</h1>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-3">
                {forecastData.map((day, index) => (
                  <div key={index} className="border border-primary bg-primary text-white p-4 shadow-sm">
                    <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                        alt={day.weather[0].description}
                        className="text-5xl my-3"
                      />
                    </div>
                    <p>Temp: {day.temp.day} °{unit === "imperial" ? "F" : "C"}</p>
                    <p>Humidity: {day.humidity}%</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
