import React from 'react';
import { Box, Container } from '@material-ui/core';
import { LayoutConfig } from 'constants/index';
import {StoryArAPI} from 'helpers';


export const Home = () => {
  // Declare data hook
  const [stories, setStories] = React.useState();

  React.useEffect(() => {
    StoryArAPI.getStories().then( response => setStories(response.data.data));
    console.log("test");
  },[]);

  const test = () => {
    console.log("Test: ", {stories});
  };

  test();

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
      {stories.map(story => <div key={story._id}> {story.title} </div>)}
      
    </Container>
  </Box>);
};
