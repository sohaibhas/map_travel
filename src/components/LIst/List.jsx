import React, { useState } from "react";
import {
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");

  const place = [
    {
      name: "Cool Place",
    },
    {
      name: "Best Beer",
    },
    {
      name: "Best Steak",
    },
    {
      name: "Cool Place",
    },
    {
      name: "Best Beer",
    },
    {
      name: "Best Steak",
    },
    {
      name: "Cool Place",
    },
    {
      name: "Best Beer",
    },
    {
      name: "Best Steak",
    },
  ];
  return (
    <div classname={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attration around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Restaurants">Restaurants</MenuItem>
          <MenuItem value="Hotel">Hotel</MenuItem>
          <MenuItem value="Attraction">Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {place?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetail place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
