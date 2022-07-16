import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export type WeatherDataType = {
  cityName: string;
  temp: number;
  time?: string;
  weather_desc: string;
  wind_speed: number;
  precip?: number;
  icon: string;
  humidity: number;
  children: React.ReactNode;
};
export const WeatherData = ({
  cityName,
  temp,
  time,
  weather_desc,
  wind_speed,
  precip,
  icon,
  humidity,
  children,
}: WeatherDataType) => {
  return (
    <Card sx={{ minWidth: 300, minHeight: 300 }} elevation={3}>
      <CardMedia component="img" height="140" image={icon} alt={cityName} />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ height: 30 }}
          component="div"
        >
          Capital Name: {cityName}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          sx={{ height: 20 }}
          component="div"
        >
          Current Time: {time}
        </Typography>
        <Typography gutterBottom variant="body2" component="h6">
          Temp: {temp}*C
        </Typography>
        <Typography variant="body2" component="h6" color="text.secondary">
          WeatherDesc: {weather_desc}
        </Typography>
        <Typography variant="body2" component="h6" color="text.secondary">
          Wind Speed: {wind_speed}Km/H
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
};
