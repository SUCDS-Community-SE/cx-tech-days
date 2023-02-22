import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import { Dialog, Button, DialogTitle, DialogContent } from "@mui/material";
import API from "../../api";

async function getData() {
  const data = await API.getAPI().getSuggestions();
  return data;
}

export default function SuggestionTable() {
  const { user } = useContext(AuthContext);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData().then((data) => setRows(data));
    }
    return () => (mounted = false);
  }, []);

  const handleDelete = (suggestion) => {
    API.getAPI().deleteSuggestion(suggestion);
    setRows(rows.filter((row) => row !== suggestion));
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Typography variant="h3" marked="center" sx={{ mt: 2, mb: 2 }}>
        Einreichungen
      </Typography>
      <Typography fontWeight="bold" sx={{ mt: 2, mb: 2 }}>
        Anzahl: {rows.length}
      </Typography>
      <Paper
        sx={{
          mt: 2,
          mb: 10,
          ml: 5,
          mr: 5,
          padding: 2,
          overflow: "hidden",
          boxShadow: 0,
        }}
      >
        <TableContainer
          sx={{
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: "12px",
            boxShadow: 3,
            minWidth: 650,
            maxHeight: 600,
          }}
        >
          <Table aria-label="sticky table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  <Typography fontWeight="bold" variant="h5">
                    Title
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight="bold" variant="h5">
                    Thema
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight="bold" variant="h5">
                    Format
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight="bold" variant="h5">
                    Speaker
                  </Typography>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.id} row={row} onDelete={handleDelete} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

function Row(props) {
  const { row, onDelete } = props;
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const onDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDelete = (suggestion) => {
    onDelete(suggestion);
  };

  return (
    <React.Fragment>
      <DeleteDialog
        suggestion={row}
        open={deleteOpen}
        handleClose={onDeleteClose}
        onDelete={handleDelete}
      />
      <TableRow
        key={row.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            color="secondary"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="left">{row.topic}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.speaker}</TableCell>
        <TableCell align="left">
          <IconButton onClick={() => setDeleteOpen(!deleteOpen)}>
            <DeleteIcon sx={{ "&:hover": { color: "red" } }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight="bold">Abstract:</Typography>
              </TableCell>
              <TableCell align="left">{row.abstract}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight="bold">Speaker Short Info:</Typography>
              </TableCell>
              <TableCell align="left">{row.speakerShortInfo}</TableCell>
            </TableRow>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function DeleteDialog(props) {
  const { suggestion, open, handleClose, onDelete } = props;

  const handleBackdropClick = () => {
    handleClose();
  };

  const handleDeleteClose = () => {
    handleClose();
  };

  const handleDelete = () => {
    onDelete(suggestion);
    handleClose();
  };

  return (
    <Dialog
      onBackdropClick={handleBackdropClick}
      open={open}
      PaperProps={{ sx: { width: "400px", height: "250px" } }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle variant="h4" sx={{ mt: 2 }}>
          Eintrag löschen?
          <IconButton
            aria-label="close"
            onClick={handleDeleteClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
            {suggestion.title} löschen?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              color="error"
              variant="contained"
              align="center"
              sx={{ mr: 2 }}
              onClick={handleDelete}
            >
              Löschen
            </Button>
            <Button
              type="submit"
              variant="contained"
              align="center"
              sx={{ ml: 2 }}
              onClick={handleDeleteClose}
            >
              Cancel
            </Button>
          </Box>
        </DialogContent>
      </Container>
    </Dialog>
  );
}
