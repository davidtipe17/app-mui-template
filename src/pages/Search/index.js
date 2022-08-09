import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useParams, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useNavigate();
  const HandleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const HandleClickMovie = () => {
    if (searchText === "") return;
    history(`/search/${searchText}`);
  };

  return (
    <Container style={{ height: "100vh", maxWidth: "100%" }}>
      <Card
        sx={{
          maxWidth: 800,
          margin: "auto",
          marginTop: 20,
          padding: 5,
        }}
      >
        <CardContent>
          <Typography variant="h3">OMDB Search</Typography>
        </CardContent>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6} fullWidth>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Movie or tv show"
                onChange={HandleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Button
                sx={{
                  padding: 1.9,
                }}
                fullWidth
                variant="contained"
                onClick={HandleClickMovie}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
