/***
 *  Created by Sanchit Dang
 ***/
import React, { useState, useContext } from 'react';
import { Typography, Box, Divider, Container, Card, CardContent, Link, TextField, Button, CardActionArea, Fab } from '@material-ui/core';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles, createStyles } from '@material-ui/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { API } from 'helpers';
import { UserProfileContext } from 'contexts';
 
 
const useStyles = makeStyles(() => createStyles({
  developMessage: {
    position: 'absolute',
    bottom: '2vh',
    margin: 'auto',
    width: '100%'
  },
  input: {
    display: "none"
  },
  button: {
    margin: 10
  },
}));
 
 
export const ProfileSetup = withRouter(( {history} ) => {
  const classes = useStyles();
  const [pageHeading] = useState('Setup Profile');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false);
 
  //   const { deviceName, deviceUUID } = useContext(DeviceInfoContext);
  const { setProfile } = useContext(UserProfileContext);
    
  const setupProfile = async () => {
    let payload = {
      about: about,
    };

    API.initialProfileSetup(payload, () => {
      API.getUserProfile(data => {
        setProfile(data.customerData);
        history.replace('/loginRouter');
      });
    });
  };

  const handleUploadClick = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
    console.log(url); 
    setImageUploaded(true);
  };

  const imageResetHandler = () => {
    setImage(null);
    setImageUploaded(false);
  };

  let form = (<form noValidate>
    <TextField variant="outlined" margin="normal" required fullWidth id="about" label="About" name="about" multiline row={3} onChange={e => setAbout(e.target.value)} autoFocus />
    <Box sx={{ mt: 2 }}>
      <Button fullWidth variant="contained" color="primary" onClick={setupProfile}>Save</Button>
    </Box>
  </form>);

  let renderImage = (
    <CardActionArea onClick={imageResetHandler}>
      <img
        width="100%"
        src={image}
      />
    </CardActionArea>
  );

  let renderImageUpload = (
    <React.Fragment>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUploadClick}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
    </React.Fragment>
  );
  
  let content = (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ py: '80px' }}
      >
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 4
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3
              }}
            >
              <div>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h4"
                >
                  {pageHeading}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                   Provide your information
                </Typography>
              </div>
            </Box>
            
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              {imageUploaded ? renderImage : renderImageUpload}
              {form}
            </Box>
            <Divider sx={{ my: 3 }} />
            <Link
              color="textSecondary"
              component={RouterLink}
              to="/login"
              variant="body2"
            >
               Having an account
            </Link>
          </CardContent>
        </Card>
      </Container>
      <Box mt={5}>
        <Typography className={classes.developMessage} variant="body2" color="textSecondary" align="center">
           Developed by Deakin Launchpad
        </Typography>
      </Box>
    </Box>
 
  );
  return content;
});
 