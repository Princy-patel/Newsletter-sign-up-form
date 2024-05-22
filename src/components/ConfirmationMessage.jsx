import React from "react";
import Button from "../ui/button";

function ConfirmationMessage({ inputValue, setMessage, setErrorMsg }) {
  const handleDismissButton = function () {
    setMessage(false);
    setErrorMsg("");
  };
  return (
    <div className="bg-white text-black w-2/4 p-[4vw] rounded-3xl">
      <img
        src="/icon-list.svg"
        alt="list"
        width={40}
        height={40}
        className="m-[2vw]"
      />
      <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
      <p className="my-[2vw]">
        A confirmation email has been sent to <b>{inputValue}</b>. Please open
        it and click the button inside to confirm to your subscription.
      </p>

      <Button event={handleDismissButton}>Dismiss Button</Button>
    </div>
  );
}

export default ConfirmationMessage;
