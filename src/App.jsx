import { makeStyles } from "@mui/styles";
import "./App.css";
import Grid from "@mui/material/Grid";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
};

export default App;
