import React from 'react'
import woMan from "../assets/wo-1.png";
export const Profile = () => {
  return (
    <div className="flex items-center justify-center h-[48px] w-[fit-content] gap-[30px]  md:h-[48px] md:px-1 md:flex md:w-[380px] md:items-center md:justify-center md:gap-[30px]    lg:h-[48px] lg:px-1 lg:flex lg:w-[380px] lg:items-center lg:justify-center lg:gap-[30px] ">
    <div className=" md:flex md:items-center md:justify-center md:gap-[15px]  lg:flex lg:items-center lg:justify-center lg:gap-[15px]">
      {/* line */}
      <div className="hidden md:block md:h-[40px] md:w-[1px] md:bg-textColor-100 lg:h-[40px] lg:w-[1px] lg:bg-textColor-100 lg:block"></div>
      {/* notifications icon and text*/}
      <div className="hidden md:w-[30px] md:h-[30px] md:bg-customColor-200 md:rounded-[5px] md:flex md:items-center md:justify-center   lg:w-[30px] lg:h-[30px] lg:bg-customColor-200 lg:rounded-[5px] lg:flex lg:items-center lg:justify-center">
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.333008 3.99583C0.333008 1.78899 2.11737 0 4.33345 0H9.66587C11.8753 0 13.6663 1.79652 13.6663 3.99583V12H4.33345C2.12407 12 0.333008 10.2035 0.333008 8.0042V3.99583ZM8.33301 5.33333V6.66667H9.66634V5.33333H8.33301ZM4.33301 5.33333V6.66667H5.66634V5.33333H4.33301Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="hidden md:w-[30px] md:h-[30px] md:bg-customColor-200 md:rounded-[5px] md:flex md:items-center md:justify-center    lg:w-[30px] lg:h-[30px] lg:bg-customColor-200 lg:rounded-[5px] lg:flex lg:items-center lg:justify-center">
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3369 7.66853V12.3352C12.3369 12.7034 12.0385 13.0019 11.6703 13.0019H2.33691C1.96873 13.0019 1.67025 12.7034 1.67025 12.3352V7.66853H12.3369ZM8.67026 0.335205C9.95893 0.335205 11.0036 1.37987 11.0036 2.66854C11.0036 3.02667 10.9229 3.36597 10.7787 3.66923L13.0036 3.66854C13.3718 3.66854 13.6703 3.96701 13.6703 4.3352V6.3352C13.6703 6.7034 13.3718 7.00187 13.0036 7.00187H1.00358C0.635394 7.00187 0.336914 6.7034 0.336914 6.3352V4.3352C0.336914 3.96701 0.635394 3.66854 1.00358 3.66854L3.22845 3.66923C3.08427 3.36597 3.00358 3.02667 3.00358 2.66854C3.00358 1.37987 4.04825 0.335205 5.33691 0.335205C5.99026 0.335205 6.58086 0.603712 7.00439 1.03639C7.42633 0.603712 8.01693 0.335205 8.67026 0.335205ZM5.33691 1.66854C4.78463 1.66854 4.33691 2.11625 4.33691 2.66854C4.33691 3.18833 4.73351 3.61551 5.24061 3.66396L5.33691 3.66854H6.33693V2.66854C6.33693 2.14874 5.94033 1.72157 5.43322 1.67311L5.33691 1.66854ZM8.67026 1.66854L8.57393 1.67311C8.09853 1.71854 7.72026 2.09683 7.67479 2.57223L7.67026 2.66854V3.66854H8.67026L8.76653 3.66396C9.27366 3.61551 9.67026 3.18833 9.67026 2.66854C9.67026 2.14874 9.27366 1.72157 8.76653 1.67311L8.67026 1.66854Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="hidden md:relative md:w-[30px] md:h-[30px] md:bg-customColor-200 md:rounded-[5px] md:flex md:items-center md:justify-center  lg:relative lg:w-[30px] lg:h-[30px] lg:bg-customColor-200 lg:rounded-[5px] lg:flex lg:items-center lg:justify-center">
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.333 11.4444L11.5997 11.7999C11.7101 11.9472 11.6803 12.1561 11.533 12.2666C11.4753 12.3099 11.4051 12.3333 11.333 12.3333H0.666341C0.482248 12.3333 0.333008 12.184 0.333008 11.9999C0.333008 11.9278 0.356401 11.8576 0.399674 11.7999L0.666341 11.4444V5.66658C0.666341 2.72107 3.05415 0.333252 5.99967 0.333252C8.94521 0.333252 11.333 2.72107 11.333 5.66658V11.4444ZM4.33301 12.9999H7.66634C7.66634 13.9204 6.92014 14.6666 5.99967 14.6666C5.07921 14.6666 4.33301 13.9204 4.33301 12.9999Z"
            fill="white"
          />
          
        </svg>
        <div className="md:absolute md:w-[5px] md:h-[5px] md:bg-red-600 md:rounded-full md:top-[5px] md:right-[4px]   lg:absolute lg:w-[5px] lg:h-[5px] lg:bg-red-600 lg:rounded-full lg:top-[5px] lg:right-[4px]"></div>
      </div>
    </div>
    {/* profile card and dropdown menu*/}
    <div className="flex flex-col items-end justify-center gap-1  md:flex md:flex-row md:items-center md:justify-center md:gap-[15px] lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[15px]">
      {/* profile picture */}
      <div className="relative w-[30px] h-[30px] overflow-hidden rounded-full">
        <img
          src={woMan}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      {/* profilename */}
      <p className="text-[10px] text-textColor-100 font-neue4   md:text-[14px] md:text-textColor-100 md:font-neue4   lg:text-[14px] lg:text-textColor-100 lg:font-neue4">
        Joel Henderson
      </p>
      <svg className='hidden lg:block md:block'
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7106 0.266515C10.3264 -0.0888383 9.7058 -0.0888383 9.32161 0.266515L5.49938 3.80182L1.67715 0.266514C1.29296 -0.0888387 0.672338 -0.0888387 0.288145 0.266514C-0.0960474 0.621867 -0.0960475 1.1959 0.288145 1.55125L4.8098 5.73348C5.19399 6.08884 5.81461 6.08884 6.19881 5.73349L10.7205 1.55125C11.0948 1.20501 11.0948 0.621868 10.7106 0.266515Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  )
}
