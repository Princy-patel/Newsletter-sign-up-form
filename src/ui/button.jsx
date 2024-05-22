import React from "react";

function Button({ event, children }) {
  return (
    <button
      className="bg-[#36384e] font-bold text-white w-full p-3 rounded-md hover:bg-[#ff6257] hover:drop-shadow-2xl"
      onClick={event}
    >
      {children}
    </button>
  );
}

export default Button;
