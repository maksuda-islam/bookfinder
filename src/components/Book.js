import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  media: {
    height: 200
  },
  content: {
    height: 150
  },
});

const Book = (props) => {
  const classes = useStyles();

  return (
    <Grid
        // container
        // spacing={2}
        direction="row"
        // justify="flex-start"
        // alignItems="flex-start"
      >
    <Grid item xs={12} sm={6} md={3} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
           {props.data.volumeInfo.imageLinks == undefined ? (
            <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: "10", height: "20" }}
            />
        ) : (
                <img
                    src={props.data.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    style={{ width: "10", height: "20" }}
                />
            )}
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
          {props.data.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.data.volumeInfo.authors == undefined ? (
                        <p><h7>No Author Infos</h7></p>
                    ) : (
                       <p> {props.data.volumeInfo.authors[0]} </p>
                    )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={{pathname: "/book/" + (props.data.volumeInfo.title).replace(/ /g, ''), title: props.data.volumeInfo.title ,  
                    subtitle: props.data.volumeInfo.subtitle, publisher: props.data.volumeInfo.publisher
                     , publishedDate:props.data.volumeInfo.publishedDate, description:props.data.volumeInfo.description  }}>See Details</Link>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}
export default Book;