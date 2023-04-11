import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState, Dialog } from "react";
import { getMatchDetails } from "../Api/Api";
import image from "../images/versus.png";
const Mycard = ({ details }) => {
  const [detail, setDetail] = useState({});

  const [open, setOpen] = useState(false);

  const handleClick = id => {
    getMatchDetails(id)
      .then(data => {
        console.log("DATA", data);
        setDetail(data);
        handleopen();
      })
      .catch(err => console.log(err));
  };

  const getMatchCard = () => {
    return (
      <>
        <Card style={{ marginTop: 25 }}>
          <CardContent>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}>
              <Grid item>
                <Typography variant="h5">{details.t1}</Typography>
              </Grid>
              <Grid item>
                <img style={{ Width: 85 }} src={image} alt=""></img>
              </Grid>
              <Grid item>
                <Typography variant="h5">{details.t2}</Typography>
              </Grid>
            </Grid>
            {/* <Typography variant="h3">This is my Card</Typography> */}
          </CardContent>
          <CardActions>
            <Grid container justifyContent="center" spacing={5}>
              <Button
                variant="contained"
                onClick={() => {
                  handleClick(details.id);
                }}>
                Show The Details
              </Button>

              <Button style={{ marginLeft: 10 }} variant="contained">
                {new Date(details.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleopen = () => {
    setOpen(true);
  };
  const getDialog = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"match Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-title">
            <Typography>{detail.status}</Typography>
            {/* <Typography>
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted ? "Started" : "not started"}
            </span>
          </Typography> */}

            <Typography>
              Team1{" "}
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.t1s}
              </span>
            </Typography>

            <Typography>
              Team2{" "}
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.t2s}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autofocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      {getMatchCard()}
      {getDialog()}
    </>
  );
};

export default Mycard;
