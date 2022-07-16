import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Stack, TextField, Button } from "@mui/material";
import { getCountryDetails } from ".././api/api";
import Image from "../assets/world.jpg";
import CountryList from "./utilities/countrySuggestion/CountryList";

function Home() {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");
  const [found, setFound] = useState(true);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // if (e.key === "Enter" || e.key === "NumpadEnter") {
    //   handleSearch();
    // } else {
    setCountryName(e.currentTarget.value);
    // }
  };

  const handleSearch = async () => {
    try {
      let { data } = await getCountryDetails(countryName);
      setFound(true);
      navigate(`/country/${countryName}`, { state: { data } });
    } catch (err) {
      setFound(false);
      console.log(err);
    }
  };

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          textAlign: "center",
          margin: "auto",
          width: "50%",
          position: "absolute",
          top: "10%",
          left: "25%",
          backgroundImage: `url(${Image})`,
        }}
      >
        <Typography variant="h5" color="primary">
          COUNTRY DATA
        </Typography>
        <Stack
          direction="row"
          sx={{
            margin: "8em",
            padding: "1em",
            backgroundColor: "#fffa",
            borderRadius: "10px",
          }}
          justifyContent="center"
          spacing={2}
        >
          <TextField
            type="string"
            id="outlined-basic"
            value={countryName}
            onChange={(e) => handleOnChange(e)}
            label="Enter Country Name"
            variant="outlined"
            size="small"
            autoFocus
            autoComplete="off"
          />

          <Button
            variant="contained"
            onClick={() => handleSearch()}
            disabled={countryName.length ? false : true}
          >
            Search
          </Button>
        </Stack>
        {!found ? <h2 style={{ color: "red" }}>Country Not Found</h2> : null}
      </Paper>
      <CountryList setCountryName={setCountryName} text={countryName} />
    </>
  );
}

export default Home;
