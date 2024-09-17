import React, { useEffect } from 'react';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import './ToastMessage.less';

const ToastMessage = (props) => {
  const {
    open, options, toastType,
    onClose, onClick, onDismiss,
    className = '', position,
  } = props;

  const defaultOptions = {
    type: 'info',
    animation: 'bounce',
    time: 2000,
  };

  // position---
  // 'top-right'
  // 'top-center'
  // 'top-left'
  // 'bottom-right'
  // 'bottom-center'
  // 'bottom-left'

  useEffect(() => {
    if (open === true) {
      toast({
        ...defaultOptions,
        ...options,
        onClose,
        onClick,
        onDismiss,
      });
    }
  }, [props]);

  return (
    <SemanticToastContainer
      position={position || 'top-right'}
      className={`${className} toast_message ${toastType === 'HRL' ? 'hrl_styles' : ''}`}
      maxToasts={1}
    />
  );
};

export default ToastMessage;
