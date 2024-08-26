import React from "react";

const EmailButton = () => {
  const emailAddress = "dennisyau96@gmail.com";
  const subject = "";
  const body = "";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      onClick={handleEmailClick}
      className=" btn theme4font border-sky-300 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-700 hover:bg-slate-300 hover:text-slate-500 transition-all ease-in-out "
    >
      Send Me Email
    </button>
  );
};

export default EmailButton;
