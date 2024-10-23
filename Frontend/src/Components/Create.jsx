import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setdata] = useState({
    title: "",
    price: 0,
    author: "",
  });

  const createBook = async () => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:5001/api/books/", data);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" sx={{marginTop: 5}}>
        Create A Book
      </Typography>
      <Box>
        <TextField
          required
          value={data.title}
          onChange={(e) => setdata({ ...data, title: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Title"
        />
        <TextField
          required
          value={data.price}
          onChange={(e) => setdata({ ...data, price: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Price"
          type="number"
        />
        <TextField
          required
          value={data.author}
          onChange={(e) => setdata({ ...data, author: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Author"
        />
        <Button
          disabled={isLoading}
          onClick={createBook}
          color="primary"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          {isLoading ? <CircularProgress /> : "Create"}
        </Button>
      </Box>
    </Container>
  );
}

export default Create;
