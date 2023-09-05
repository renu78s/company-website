import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeReviewCard(props) {
  const { image, topic, description } = props;

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "transparent",
        border: "2px solid white",
        marginBottom: "2rem",
        color: "white",
        width: "30vw",
        minWidth: 200,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={topic}
      />
      <CardMedia component="img" height="194" image={image} alt={topic} />
      <CardContent>
        <Typography
          variant="body2"
          color="white"
          style={{
            fontWeight: "bolder",
            textShadow: "1px 1px rgb(255, 60, 0)",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
