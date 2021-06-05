import React from 'react';
<<<<<<< HEAD:src/views/dependants/Home/Home.js
import { Card, CardContent, CardMedia, CardActionArea, Typography, Box, Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
=======
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, CardActions, Button, Typography, Box, Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
>>>>>>> jason-storybyid:src/views/dependants/StoryList/StoryList.js
import { LayoutConfig } from 'constants/index';
import { StoryArAPI } from 'helpers';

const useStyles = makeStyles(theme => createStyles({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: "50%"
  },
  card: {
    margin: theme.spacing(2),
    width: "50%"
  },
  cardContent: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  playButton: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center'
  }
}));

export const StoryList = () => {
  const classes = useStyles();

  // Declare data hook
  const [stories, setStories] = React.useState([]);

  // A function getting data by calling the API
  const fetchData = React.useCallback (() => {
    StoryArAPI.getStories()
      .then( response => setStories(response.data.data))
      .catch(err => {
        console.log(err);
      });
  },[]);

  // Call the fetchData function to get data from api when the component is being loaded
  React.useEffect(() => {
    fetchData();
  },[fetchData]);

  return (<Box sx={LayoutConfig.defaultContainerSX}>
    <Container
      style={{
        margin: 'auto auto'
      }}
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        px: {
          md: '130px !important'
        }
      }}
    >
      {stories.map(story => (
        <Card className={classes.card} key={story._id}>
          <CardActionArea>
            {/* <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg" // TO BE: Story avatar
              title="Contemplative Reptile"
            /> */}
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {story.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p"> 
                {/* TO BE: story description */}
                TO BE: story description
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Link to={`/story/ar/${story._id}`} style={{ textDecoration: 'none' }} className={classes.playButton}>
                  <Button size="medium" color="primary">
                      Play in AR
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Link to={`/story/map/${story._id}`} style={{ textDecoration: 'none' }} className={classes.playButton}>
                  <Button size="medium" color="primary">
                      Play in Map
                  </Button>
                </Link>
              </Grid>

            </Grid>
            
            
          </CardActions>
        </Card>
      ))}
      
    </Container>
  </Box>);
};
