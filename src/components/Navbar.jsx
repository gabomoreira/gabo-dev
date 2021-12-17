import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  badge: {
    marginRight: theme.spacing(2),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  input: {
    color: "white !important",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });
  return (
    <Appbar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Gabo Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          GABO
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications color="action" />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
          />
        </div>
      </Toolbar>
    </Appbar>
  );
};

export default Navbar;
