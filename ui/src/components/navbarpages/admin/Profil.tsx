import React, { useState } from 'react';
import './Admin.css';

const Profil: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Track current step (1 - email, 2 - OTP, 3 - new password)
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // Function to handle email submission and request OTP
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending OTP (replace with API call)
    console.log('Sending OTP to email:', email);
    
    setStep(2); // Move to OTP step
  };
  
  // Function to handle OTP submission
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate OTP validation (replace with API call)
    if (otp === '123456') {
      console.log('OTP valid');
      setStep(3); // Move to password reset step
    } else {
      alert('Ungültiger OTP');
    }
  };

  // Function to handle password reset submission
  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Passwörter stimmen nicht überein.');
      return;
    }

    // Simulate password reset (replace with API call)
    console.log('New password:', newPassword);
    alert('Passwort erfolgreich geändert!');
    setStep(1); // Go back to the email step
  };

  return (
    <div className="profil-container">
      <h1>Passwort zurücksetzen</h1>
      
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="profil-form">
          <div className="form-group">
            <label htmlFor="email">E-Mail Adresse</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Geben Sie Ihre E-Mail ein"
            />
          </div>
          <button type="submit" className="submit-button">
            OTP anfordern
          </button>
        </form>
      )}
      
      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="profil-form">
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="Geben Sie den OTP ein"
            />
          </div>
          <button type="submit" className="submit-button">
            OTP bestätigen
          </button>
        </form>
      )}
      
      {step === 3 && (
        <form onSubmit={handlePasswordReset} className="profil-form">
          <div className="form-group">
            <label htmlFor="newPassword">Neues Passwort</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Neues Passwort"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Passwort bestätigen</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Passwort bestätigen"
            />
          </div>
          <button type="submit" className="submit-button">
            Passwort zurücksetzen
          </button>
        </form>
      )}
    </div>
  );
};

export default Profil;
