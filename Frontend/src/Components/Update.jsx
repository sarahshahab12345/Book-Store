import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../GlobalContext/GlobalContext";

function Update() {
  const location = useLocation(); // Get current location
  const { isLoading, setData, data, updateBook } = useContext(GlobalState); 
  const navigate = useNavigate(); 

  // Function to handle the book update
  const handleOnUpdateBook = async () => {
    await updateBook(); // Call the update function
    navigate("/"); // Navigate back to home after updating
  };

  // Effect to set the book data when the component mounts
  useEffect(() => {
    const bookdata = location.state; // Get book data from location state
    setData(bookdata); // Set the data in the context
  }, [location, setData]);

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" sx={{ marginTop: 5 }}>
        Update A Book
      </Typography>
      <Box>
        <TextField
          required
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Title"
        />
        <TextField
          required
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Price"
          type="number"
        />
        <TextField
          required
          value={data.author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Author"
        />
        <Button
          disabled={isLoading} // Disable button while loading
          onClick={handleOnUpdateBook} // Handle book update
          color="primary"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Update"}
        </Button>
      </Box>
    </Container>
  );
}

export default Update;
