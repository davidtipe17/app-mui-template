import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const CardMovie = ({ movie }) => {
  return (
    <Box mt={6}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}   >
            <CardMedia 
            component="img"
            image={movie.Poster}/>
            </Grid>
            <Grid item xs={7}>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="body1"
              >
                {movie.Title}
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="body1"
              >
                {movie.Year}
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="body1"
              >
                {movie.Type}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardMovie;
