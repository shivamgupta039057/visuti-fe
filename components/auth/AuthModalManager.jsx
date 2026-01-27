"use client";

import React, { useState } from 'react';
import SignInModal from './SignInModal';
import LoginWithOtpModal from './LoginWithOtpModal';
import RegisterModal from './RegisterModal';

const AuthModalManager = ({ isOpen, onClose, initialModal = 'signin' }) => {
  const [currentModal, setCurrentModal] = useState(initialModal);

  if (!isOpen) return null;

  const handleClose = () => {
    setCurrentModal('signin'); // Reset to signin when closing
    onClose();
  };

  const handleOpenMobileLogin = () => {
    setCurrentModal('mobileLogin');
  };

  const handleOpenRegister = () => {
    setCurrentModal('register');
  };

  const handleBackToSignIn = () => {
    console.log('AuthModalManager: handleBackToSignIn called');
    setCurrentModal('signin');
  };

  switch (currentModal) {
    case 'signin':
      return (
        <SignInModal
          isOpen={true}
          onClose={handleClose}
          onOpenMobileLogin={handleOpenMobileLogin}
          onOpenRegister={handleOpenRegister}
        />
      );

    case 'mobileLogin':
      return (
        <LoginWithOtpModal
          open={true}
          onClose={handleClose}
          onBackToSignIn={handleBackToSignIn}
        />
      );

    case 'register':
      return (
        <RegisterModal
          isOpen={true}
          onClose={handleClose}
          onSwitchToLogin={handleBackToSignIn}
        />
      );

    default:
      return null;
  }
};

export default AuthModalManager;