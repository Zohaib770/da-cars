import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./Admin.css";

const Profil: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Track current step (1 - email, 2 - OTP, 3 - new password)
  const [savedEmail, setSavedEmail] = useState<string>(''); 
  const [otp, setOtp] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setSavedEmail(localStorage.getItem('benutzeremail') || '');
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/profil/send-otp?email=${savedEmail}`);

    if (response.status === 200) {
      console.log("OTP sent to", savedEmail);
      setOtpSent(true);
      setStep(2);
    } else {
      console.error("Failed to send OTP");
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/profil/validate-otp`,
                                      { email: savedEmail, otp: otp });

    if (response.status === 200) {
      console.log(response.data);
      setStep(3);
    } else {
      console.error("Failed to send OTP");
    }
  };

  const handlePasswordSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setErrorMessage("Die Passwörter stimmen nicht überein. Bitte versuchen Sie es noch einmal.");
      return;
    }
    
    setErrorMessage(null);
    try {
      const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API_URL}/benutzer/admin/update-password`,
          { email: savedEmail, newPassword: newPassword }
      );

      if (response.status === 200) {
        setStep(1);  
        console.log("Password updated successfully:", response.data);
      } else {
          console.error("Failed to update password:", response.data);
      }
    } catch (error) {
        console.error("Error during password change", error);
    }
  };

  return (
    <div className="profil-container">
      <h1>Benutzer Profil</h1>
      <h2>Email: {savedEmail}</h2>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="profil-form">
          <button type="submit" className="profil-button">
            Passwort Zurücksetzen
          </button>
        </form>
      )}

      {step === 2 && otpSent && (
        <form onSubmit={handleOtpSubmit} className="profil-otp">
          <label>
            OTP wurde an die Email adresse geschickt
          </label>
          <label>
            Geben Sie den OTP ein:
          </label>
          <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
          />
          <button type="submit" className="profil-button">
            OTP Bestätigen
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit} className="profil-password-change">
          <div className="password-group">
          <label>
            Neues Passwort:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Bestätigen Sie das Passwort:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          </div>

          {errorMessage && (
            <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
              {errorMessage}
            </div>
          )}
          
          <button type="submit" className="profil-button">
            Passwort Ändern
          </button>
        </form>
      )}
    </div>
  );
};

export default Profil;
