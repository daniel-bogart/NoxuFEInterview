import React from "react";

const Button = ({ children, theme, Icon, Icon2 }) => {
  const themeMap = {
    primary: "text-slate-900 text-sm",
    secondary: "text-orange text-base",
    tertiary: "text-red text-sm",
  };
  return (
    <button className={`py-2 px-4 inter flex-row rounded-md border border-slate-300 ${themeMap[theme]}`}>
      {Icon && <Icon />}
      {children}
      {Icon2 && <Icon2 />}
    </button>
  );
};

export default Button;
