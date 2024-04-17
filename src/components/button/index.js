import React from "react";

const Button = ({ children, theme }) => {

  const themeMap = {
    primary: "text-slate-900 text-sm hover:bg-slate-300 hover:text-white",
    secondary: "text-noxu-orange text-base text-md font-semibold bg-white",
    tertiary: "text-red text-sm border-red",
  };
  return (
    <button
      className={`flex items-center justify-center py-2 px-4 inter flex-row rounded-md border border-slate-300 transition hover:scale-105 ${themeMap[theme]}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
