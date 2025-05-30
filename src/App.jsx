import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

 const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-gray-300 to-blue-gray-700">
        <div className="bg-black p-8 rounded-lg max-w-md w-full shadow-lg">
          <h1 className="font-bold text-3xl text-center mb-5  text-white font-serif">
            Weather App
          </h1>
          <SearchBar fetchWeather={fetchWeather} />
          {loading && <p className="text-white text-center font-serifs">Loading...</p>}
          {error && <p className="text-red-500 text-center font-semibold mt-3">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </>
  );
};

export default App;
