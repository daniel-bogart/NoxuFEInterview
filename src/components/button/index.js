import React from "react";

const Button = ({ children, theme, Icon, Icon2 }) => {
  const themeMap = {
    primary: "text-slate-900 text-sm hover:bg-slate-300 hover:text-white",
    secondary: "text-orange text-base text-md",
    tertiary: "text-red text-sm border-red",
  };
  return (
    <button
      className={`py-2 px-4 inter flex-row rounded-md border border-slate-300 transition hover:scale-105 ${themeMap[theme]}`}
    >
      {Icon && <Icon />}
      {children}
      {Icon2 && <Icon2 />}
    </button>
  );
};

export default Button;
