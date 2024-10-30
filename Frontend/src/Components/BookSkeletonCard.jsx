import { Box, Grid2, Skeleton } from "@mui/material";
import React from "react";

function BookSkeletonCard() {
  return (
    <Grid2 columns={4}>
      {/* Title skeleton placeholder */}
      <Skeleton variant="rectangular" width={210} height={30} />

      {/* Price skeleton placeholder */}
      <Skeleton
        variant="rectangular"
        width={120}
        height={30}
        sx={{ marginTop: 2 }}
      />

      {/* Author skeleton placeholder */}
      <Skeleton
        variant="rectangular"
        width={210}
        height={30}
        sx={{ marginTop: 2 }}
      />

      {/* Date skeleton placeholder */}
      <Skeleton
        variant="rectangular"
        width={210}
        height={30}
        sx={{ marginTop: 2 }}
      />

      {/* Action buttons skeleton placeholders */}
      <Box gap={3} display={"flex"}>
        <Skeleton
          variant="rectangular"
          width={90}
          height={30}
          sx={{ marginTop: 2 }}
        />
        <Skeleton
          variant="rectangular"
          width={90}
          height={30}
          sx={{ marginTop: 2 }}
        />
      </Box>
    </Grid2>
  );
}

export default BookSkeletonCard;
