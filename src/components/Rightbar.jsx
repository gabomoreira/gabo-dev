import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: "15px !important",
    fontSize: "16px !important",
    color: "#555 !important",
  },
  divider: {
    margin: "2.5px 0",
    border: "none",
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20, width: "max-content" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        cols={2}
        rowHeight={100}
        variant="quilted"
        style={{ marginBottom: 20 }}
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Sport
      </Link>
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Food
      </Link>
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Life
      </Link>
      <Divider
        flexItem
        sx={{ bgcolor: (theme) => theme.palette.divider }}
        style={{
          border: "none",
          margin: "2.5px 0",
        }}
      />
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Music
      </Link>
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Movies
      </Link>
      <Link
        href="#"
        className={classes.link}
        underline="none"
        underline="hover"
        variant="body2"
      >
        Science
      </Link>
    </Container>
  );
};

export default Rightbar;
