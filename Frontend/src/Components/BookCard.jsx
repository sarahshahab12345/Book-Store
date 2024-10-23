import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BookCard({ book }) {
  return (
    <Card sx={{ minWidth: 275, marginTop: 5 }}>
      <CardContent>
        <Typography
          gutterBottom
          sx={{ fontWeight: "bold", color: "text.secondary", fontSize: 24 }}
        >
          {book.title}
        </Typography>
        <Typography variant="h5" component="div">
          {book.price}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {book.author}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {book.publicationDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="info" variant="contained">
          Edit
        </Button>
        <Button size="small" color="warning" variant="contained">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
