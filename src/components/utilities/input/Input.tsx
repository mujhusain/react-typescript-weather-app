import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { getCountryDetails } from "../../../api/api";
import Warning from "../warning/Warning";
import './input.css';
import CountryList from "../countrySuggestion/CountryList";

// type state 

const Input:React.FC<{jestFunc?:Function}>=({jestFunc})=> {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");
  const [found, setFound] = useState(true);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // if (e.key === "Enter" || e.key === "NumpadEnter") {
    //   handleSearch();
    // } else {
    setCountryName(e.currentTarget.value.trim());
    // }
  };

  const handleSearch = async () => {
    jestFunc && jestFunc("test"); //testing purpose
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
    <div className='container'>
      <div
       className="input-container"
      >
        <TextField
        sx={{margin:'0.2em'}}
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
        sx={{margin:'0.2em'}}
          variant="contained"
          onClick={() => handleSearch()}
          disabled={countryName.length ? false : true}
        >
          Search
        </Button>
      </div>
      <CountryList text={countryName} setCountryName={setCountryName} />
      <Warning found={found} />
    </div>
  );
}

export default Input;
