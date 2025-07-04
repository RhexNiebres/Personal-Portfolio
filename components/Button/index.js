import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, className }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark"
            ? "bg-white text-black border-2 border-slate-100"
            : "bg-black text-white shadow-2xl border-2 border-black"
        } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          data.showCursor ? "cursor-none" : ""
        } ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white border-2 border-slate-100"
          : "hover:bg-slate-100 shadow-2xl border-2 border-black"
      } hover:scale-105 active:scale-100 tablet:first:ml-0 ${
        data.showCursor ? "cursor-none" : ""
      } ${className} link`}
    >
      {children}
    </button>
  );
};

export default Button;
