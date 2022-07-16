import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./utilities/Card";
import { Link } from "react-router-dom";
import Image from '../assets/world.jpg';

type CountryStateType = {
  name: {
    common: string;
  };
  latlng:[number,number];
  population: number;
  flags: {
    svg: string;
  };
  capital: string;
};

type listType ={
    data:CountryStateType[]
}


export default function CountryDetails() {
  const location = useLocation();
  const [countryData, setCountryData] = useState<listType>();

  useEffect(() => {
    const data = location.state as listType;
    setCountryData(data)
  }, [countryData]);

  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Link to="/">
        <Paper variant="outlined" sx={{ height: "50px", margin: "auto" }}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Country Details-Home
          </Typography>
        </Paper>
      </Link>
      <Grid
      sx={{backgroundImage: `url(${Image})`,margin: "auto"}}
        container
        justifyContent="space-evenly"
        alignItems="stretch"
        wrap="wrap"
        spacing={2}
      >
        {countryData?.data?.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name.common}
              population={item.population}
              latlng={item.latlng}
              capital={item.capital}
              flag={item.flags.svg}
            >
              dssd
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
}
