import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteConfirmation from "./DeleteConfirmation";
import { useContext, useState } from "react";
import { GlobalState } from "../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const [open, setOpen] = useState(false);
  const { handleOnDelete } = useContext(GlobalState);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle book deletion
  const handleOnDeleteClick = async () => {
    try {
      await handleOnDelete(book._id);
      handleClose();
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <>
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
          <Button
            onClick={() => {
              navigate(`/update-book/${book._id}`, { state: book });
            }}
            size="small"
            color="info"
            variant="contained"
          >
            Edit
          </Button>
          <Button
            onClick={handleOpen}
            size="small"
            color="warning"
            variant="contained"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
      {/* Confirmation dialog for delete action */}
      <DeleteConfirmation
        handleClose={handleClose}
        open={open}
        handleOnClick={handleOnDeleteClick}
      />
    </>
  );
}
