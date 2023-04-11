import React, { Fragment, useEffect, useState } from "react";
// import Button from "@mui/material/Button";
import Navbar from "./component/Navbar";
import Mycard from "./component/Mycard";
import { GetMatches } from "./Api/Api";
import { Grid, Typography } from "@mui/material";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetMatches()
      .then(DATA => {
        setData(DATA.data);
        console.log(DATA.data);
      }) //console.log(data)
      .catch(err => console.log("cant load data"));
  }, []);

  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Grid container>
          <Grid sm="5"></Grid>
          <Grid sm="6">
            <Typography variant="h4" style={{ marginTop: 5,letterSpacing:7,fontStyle:"italic" }}>
              Live Score App
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
            {data.map(match => (
              // <Mycard details={match}></Mycard>
              <Fragment>
                {match.matchType === "t20" ? (
                  <Mycard key={match.id} details={match}></Mycard>
                ) : (
                  ""
                )}
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
