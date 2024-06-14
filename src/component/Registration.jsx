import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

function Registration() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("in");  
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const phoneInputRef = useRef(null);

  const handleChange = (value, country) => {
    setPhoneNumber(value);
    setCountryCode(country.countryCode.toUpperCase());
    const phoneNumberParsed = parsePhoneNumberFromString(value, country.countryCode.toUpperCase());
    setValid(phoneNumberParsed ? phoneNumberParsed.isValid() : false);
  };

  const handleSubmit = () => {
    if (valid) {
      const phoneNumberParsed = parsePhoneNumberFromString(phoneNumber, countryCode);
      const phoneWithoutCountryCode = phoneNumberParsed.nationalNumber;
      navigate(`/registration/otpPage/${phoneWithoutCountryCode}`);
    }
  };

  return (
    <div className="register-form">
      <div className="register-title">Have you registered with us before?</div>
      <p className="register-subtitle">Enter your mobile number</p>
      <label>
        <div className="phone-input-field">
          <PhoneInput
            ref={phoneInputRef}
            containerClass="phone-input"
            buttonClass="phone-input-button"
            inputClass="phone-input-text"
            value={phoneNumber}
            country={countryCode} 
            onChange={handleChange}
          />
        </div>
      </label>
      {!valid && <p>Please enter a valid phone number</p>}
      <button onClick={handleSubmit} className="continue-button">
        CONTINUE
      </button>
    </div>
  );
}

export default Registration;
