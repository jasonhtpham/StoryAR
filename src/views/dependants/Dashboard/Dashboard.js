import React from 'react';
import { Box, Container } from '@material-ui/core';
import { LayoutConfig } from 'constants/index';
// import {StoryArAPI} from 'helpers';

// const useStyles = makeStyles(theme => createStyles({
//   root: {
//     padding: theme.spacing(2),
//     margin: theme.spacing(2),
//     width: "50%"
//   }
// }));

export const Dashboard = () => {
  /*
  const classes = useStyles();

  // Declare data hook
  const [story, setStory] = React.useState([]);

  // A function getting data by calling the API
  const prepData = React.useCallback (() => {
    StoryArAPI.getStories()
      .then( response => setStories(response.data.data))
      .catch(err => {
        console.log(err);
      });
  },[]);

  const postData = React.useCallback (() => {
    StoryArAPI.getStories()
      .then( response => setStories(response.data.data))
      .catch(err => {
        console.log(err);
      });
  },[]);
  */

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

      

    </Container>
  </Box>);
};
