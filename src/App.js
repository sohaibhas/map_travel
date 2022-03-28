import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData } from "./api";

import "./components/Header/Header";
import Header from "./components/Header/Header";
import List from "./components/LIst/List";
import Map from "./components/Map/Map";

function App() {
  const [place, setPlace] = useState([]);

  const [coordiates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlaceData().then((data) => {
      console.log(data);
      setPlace(data);
    });
  }, [coordiates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordiates={coordiates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
