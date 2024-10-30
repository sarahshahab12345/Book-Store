import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from 'prop-types';

// Define the style for the modal box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteConfirmation({ open, handleOnClick, handleClose }) {
  // Function to handle confirmation of deletion
  const handleConfirm = () => {
    handleOnClick(); // Call the function to handle deletion
    handleClose();   // Close the confirmation modal
  };

  return (
    <Modal
      open={open} // Control modal visibility
      onClose={handleClose} // Close modal on backdrop click
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Modal title */}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this book?
        </Typography>
        {/* Modal description */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This action cannot be undone.
        </Typography>

        {/* Button group for confirmation */}
        <Box display={"flex"} gap={2} marginTop={2}>
          <Button onClick={handleClose} variant="contained" color="info">
            No
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="warning">
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

// Define prop types for type checking
DeleteConfirmation.propTypes = {
  open: PropTypes.bool.isRequired,         // Control modal open state
  handleOnClick: PropTypes.func.isRequired, // Function to call on confirmation
  handleClose: PropTypes.func.isRequired,   // Function to call to close the modal
};
