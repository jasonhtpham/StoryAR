import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext, LoginProvider } from './common/LoginContext';
import { LayoutContext, LayoutProvider } from './common/LayoutContext';
import { DeviceInfoContext, DeviceInfoProvider } from './common/DeviceInfoContext';
import { UserProfileContext, UserProfileProvider } from './dependants/UserContext';

export {
  LoginContext,
  LoginProvider,
  LayoutContext,
  LayoutProvider,
  DeviceInfoContext,
  DeviceInfoProvider,
  UserProfileContext,
  UserProfileProvider
};

export const ContextManager = (props) => {
  const { children } = props;
  return (
    <DeviceInfoProvider>
      <LayoutProvider>
        <LoginProvider>
          <UserProfileProvider>
            {children}
          </UserProfileProvider>
        </LoginProvider>
      </LayoutProvider>
    </DeviceInfoProvider>
  );
};

ContextManager.propTypes = {
  children: PropTypes.node.isRequired
};
