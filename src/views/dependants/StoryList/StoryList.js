import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, CardActions, Button, Typography, Box, Container, makeStyles, createStyles } from '@material-ui/core';
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
    display: 'flex',
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
    justifyContent: 'center',
    backgroundColor: theme.palette.success.main,
    color: theme.palette.text.primary
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
            <Link to={`/story/${story._id}`} style={{ textDecoration: 'none' }}>
              <Button className={classes.playButton} size="medium" color="primary">
                  Play
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
      
    </Container>
  </Box>);
};
