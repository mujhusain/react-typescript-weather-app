import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Grid } from "@mui/material";
import { CountryData, CountryDataType } from "./CountryCard";
import { WeatherData } from "./WeatherCard";
import { getWeatherData } from "../../api/api";
import { WeatherStateType, initialState } from "./WeatherStateType";

function Card({ name, capital, population, latlng, flag }: CountryDataType) {
  const [isFlipped, setisFlipped] = useState(false);
  const [weatherData, setWeatherData] =
    useState<WeatherStateType>(initialState);

  async function showWeatherData() {
    let { data } = await getWeatherData(capital);
    setWeatherData(data);
  }

  const handleClick = () => {
    showWeatherData();
    setisFlipped((prev) => !prev);
  };
  return (
    <Grid item lg={3}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CountryData
          name={name}
          capital={capital}
          population={population}
          latlng={latlng}
          flag={flag}
        >
          <Button variant="outlined" size='small' color="primary" fullWidth onClick={handleClick}>
            Show Weather Data
          </Button>
        </CountryData>

        <WeatherData
          cityName={capital}
          temp={weatherData?.current.temperature}
          time={weatherData?.current.observation_time}
          weather_desc={weatherData?.current.weather_descriptions[0]}
          wind_speed={weatherData?.current.wind_speed}
          precip={weatherData?.current.precip}
          icon={weatherData.current.weather_icons[0]}
          humidity={weatherData?.current.humidity}
        >
          <Button
            variant="outlined" color="primary"
            fullWidth
            size='small'
            onClick={handleClick}
          >
            Show Country Data
          </Button>
        </WeatherData>
      </ReactCardFlip>
    </Grid>
  );
}

export default Card;
