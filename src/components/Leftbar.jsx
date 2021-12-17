import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2.8),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "Pointer",
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <GroupIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideocamIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <AppsIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
