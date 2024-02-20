import React, { useState } from "react";
import Profile from "./profile.tsx";

const Button = () => {
  const [showIcon, setShowIcon] = useState(false);

  const replace = () => {
    setShowIcon(true);
  };

  return (
    <div>
      {showIcon ? (
        <Profile />
      ) : (
        <button
          className="bg-transparent text-white rounded-full px-6 py-2 inline-block text-lg font-semibold text-base cursor-pointer transition duration-500 ease-in-out hover:bg-gray-300"
          onClick={replace}>
          LOGIN/SIGN UP
        </button>
      )}
    </div>
  );
};

export default Button;
