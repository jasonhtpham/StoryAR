import React from 'react';
import { Box, Container, TextField, Grid, Typography, Paper, FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { LayoutConfig } from 'constants/index';
// import { classes } from '../../../../node_modules/coa/coa';
// import {StoryArAPI} from 'helpers';

const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
  },
}));

export const Dashboard = () => {
  const classes = useStyles();

  const [aim, setAim] = React.useState(null);

  const handleChange = (event) => {
    setAim(event.target.value);
  };

  

  // const renderAssetInputs = () => {
  //   for (let i = 0 ; i < assetAmount ; i++) {
  //     document.getElementById("assets").appendChild(
  //       <React.Fragment>
  //         <Grid item xs={12}>
  //           <TextField
  //             required
  //             id={`assetType${i}`}
  //             name="assetType"
  //             label="Asset Type"
  //             fullWidth
  //           />
  //         </Grid>
  //         <Grid item xs={6} sm={6}>
  //           <TextField
  //             required
  //             id={`asset${i}Lat`}
  //             name="lat"
  //             label="Latitude"
  //           />
  //         </Grid>
  //         <Grid item xs={6} sm={6}>
  //           <TextField
  //             required
  //             id={`asset${i}Long`}
  //             name="long"
  //             label="Longtitude"
  //           />
  //         </Grid>
  //       </React.Fragment>);
  //   }
  // };

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
      <Paper className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Add new story
        </Typography>
        <form>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="title"
                name="title"
                label="Story title"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={2}
                fullWidth
                placeholder="A brief description of the story"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="aim">Aim</InputLabel>
                <Select
                  required
                  labelId="aim"
                  id="aim-select-outlined"
                  value={aim}
                  onChange={handleChange}
                  label="Aim"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="FindAll"> Find All </MenuItem>
                  <MenuItem value="FindOne"> Find One </MenuItem>
                  <MenuItem value="FindAny"> Find Any </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  required
                  id="assetAmountInput"
                  name="assetAmountInput"
                  label="No. of assets"
                  xs = {6}
                  type="number"
                  InputProps={{
                    inputProps: { 
                      max: 5, min: 1
                    }
                  }}
                />
              </FormControl>
            </Grid>

            {/* <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              
            </Grid> */}
          </Grid>
        </form>
      </Paper>
      
    </Container>
  </Box>);
};
