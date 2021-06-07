/***
*  Created by Sanchit Dang
***/
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginContext } from 'contexts';
import { Login, Register, StoryList, MobileMenu, FourOFour, StoryAr, StoryMap, Dashboard, LoginRouter, Profile, ProfileSetup } from 'views';
import { Layout } from './layout';
import { LayoutConfig } from 'constants/index';
import { LoadingScreen } from 'components';
import { AuthCallback } from 'views/index';

export const AppRoutes = (props) => {
  const { loginStatus } = useContext(LoginContext);
  let landingPage = (LayoutConfig.landingPage !== undefined ? LayoutConfig.landingPage !== '' ? LayoutConfig.landingPage : '/story' : '/story');
  if (loginStatus === undefined) return <LoadingScreen />;
  return (
    <Switch>
      <Route exact path='/' render={() => (((!loginStatus) ? <Redirect to={{ pathname: '/login' }} {...props} /> : <Redirect to={{
        pathname: landingPage
      }} {...props} />))} />
      <Route exact path='/loginRouter' render={() => (!loginStatus ? <Redirect to={{ pathname: '/login' }} {...props} /> : <LoginRouter  {...props} />)} />
      <Route exact path='/profile-setup' render={() => (!loginStatus ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout disableBottomToolbar={true}><ProfileSetup  {...props} /></Layout>)} />
      <Route exact path='/auth/callback/:ssoToken' render={(props) => <AuthCallback {...props} />} />
      <Route exact path='/login' render={() => ((!loginStatus ? <Login  {...props} /> : <Redirect to={{ pathname: landingPage }} {...props} />))} />
      <Route exact path='/register' render={() => ((!loginStatus ? <Register {...props} /> : <Redirect to={{ pathname: landingPage }} {...props} />))} />
      <Route exact path='/story' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }} {...props} /> : <Layout><StoryList {...props} /></Layout>))} />
      <Route exact path='/profile' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }} {...props} /> : <Layout><Profile {...props} /></Layout>))} />
      <Route exact path='/menu' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout> <MobileMenu  {...props} /></Layout>))} />
      <Route exact path='/story/ar/:id' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout> <StoryAr  {...props} /></Layout>))} />
      <Route exact path='/story/map/:id' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout> <StoryMap  {...props} /></Layout>))} />
      <Route exact path='/dashboard' render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout> <Dashboard  {...props} /></Layout>))} />
      <Route render={() => ((loginStatus === false ? <Redirect to={{ pathname: '/login' }}  {...props} /> : <Layout><FourOFour  {...props} /></Layout>))} />
    </Switch >
  );
};