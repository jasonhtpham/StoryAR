import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
=======
import { makeStyles } from '@material-ui/styles';
>>>>>>> jason-storybyid
const useStyles = makeStyles(() => ({
  content: {
    display: 'contents'
  }
}));

export const HeaderElements = (props) => {
  const classes = useStyles();
  return (<div className={classes.content}>{props.children}</div>);
};
HeaderElements.propTypes = {
  children: PropTypes.node.isRequired
};
