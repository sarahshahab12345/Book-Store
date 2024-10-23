import { Box, Grid2, Skeleton } from "@mui/material";
import React from "react";

function BookSkeletonCard() {
  return (
    <Grid2 columns={4}>
      <Skeleton variant="rectangular" width={210} height={30} />
      <Skeleton
        variant="rectangular"
        width={120}
        height={30}
        sx={{ marginTop: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width={210}
        height={30}
        sx={{ marginTop: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width={210}
        height={30}
        sx={{ marginTop: 2 }}
      />
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
