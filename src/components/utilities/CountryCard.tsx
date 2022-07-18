import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export type CountryDataType = {
  name: string;
  capital: string;
  population: number;
  latlng: [number,number];
  flag: string;
  children?: React.ReactNode;
};
export const CountryData = ({
  name,
  capital,
  population,
  latlng,
  flag,
  children,
}: CountryDataType) => {
  return (
    <Card sx={{ minWidth: 300, minHeight: 300 }} elevation={3}>
      <CardMedia component="img" height="140" image={flag} alt={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ height: 40 }}
          component="div"
        >
          Country Name: {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="h6">
          Capital: {capital}
        </Typography>
        <Typography variant="body2" component="h6" color="text.secondary">
          Population: {population}
        </Typography>
        <Typography variant="body2" component="h6" color="text.secondary">
          LatLong: {latlng?.join(', ')}
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
};
