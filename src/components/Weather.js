import React, { useEffect, useState } from "react";

const API_KEY = "0d05d189601743c155e62d790b95c1d7";
const localCoords = "coords";

const Weather = () => {
  const [weather, setWeather] = useState({});

  const handleGeoSuccess = (position) => {
    const coordsObj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    localStorage.setItem(localCoords, JSON.stringify(coordsObj));
  };
  const handleGeoError = () => {
    console.log("can't access to your location");
  };

  const getIconClass = (description, main) => {
    const date = new Date();
    const hour = date.getHours();
    let night = 0;
    if (hour >= 19 || hour <= 6) {
      night = 1;
    }
    if (main === "Thunderstorm") {
      return "fas fa-bolt";
    } else if (main === "Drizzle") {
      return "fas fa-cloud-showers-heavy";
    } else if (main === "Rain") {
      if (description === "light rain" || description === "moderate rain") {
        if (night === 1) {
          return "fas fa-cloud-moon-rain";
        } else {
          return "fas fa-cloud-sun-rain";
        }
      } else {
        return "fas fa-cloud-showers-heavy";
      }
    } else if (main === "Snow") {
      return "far fa-snowflake";
    } else if (main === "Clear") {
      if (night === 1) {
        return "fas fa-moon";
      } else {
        return "fas fa-sun";
      }
    } else if (main === "Clouds") {
      if (description === "few clouds") {
        if (night === 1) {
          return "fas fa-cloud-moon";
        } else {
          return "fas fa-cloud-sun";
        }
      } else {
        return "fas fa-cloud";
      }
    } else {
      return "fas fa-smog";
    }
  };

  useEffect(() => {
    const askForCoords = () => {
      navigator.geolocation.getCurrentPosition(
        handleGeoSuccess,
        handleGeoError
      );
    };
    const loadCoords = () => {
      const loadedCoords = localStorage.getItem(localCoords);
      const getWeather = (lat, lon) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            const temperature = json.main.temp;
            const place = json.name;
            const weatherDescription = json.weather[0].description;
            const weatherMain = json.weather[0].main;
            const iconClass = getIconClass(weatherDescription, weatherMain);
            setWeather({ temperature, place, iconClass });
          });
      };
      if (loadedCoords === null) {
        askForCoords();
      } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
      }
    };
    loadCoords();
  }, [weather]);
  return (
    <div>
      <div>
        <span>{Math.round(weather.temperature)}</span>
        <i className={weather.iconClass}></i>
      </div>
      {weather.place}
    </div>
  );
};

export default Weather;
