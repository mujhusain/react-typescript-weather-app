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
    try{
      let { data } = await getWeatherData(capital);
      setWeatherData(data);
    }catch(err){
      console.log(err)

    }
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
          cityName={capital || "API Call Exeeded"}
          temp={weatherData?.current?.temperature || 0}
          time={weatherData?.current?.observation_time || "API Call Exeeded"}
          weather_desc={weatherData?.current?.weather_descriptions[0] || "API Call Exeeded"}
          wind_speed={weatherData?.current?.wind_speed || 0}
          precip={weatherData?.current?.precip || 0}
          icon={weatherData.current?.weather_icons[0] || "API Call Exeeded"}
          humidity={weatherData?.current?.humidity || 0}
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
