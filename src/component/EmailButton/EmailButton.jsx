import React from "react";

function EmailButton() {
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
      className="m-2 btn theme4font bg-black border-white hover:border-sky-200 hover:shadow-lg border-0.5 hover:shadow-sky-700 hover:bg-slate-600 hover:text-slate-100 transition-all ease-in-out "
    >
      Send Me an Email
    </button>
  );
}

export default EmailButton;
