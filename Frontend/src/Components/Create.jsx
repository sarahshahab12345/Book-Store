import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { GlobalState } from "../GlobalContext/GlobalContext";

function Create() {
  // Destructure context values for loading state, data, and functions
  const { isLoading, setData, data, createBook } = useContext(GlobalState);
  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = async () => {
    const success = await createBook(); // Attempt to create the book
    if (success) {
      // Reset data on successful creation
      setData({ title: "", price: 0, author: "" });
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <Container>
      {/* Page title */}
      <Typography textAlign={"center"} variant="h4" sx={{ marginTop: 5 }}>
        Create A Book
      </Typography>
      <Box>
        {/* Book Title input */}
        <TextField
          required
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Title"
        />
        {/* Book Price input */}
        <TextField
          required
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Price"
          type="number"
        />
        {/* Book Author input */}
        <TextField
          required
          value={data.author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
          sx={{ marginTop: 2 }}
          fullWidth
          placeholder="Book Author"
        />
        {/* Submit button with loading indication */}
        <Button
          disabled={isLoading} // Disable button while loading
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Create"} {/* Show loading spinner if isLoading is true */}
        </Button>
      </Box>
    </Container>
  );
}

export default Create;
