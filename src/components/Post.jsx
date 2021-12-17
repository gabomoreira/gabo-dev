import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  image: {
    height: "280px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={`https://esquadraonerds.com/wp-content/uploads/2021/09/FALsE0sXoAAIc1e.jpeg`}
          alt="Blue Period"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            Blue Period
          </Typography>
          <Typography variant="body2">
            In his sophomore to final year of high school, the dispassionate but
            studious Yataro Yaguchi finally finds a calling in art. With no
            prior art experience, he decides to work to apply to an art
            university. A decision with potentially disastrous results.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
