import { Container, Grid2, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookSkeleton from "./BookSkeleton";
import BookCard from "./BookCard";

function Home() {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async () => {
    try {
      setisLoading(true);
      const data = await axios.get("http://localhost:5001/api/books/");
      setBooksData(data.data.data.books);
    } catch (err) {
      console.log(err.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Typography textAlign={"center"} variant="h4" sx={{ marginTop: 5 }}>
        All Books
      </Typography>

      {isLoading ? (
        <BookSkeleton />
      ) : (
        <Grid2 container gap={2}>
          {booksData.map((e) => {
            return (
              <Grid2 columns={4} key={e._id}>
                <BookCard book={e} />
              </Grid2>
            );
          })}
        </Grid2>
      )}
    </Container>
  );
}

export default Home;
