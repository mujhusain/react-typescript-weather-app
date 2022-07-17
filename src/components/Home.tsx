import { Paper, Typography, Stack, TextField, Button } from "@mui/material";
import Image from "../assets/world.jpg";
import Input from "./utilities/input/Input";

function Home() {
  return (
    <>
      <Paper
      className="world-banner"
        variant="outlined"
        elevation={3}
        sx={{
          textAlign: "center",
          height: "60vh",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          display: "flex", margin: "auto",
          width:'55vw',
          position: 'relative',
          top:'-20vh' 
        }}
      >
        <Typography variant="h5" color="primary">
          COUNTRY DATA
        </Typography>
      </Paper>
      <Input />
    </>
  );
}

export default Home;
