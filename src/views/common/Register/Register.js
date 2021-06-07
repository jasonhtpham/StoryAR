/***
 *  Created by Sanchit Dang
 ***/
import React, { useContext, useState } from 'react';
import { TextField, Typography, Button, Box, Divider, Container, Card, CardContent, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { notify } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { API } from 'helpers';
import { DeviceInfoContext, UserProfileContext } from 'contexts';


const useStyles = makeStyles(() => createStyles({
  developMessage: {
    position: 'absolute',
    bottom: '2vh',
    margin: 'auto',
    width: '100%'
  }
}));


export const Register = () => {
  const classes = useStyles();
  const [pageHeading] = useState('Register');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const { deviceName, deviceUUID } = useContext(DeviceInfoContext);
  const { setProfile } = useContext(UserProfileContext);

  const register = async () => {
    let payload = {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      countryCode,
      password,
      deviceData: {
        deviceType: "WEB",
        deviceName,
        deviceUUID
      }
    };

    await API.register(payload, (data) => {
      setProfile(data.userDetails);
    });
  };
  const validationCheck = () => {
    if (emailId.length < 0 || password.length < 0 || confirmPassword.length < 0 || firstName.length < 0 || lastName.length < 0
      || emailId === '' || password === '' || confirmPassword === '' || firstName === '' || lastName === '') {
      return notify("Please fill in all the details.");
    }
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailPatternTest = emailPattern.test(emailId);
    if (!emailPatternTest) {
      notify('Email not in proper format');
    }

    let phonePattern = /^\d{9}$/;
    let phonePatternTest = phonePattern.test(phoneNumber);
    if (!phonePatternTest) {
      notify('Phone not in proper format (should be 9 digits)');
    }

    let countryCodePattern = /^\+(\d{1}-)?(\d{1,3})$/;
    let countryCodePatternTest = countryCodePattern.test(countryCode);
    if (!countryCodePatternTest) {
      notify('Phone country code not in proper format');
    }

    if (password !== confirmPassword) {
      return notify("Passwords don't match.");
    }
    if (emailPatternTest && phonePatternTest && countryCodePatternTest && (password === confirmPassword) ) {
      return register();
    }
  };
  let form = (<form noValidate>
    <TextField variant="outlined" margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="email" onChange={e => setFirstName(e.target.value)} autoFocus />
    <TextField variant="outlined" margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="email" onChange={e => setLastName(e.target.value)} />
    <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={e => setEmailId(e.target.value)} />
    <TextField variant="outlined" margin="normal" required fullWidth id="phoneNumber" label="Phone Number" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} />
    <TextField variant="outlined" margin="normal" required fullWidth id="countryCode" label="Phone Country Code" name="countryCode" autoComplete="countryCode" onChange={e => setCountryCode(e.target.value)} />
    <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
    <TextField variant="outlined" margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} autoComplete="current-password" />
    <Box sx={{ mt: 2 }}>
      <Button fullWidth variant="contained" color="primary" onClick={validationCheck}>Register</Button>
    </Box>
  </form>);
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
                  Register on the internal platform
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
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
};
