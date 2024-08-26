import React from "react";

const EmailButton = () => {
  const emailAddress = "dennisyau96@gmail..com";
  const subject = "";
  const body = "";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return <button onClick={handleEmailClick}>Send Me Email</button>;
};

export default EmailButton;
