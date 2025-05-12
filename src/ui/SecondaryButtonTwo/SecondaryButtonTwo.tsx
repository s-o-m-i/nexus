import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const SecondaryButtonTwo: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 
        border border-gray-300 
        bg-white 
        text-gray-700 
        rounded-xl 
        shadow-sm 
        hover:bg-gray-100 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-gray-400
        transition duration-150 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default SecondaryButtonTwo;
