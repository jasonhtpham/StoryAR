import React from 'react';
import { useParams } from "react-router-dom";
import { Grid, Typography, Button, Card, CardContent, CardActions, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { LayoutConfig } from 'constants/index';
import { StoryArAPI } from 'helpers';
import { useGeoLocation } from 'helpers';

// import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(2),
  }
}));

export const StoryMap = () => {
  const classes = useStyles();
  let [location] = useGeoLocation();
  let params = useParams();
  const [story, setStory] = React.useState([]);

  // A function getting data by calling the API
  const fetchData = React.useCallback (() => {
    StoryArAPI.getStory(params.id)
      .then( response => setStory(response.data.data))
      .catch(err => {
        console.log(err);
      });

  },[params.id]);

  // Call the fetchData function to get data from api when the component is being loaded
  React.useEffect(() => {
    fetchData();
  },[fetchData]);

  let content = (
    <Box className={classes.root} sx={LayoutConfig.defaultContainerSX}>
      <Grid container spacing={1} justifyContent='flex-start' alignItems='flex-start'>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                useLocation Example
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' onClick={() => { console.log(location); }} >
                Console Current Location
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          {story.map(item => 
            <Card key={item._id}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>);
  return content;
};
