import { Box, Grid2, Skeleton } from "@mui/material";
import React from "react";
import BookSkeletonCard from "./bookSkeletonCard";

function BookSkeleton() {
  return (
    <>
      <Grid2 gap={4} marginTop={4} container justifyContent={"space-between"}>
        <BookSkeletonCard />
        <BookSkeletonCard />
        <BookSkeletonCard />
        <BookSkeletonCard />
      </Grid2>
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
