import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContentText } from "@mui/material";

export default function PopUpDialog(props) {
  const { onClose, open, abstract } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <DialogTitle
        variant="h5"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Abstract
      </DialogTitle>
      <DialogContentText
        sx={{ display: "flex", justifyContent: "center", mb: 2, ml: 2, mr: 2 }}
      >
        {abstract}
      </DialogContentText>
    </Dialog>
  );
}

PopUpDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
