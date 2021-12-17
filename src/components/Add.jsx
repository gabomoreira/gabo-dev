import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: theme.shape.borderRadius,
    position: "fixed",
    bottom: 30,
    right: 30,
  },
  container: {
    width: "500px !important",
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90vw !important",
      height: "90vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenBtn(false);
  };

  const classes = useStyles();
  return (
    <>
      <IconButton color="primary">
        <AddIcon
          className={classes.icon}
          fontSize="large"
          onClick={() => setOpen(true)}
        />
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>
          <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
              <div className={classes.item}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  label="Sinopse"
                  multiline
                  rows={4}
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField select label="Visibility" value="Public">
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Unlisted">Unlisted</MenuItem>
                </TextField>
              </div>
              <div className={classes.item}>
                <FormLabel component="legend">Who can comment?</FormLabel>
                <RadioGroup aria-label="gender" name="row-radio-buttons-group">
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio size="small" />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Custom"
                    disabled
                    control={<Radio size="small" />}
                    label="Custom (Premium)"
                  />
                </RadioGroup>
              </div>
              <div className={classes.item}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    setOpenBtn(true);
                    setOpen(false);
                  }}
                >
                  Create
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red" }}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </Box>
      </Modal>
      <Snackbar open={openBtn} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
