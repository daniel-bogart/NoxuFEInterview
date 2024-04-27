import React from "react";

const HelpButton = () => {
  return (
    <div className="flex flex-row max-w-screen-md w-full">
      <button
        className={`flex items-center justify-center py-2 px-4 inter flex-row rounded-l-md border border-r-0 border-slate-300 transition text-noxu-orange text-base text-md font-semibold bg-white gap-2 group`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 transform group-hover:-translate-y-1"
        >
          <g clip-path="url(#clip0_355_74)">
            <path
              d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
              stroke="#F0671A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 6.66667V10"
              stroke="#F0671A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 13.3333H10.0083"
              stroke="#F0671A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_355_74">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p>Not Confident</p>
      </button>
      <button
        className={`flex items-center justify-center py-2 px-4 inter flex-row rounded-r-md border border-slate-300 transition text-noxu-orange text-base text-md font-semibold bg-white gap-2 group`}
      >
        <p>Human Help</p>
        <svg
          className="transition-transform duration-300 transform group-hover:translate-x-2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16663 10H15.8333"
            stroke="#F0671A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 4.16667L15.8333 10L10 15.8333"
            stroke="#F0671A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default HelpButton;
