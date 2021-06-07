import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, Typography, Box, Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { LayoutConfig } from 'constants/index';
import { UserProfileContext } from 'contexts';

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

export const Profile = () => {
  const classes = useStyles();

  // Declare data hook
  //   const [stories, setStories] = React.useState([]);
  const { profile } = React.useContext(UserProfileContext);

  // A function getting data by calling the API
  //   const fetchData = React.useCallback (() => {
  //     API.getStories()
  //       .then( response => setStories(response.data.data))
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     console.log({profile});
  //   },[profile]);

  //   // Call the fetchData function to get data from api when the component is being loaded
  //   React.useEffect(() => {
  //     fetchData();
  //   },[fetchData]);

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
      
      <Card className={classes.card} >
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg" // TO BE: Story avatar
            title="Contemplative Reptile"
        /> */}
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> 
              Email: {profile.emailId}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
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
        
        
        </CardActions> */}
      </Card>
      
      
    </Container>
  </Box>);
};
