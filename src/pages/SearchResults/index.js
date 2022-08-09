import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography, CardMedia } from "@mui/material";
import Services from "../../services";
import CardMovie from "../../components/CardMovie/index.js";
const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const { searchText } = useParams();

  const fetchMovie = async () => {
    const data = await Services.searchByText(searchText);
    setMovies(data.Search);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={10}>
        <Typography variant="h6">
          Resultado de la busqueda del usuario: {searchText}
        </Typography>
      </Box>
      <Box>
        {movies.length > 0 &&
          movies.map((movie, index) => <CardMovie key={index} movie={movie} />)}
      </Box>
    </Container>
  );
};

export default SearchResult;
