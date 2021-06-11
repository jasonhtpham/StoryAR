import React, { useContext } from 'react';
import { LoginContext, UserProfileContext } from 'contexts';
import { Redirect } from 'react-router-dom';
import { API } from '../../../helpers';
import { LoadingScreen } from 'components/index';

export const LoginRouter = () => {
  const { loginStatus } = useContext(LoginContext);
  const { setProfile, profile } = useContext(UserProfileContext);

  if (!loginStatus)
    return <Redirect to={{ pathname: '/login' }} />;

  if (profile === undefined) {
    API.accessTokenLogin((response) => {
      setProfile(response.data.data.userDetails);
    });
    return <LoadingScreen />;
  }


  //   if (profile === undefined || (profile !== undefined && !profile.firstLogin)) {
  //     return <Redirect to={{ pathname: '/change-password' }} />;
  //   } 
  
  if (profile !== undefined && profile.profileSetup !== undefined && profile.profileSetup !== null && !profile.profileSetup) {
    return <Redirect to={{ pathname: '/profile-setup' }} />;
  }

  if (profile !== undefined && profile.profileSetup !== undefined && profile.profileSetup !== null && profile.profileSetup) {
    return <Redirect to={{ pathname: '/story' }} />;
  }
};