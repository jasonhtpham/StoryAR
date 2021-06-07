import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Container, CardHeader, IconButton, TextField, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, createStyles } from '@material-ui/styles';
import { LayoutConfig } from 'constants/index';
import { UserProfileContext } from 'contexts';
import { API } from 'helpers';
import { ValidationModal, notify} from 'components';

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
  },
  lastUpdate: {
    position: 'flex',
    // bottom: '2vh',
    margin: 'auto',
    width: '100%'
  }
}));

export const Profile = () => {
  const classes = useStyles();

  // Declare data hook
  const [isInfoOpen, setInfoOpen] = React.useState(false);
  const [about, setAbout] = React.useState('');
  //   const [lastUpdate, setLastUpdate] = React.useState('');
  const { profile } = React.useContext(UserProfileContext);

  const fetchAdditionalInfo = React.useCallback(() => {

    return API.getAdditionalInfo((response => {
      if (response !== null && response !== undefined) {
        setAbout(response.about);
      }
    }));

  },[]);

  //   Call the fetchData function to get data from api when the component is being loaded
  React.useEffect(() => {
    fetchAdditionalInfo();
  },[fetchAdditionalInfo]);


  const saveInfo = () => {
    if (about === undefined || about === null || about === '')
      return notify("Invlid timezone!");
    API.updateAdditionalInfo({
      about: about
    }, () => {
      API.getAdditionalInfo((response) => {
        if (response.about !== undefined && response.about !== null)
          setAbout(response.about);
        notify("Info updated");
        setInfoOpen(false);
      });
    });
  };

  let infoContent = (
    <div>
      <Grid container direction="row" spacing={1} alignItems="center" justify="center" style={{ marginTop: '2.5vh' }}>
        <Grid item xs={11}>
          <TextField variant="outlined"
            value={about}
            margin="normal" 
            required 
            fullWidth 
            id="about" 
            label="About" 
            name="about" 
            multiline 
            row={3} 
            onChange={e => setAbout(e.target.value)} autoFocus 
          />
        </Grid>
      </Grid>
    </div>
  );

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
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography variant="h6" component="h6"> 
              Email:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
            {profile.emailId}
          </Typography>
        </CardContent>
      </Card>
      
      <Card className={classes.card} >
        <CardHeader
          title="Additional Info"
          action={
            <IconButton aria-label="edit" onClick={() => setInfoOpen(true)}>
              <EditIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h6">
              About: 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
            {about}
          </Typography>
        </CardContent>
      </Card>

      <ValidationModal
        isOpen={isInfoOpen}
        dialogTitle="Edit Additional Info"
        dialogContent={infoContent}
        options={{
          submitButtonName: "Save",
          closeButtonName: "Cancel"
        }}
        onClose={() => setInfoOpen(false)}
        onSubmit={() => saveInfo()}
      />
      
    </Container>
  </Box>);
};
