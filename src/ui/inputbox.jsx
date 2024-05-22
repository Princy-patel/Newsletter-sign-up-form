import React from "react";

function InputBox({ handleInput, labelName, errorMsg }) {
  return (
    <>
      <div className="flex justify-between text-[#ff6257] font-bold">
        <label htmlFor={labelName} className="font-bold text-[#36384e]">
          {labelName}
        </label>
        {errorMsg.length > 0 && <p>{errorMsg}</p>}
      </div>
      <div>
        <input
          type="email"
          className={`border-2 rounded-md px-4 py-2 font-semibold border-slate-400 w-full ${
            errorMsg.length > 0 &&
            "bg-[#f5dcda] border-[#ff6257] text-[#ff6257]"
          }`}
          id={labelName}
          onChange={handleInput}
          placeholder="email@company.com"
        />
      </div>
    </>
  );
}

export default InputBox;
