import React from "react";
import { Spinner } from "./spinner";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  bgColor?: string;
  txtColor?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
  className,
  loading = false,
  bgColor = "bg-blue-600",
  txtColor = "text-white",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`relative w-full py-2 px-4 font-semibold rounded-lg
                shadow-md
                  hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]
                  transition-transform duration-300 ease-in-out
                  overflow-hidden flex justify-center items-center gap-2
                  ${bgColor} ${txtColor}
                  ${
                    loading ? "cursor-not-allowed opacity-70" : ""
                  } ${className}`}
    >
      <span
        className="absolute inset-0 bg-[#F5F5F5] opacity-0 rounded-lg 
                   transition-all duration-300 hover:opacity-10"
      ></span>

      {loading ? (
        <Spinner size={20} />
      ) : (
        <span className="relative z-10">{text}</span>
      )}
    </button>
  );
};

export default ButtonPrimary;
