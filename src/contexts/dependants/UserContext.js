import React, { createContext, useState, useEffect, useContext } from 'react';
import { LoginContext } from 'contexts';
import { API } from 'helpers';
import PropTypes from 'prop-types';

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const { accessToken } = useContext(LoginContext);
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (accessToken) {
      API.getUserProfileData(accessToken, (data) => {
        setProfile(data.customerData);
      });
    }
  }, [accessToken]);

  return <UserProfileContext.Provider value={{ profile, setProfile }}>{children}</UserProfileContext.Provider>;
};

UserProfileProvider.propTypes = {
  children: PropTypes.node
};