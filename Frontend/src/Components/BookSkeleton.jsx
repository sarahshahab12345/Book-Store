import { Grid2 } from "@mui/material";
import React from "react";
import BookSkeletonCard from "./bookSkeletonCard";

function BookSkeleton() {
    return (
      <>
        {/* First row of skeleton cards */}
        <Grid2 gap={4} marginTop={4} container justifyContent={"space-between"}>
          <BookSkeletonCard />
          <BookSkeletonCard />
          <BookSkeletonCard />
          <BookSkeletonCard />
        </Grid2>
        
        {/* Second row of skeleton cards */}
        <Grid2 gap={4} marginTop={4} container justifyContent={"space-between"}>
          <BookSkeletonCard />
          <BookSkeletonCard />
          <BookSkeletonCard />
          <BookSkeletonCard />
        </Grid2>
      </>
  );
}

export default BookSkeleton;
