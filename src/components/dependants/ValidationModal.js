import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
/**
* 17/09/2019 : Options for actionsButtons are moved inside options
* Note v 0.2.0-alpha : Update Your code accordingly previous params maybe depreceted in future versions.
*
*
* Params to send are as follows:
* @isOpen : type<Boolean> : toggles the Modal
* @dialogTitle : type<String> : Title for the modal
* @dialogContent : type<Node/Component> : Component to be displayed as component
* @options : type <Object> : options for component controling
*          @submitButtonName : type<String> : Custom name for the submit button
*          @closeButtonName : type<String> : Custom name for cancel button
*          @disableSubmit : type<Boolean> : disable submit Button
*          @disableClose : type<Boolean> : disable close Button
*          @onClose : type<function> : function to perform onClose
*          @onSubmit : type<function> : function to perfrom onSubmit
*          @swapButtonColors : type<Boolean> : Swap Action Button Colors
*/
export const ValidationModal = (props) => {
  const [_DialogTitle, _setDialogTitle] = useState('');
  const [_DialogContent, _setDialogContent] = useState('');
  const [submitButtonName, setSubmitButtonName] = useState('Submit');
  const [cancelButtonName, setCancelButtonName] = useState('Close');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [disableClose, setDisableClose] = useState(false);
  const [swapButtonColors, setSwapButtonColors] = useState(false);
  
  useEffect(() => {
    if (props.dialogTitle)
      _setDialogTitle(props.dialogTitle);
    if (props.dialogContent)
      _setDialogContent(props.dialogContent);
    if (props.submitButtonName)
      setSubmitButtonName(props.submitButtonName);
    if (props.cancelButtonName)
      setCancelButtonName(props.cancelButtonName);
    if (props.options) {
      if (props.options.submitButtonName)
        setSubmitButtonName(props.options.submitButtonName);
      if (props.options.closeButtonName)
        setCancelButtonName(props.options.closeButtonName);
      if (props.options.disableSubmit)
        setDisableSubmit(true);
      if (props.options.disableClose)
        setDisableClose(true);
      if (props.options.swapButtonColors)
        setSwapButtonColors(props.options.swapButtonColors);
    }
  }, [props]);
  const onClose = () => {
    if (props.options !== undefined) {
      if (props.options.onClose !== undefined) {
        return props.options.onClose();
      }
    }
    if (props.onClose !== undefined) {
      props.onClose();
    }
  };
  const onSubmit = () => {
    if (props.options !== undefined) {
      if (props.options.onSubmit !== undefined) {
        return props.options.onSubmit();
      }
    }
    if (props.onClose !== undefined) {
      return props.onSubmit();
    }
  };
  let content = (
    <Dialog fullWidth={true} open={props.isOpen} onClose={onClose} aria-labelledby="form-dialog-title"  >
      <DialogTitle id="form-dialog-title">{_DialogTitle}</DialogTitle>
      <DialogContent>{_DialogContent}</DialogContent>
      <DialogActions>
        {disableClose !== true && <Button variant="contained" style={{ backgroundColor: "#fdb594", color: "black" }} onClick={onClose} color={swapButtonColors ? 'primary' : 'secondary'}>{cancelButtonName}</Button>}
        {disableSubmit !== true && <Button variant="contained" style={{ backgroundColor: "#c0e093", color: "black" }} onClick={onSubmit} color={swapButtonColors ? 'secondary' : 'primary'}>{submitButtonName}</Button>}
      </DialogActions>
    </Dialog>
  );
  return content;
};