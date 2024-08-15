import React from "react";

export const Search = () => {
  return (
    <>
      <div className="bg-transparent lg:flex lg:items-center lg:justify-between lg:w-[300px] lg:h-[48px] lg:bg-customColor-200 lg:rounded-[4px]">
        <input
          type="text"
          placeholder="Search game"
          className="hidden  lg:block  lg:outline-none lg:px-4 lg:py-2 lg:bg-transparent lg:placeholder-textColor-100 lg:placeholder-small lg:placeholder:font-neue2 "
        />
        <div className="bg-customColor-300 w-[30px] h-[30px] rounded-[4px] flex items-center justify-center lg:w-[48px] lg:h-[48px] lg:rounded-[4px] lg:flex lg:items-center lg:justify-center">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6465 11.5833H12.8236L12.5319 11.302C13.7819 9.84367 14.4277 7.85409 14.0736 5.7395C13.584 2.84367 11.1673 0.531169 8.25065 0.177003C3.8444 -0.364664 0.136068 3.34367 0.677735 7.74992C1.0319 10.6666 3.3444 13.0833 6.24024 13.5728C8.35482 13.927 10.3444 13.2812 11.8027 12.0312L12.084 12.3228V13.1458L16.5111 17.5728C16.9382 17.9999 17.6361 17.9999 18.0632 17.5728C18.4902 17.1458 18.4902 16.4478 18.0632 16.0208L13.6465 11.5833ZM7.39648 11.5833C4.80273 11.5833 2.70898 9.4895 2.70898 6.89575C2.70898 4.302 4.80273 2.20825 7.39648 2.20825C9.99023 2.20825 12.084 4.302 12.084 6.89575C12.084 9.4895 9.99023 11.5833 7.39648 11.5833Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
