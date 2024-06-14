import React, { useState, useRef } from 'react';
import { Navigate, useParams } from "react-router-dom";

function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [validOTP, setValidOTP] = useState(false);
  const [error, setError] = useState('');
  const inputs = useRef([]);

  const { phoneNumber } = useParams();

  const formatPhoneNumber = (number) => {
    return number.split('').join(' ');
  };

  const visiblePart = phoneNumber.slice(0, Math.ceil(phoneNumber.length / 2));
  const maskedPart = '*'.repeat(phoneNumber.length - visiblePart.length).split('').join(' ');
  const displayPhoneNumber = `${formatPhoneNumber(visiblePart)} ${maskedPart}`;

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');

      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    const correctOTP = '000000';
// As  of now  to clear otp only validate case is set to 000000. SO please type 6 0's to proceed forward
    if (enteredOTP === correctOTP) {
      setValidOTP(true);
    } else {
      setError('Incorrect OTP. Please try again The default otp is set to 000000');
      setOtp(['', '', '', '', '', '']);
      inputs.current[0].focus();
    }
  };

  return (
    <div className="otp-container">
      <div className='otp-title'>Enter the OTP sent to your mobile number</div>
      <div className="otp-phone-number">{displayPhoneNumber}</div>
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={el => inputs.current[index] = el}
            className="otp-input"
            aria-label={`OTP Digit ${index + 1}`}
          />
        ))}
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="resend-otp">
        Did not receive OTP?<button className="resend-btn" onClick={() => setOtp(['', '', '', '', '', ''])}>Resend</button>
      </div>
      <button type="submit" onClick={handleSubmit} className="submit-btn">
        Submit
      </button>

      {validOTP && <Navigate to="/registration/member" />}
    </div>
  );
}

export default OtpPage;
