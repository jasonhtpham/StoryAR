import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardActions, makeStyles, createStyles, Box } from '@material-ui/core';
import { useGeoLocation } from 'helpers';
import { LayoutConfig } from 'constants/index';

const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(2),
  }
}));

export const Story = () => {
  const classes = useStyles();
  let [location] = useGeoLocation();
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
      </Grid>
    </Box>);
  return content;
};
