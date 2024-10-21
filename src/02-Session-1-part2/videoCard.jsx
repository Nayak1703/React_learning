import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const VideoCard = ({ data }) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        image={data.previewImage}
        height="140"
        alt="Thumbnail"
      />
      <CardContent>
        <Typography color="text.secondary">{data.genre}</Typography>
        <Typography gutterBottom variant="h5">
          {data.title}
        </Typography>
        <Typography color="text.secondary">{data.releaseDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
