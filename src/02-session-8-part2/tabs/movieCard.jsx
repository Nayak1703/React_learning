import React from "react";
import { Card, CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import cardStyle from "./movieCard.module.css";

const MovieCard = ({ movieData }) => {
  console.log(movieData);
  return (
    <Card className={cardStyle.card}>
      <CardActionArea>
        <CardContent className={cardStyle.content}>
          <CardMedia
            component="img"
            height="250"
            image={movieData.image.medium}
            alt="green iguana"
          />
          <Typography sx={{ fontWeight: "bold" }}>{movieData.name}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Genres:{" "}
            {movieData.genres.map((genre, index, array) =>
              array.length - 1 !== index ? genre + ", " : genre + "."
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
