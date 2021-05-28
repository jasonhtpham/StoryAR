import React from 'react';
import { Box, Container, TextField, Grid, Typography, Paper, FormControl, InputLabel, Select, MenuItem, IconButton, Button, makeStyles, createStyles } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Send from '@material-ui/icons/Send';
import { LayoutConfig } from 'constants/index';
import { v4 as uuidv4 } from 'uuid';
import {StoryArAPI} from 'helpers';
import {EnhancedModal} from 'components';


const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
  },
  assetForm: {
    padding: theme.spacing(3)
  },
  button: {
    marginBottom: theme.spacing(2),
  }
}));

export const Dashboard = () => {
  const classes = useStyles();

  const [modalTitle, setModalTitle] = React.useState('');
  const [modalContent, setModalContent] = React.useState('');
  const [modalStatus, setModalStatus] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [aim, setAim] = React.useState("");
  const [assets, setAssets] = React.useState([
    {
      id: uuidv4(),
      type: "", 
      assetDescription: "",
      longtitude: "",
      latitude: ""
    }
  ]);

  const handleAimChange = (event) => {
    setAim(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddAsset = () => {
    setAssets([...assets, {
      id: uuidv4(),
      type: "", 
      assetDescription: "",
      longtitude: "",
      latitude: ""
    }]);
  };

  const handleRemoveAsset = (id) => {
    const values  = [...assets];
    values.splice(values.findIndex(value => value.id === id), 1);
    setAssets(values);
  };

  const handleChangeAsset = (id, event) => {
    const newAssets = assets.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    
    setAssets(newAssets);
  };

  // Reconstruct asset objects before include in payload
  const prepareAssetsToPost = () => {
    let assetsToPost = [];

    assets.forEach(asset => {
      assetsToPost = [...assetsToPost, {
        assetType: asset.type,
        coordinates: [parseFloat(asset.longtitude), parseFloat(asset.latitude)], //backend expects `coordinates` to be array of [long, lat]
        assetDescription: asset.assetDescription
      }];
    });
    
    return assetsToPost;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const assetsToPost = prepareAssetsToPost();
    
    let payload = {
      title,
      description,
      assets: assetsToPost,
      aim
    };

    // console.log({payload});

    const result = await StoryArAPI.addStory(payload);

    if (result.err) return result.err;

    setModalTitle(`${result.data.data.title} has been created sucessfully`);
    setModalContent(`Story description: ${result.data.data.description}. \n Created on ${result.data.data.creationDate}.`);
    setModalStatus(true);

  };

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

      <EnhancedModal 
        isOpen = {modalStatus}
        dialogTitle={modalTitle}
        dialogContent={modalContent}
        onClose={() => { setModalStatus(false); }}
        options={{
          closeButtonName: "Done",
          disableSubmit: true
        }}
      />

      <Paper className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Add new story
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="title"
                name="title"
                label="Story title"
                fullWidth
                onChange={handleTitleChange}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="aim">Aim</InputLabel>
                <Select
                  required
                  labelId="aim"
                  value={aim}
                  onChange={handleAimChange}
                  label="Aim"
                >
                  <MenuItem value="FindAll"> Find All </MenuItem>
                  <MenuItem value="FindOne"> Find One </MenuItem>
                  <MenuItem value="FindAny"> Find Any </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="outlined-multiline-static"
                label="Description"
                name="description"
                multiline
                rows={2}
                fullWidth
                placeholder="A brief description of the story"
                variant="outlined"
                onChange={handleDescriptionChange}
              />
            </Grid>

            {assets.map((asset, index) =>
              <div key={asset.id} className={classes.assetForm}>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <Typography variant="h6" gutterBottom>
                      Asset {index+1}
                    </Typography>
                  </Grid>

                  <Grid item xs>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRemoveAsset(asset.id)}
                      disabled={assets.length === 1}
                    >
                      Delete
                    </Button>
                  </Grid>
                  
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="type"
                      label="Asset Type"
                      value={asset.type}
                      fullWidth
                      onChange={event => handleChangeAsset(asset.id, event)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="assetDescription"
                      label="Asset Description"
                      value={asset.assetDescription}
                      fullWidth
                      onChange={event => handleChangeAsset(asset.id, event)}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      name="longtitude"
                      value={asset.longtitude}
                      label="Longtitude"
                      fullWidth
                      onChange={event => handleChangeAsset(asset.id, event)}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      name="latitude"
                      value={asset.latitude}
                      label="Latitude"
                      fullWidth
                      onChange={event => handleChangeAsset(asset.id, event)}
                    />
                  </Grid>
                </Grid>
              </div>
            )}

            <Grid item xs={12} sm={12} display="flex" justifyContent="center" alignItems="center">
              <IconButton component="span" color="primary" onClick={handleAddAsset}>
                <Add />
              </IconButton>
            </Grid>

            <Grid item xs={12} sm={12} display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                endIcon={<Send/>}
                type="submit"
              >
                Send
              </Button>
            </Grid>
            
          </Grid>
        </form>
      </Paper>
      
    </Container>
  </Box>);
};
