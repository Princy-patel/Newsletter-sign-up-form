import React, { useState } from "react";
import InputBox from "../ui/inputbox";
import Button from "../ui/button";
import ConfirmationMessage from "./ConfirmationMessage";

const fetaureItems = [
  "Products discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function NewsletterSignup() {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showMessage, setMessage] = useState(false);

  const handleInput = function (e) {
    setInputValue(e.target.value);
  };

  const subscribeToNewsletter = function () {
    if (inputValue.includes("@")) {
      setMessage(true);
    } else {
      setErrorMsg("Valid email required");
      setTimeout(() => {
        setInputValue("");
      }, 2000);
    }
  };
  return (
    <>
      {!showMessage ? (
        <div className="flex items-start justify-center p-6 rounded-xl bg-[#ffffff] text-black">
          <div className="p-5">
            <h1 className="text-5xl font-bold text-[#36384e] py-7">
              Stay updated!
            </h1>
            <p className="py-3">
              Join 60,000+ products managers receiving monthly updates on:{" "}
            </p>
            <ul className="[&>*]:flex [&_span]:px-3 [&_span]:py-1">
              {fetaureItems.map((items, index) => {
                return (
                  <li key={index}>
                    <img src="/icon-list.svg" alt="list-1" />
                    <span>{items}</span>
                  </li>
                );
              })}
            </ul>

            <div className="my-[2vw] [&>*]:py-1">
              <InputBox
                labelName="Email address"
                handleInput={handleInput}
                errorMsg={errorMsg}
              />
            </div>

            <Button event={subscribeToNewsletter}>
              Subscribe to monthly newsletter
            </Button>
          </div>

          <div>
            <img src="/illustration-sign-up-desktop.svg" alt="" />
          </div>
        </div>
      ) : (
        <ConfirmationMessage inputValue={inputValue} setMessage={setMessage} setErrorMsg={setErrorMsg}/>
      )}
    </>
  );
}

export default NewsletterSignup;
