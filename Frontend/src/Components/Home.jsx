import { Container, Grid2, Typography } from "@mui/material";
import React, { useEffect, useContext } from "react";
import BookSkeleton from "./BookSkeleton";
import BookCard from "./BookCard";
import { GlobalState } from "../GlobalContext/GlobalContext";

function Home() {
  const { isLoading, booksData, fetchData } = useContext(GlobalState);

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {/* Title for the page */}
      <Typography textAlign="center" variant="h4" sx={{ marginTop: 5 }}>
        All Books
      </Typography>

      {isLoading ? (
        <BookSkeleton />
      ) : (
        <Grid2 container spacing={2}>
          {booksData.map((e) => (
            <Grid2 xs={3} key={e._id}>
              <BookCard book={e} /> {/* Individual book card */}
            </Grid2>
          ))}
        </Grid2>
      )}
    </Container>
  );
}

export default Home;
