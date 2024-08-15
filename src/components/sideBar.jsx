import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className=" lg:w-[180px] lg:h-[100vh] lg:bg-customColor-200 lg:fixed lg:flex lg:flex-col items-baseline justify-start">
        <div className="hidden lg:relative lg:flex lg:w-full h-[100px] ">
          {" "}
          <p className="hidden lg:absolute lg:top-[25px] lg:right-[50px] lg:block lg:font-custom lg:text-textColor-100 lg:text-[20px]">
            Boardman
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center gap-0  lg:w-full h-[180px] border-b-[0.5px] border-slate-400">
          {/* sidebar text */}
          <div className="relative w-full h-[40px] bg-customColor-100">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 7.75H6.25V0.25H0.25V7.75ZM0.25 13.75H6.25V9.25H0.25V13.75ZM7.75 13.75H13.75V6.25H7.75V13.75ZM7.75 0.25V4.75H13.75V0.25H7.75Z"
                  fill="white"
                />
              </svg>
              <p className="font-neue4 text-textColor-100 text-[14px]">Dashboard</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75392 10.7056V12.2519H13.5039V13.7519H4.50391V12.2519H8.25392V10.7056C5.29417 10.3365 3.00391 7.81169 3.00391 4.75195V0.251953H15.0039V4.75195C15.0039 7.81169 12.7136 10.3365 9.75392 10.7056ZM0.753906 1.75195H2.25391V4.75195H0.753906V1.75195ZM15.7539 1.75195H17.2539V4.75195H15.7539V1.75195Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Leaderboard</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.5C10.3411 0.5 12.4317 1.57266 13.8071 3.25331L9.06065 8L13.8071 12.7467C12.4317 14.4273 10.3411 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2.75C7.3787 2.75 6.875 3.25368 6.875 3.875C6.875 4.49632 7.3787 5 8 5C8.6213 5 9.125 4.49632 9.125 3.875C9.125 3.25368 8.6213 2.75 8 2.75Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Gaming</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 0C15.2353 0 17.25 2.01472 17.25 4.5V7.5C17.25 9.98527 15.2353 12 12.75 12H5.25C2.76472 12 0.75 9.98527 0.75 7.5V4.5C0.75 2.01472 2.76472 0 5.25 0H12.75ZM7.5 3.75H6V5.25H4.5V6.75H5.99925L6 8.25H7.5L7.49925 6.75H9V5.25H7.5V3.75ZM13.5 6.75H12V8.25H13.5V6.75ZM12 3.75H10.5V5.25H12V3.75Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Tournament</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex  lg:w-full h-[180px] flex-col border-b-[0.5px] border-slate-400">
          <div className="relative w-full h-[40px]">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.5C9.65682 6.5 11 5.15685 11 3.5C11 1.84314 9.65682 0.5 8 0.5C6.34314 0.5 5 1.84314 5 3.5C5 5.15685 6.34314 6.5 8 6.5ZM3.125 8.75C4.16053 8.75 5 7.91052 5 6.875C5 5.83947 4.16053 5 3.125 5C2.08947 5 1.25 5.83947 1.25 6.875C1.25 7.91052 2.08947 8.75 3.125 8.75ZM14.75 6.875C14.75 7.91052 13.9105 8.75 12.875 8.75C11.8395 8.75 11 7.91052 11 6.875C11 5.83947 11.8395 5 12.875 5C13.9105 5 14.75 5.83947 14.75 6.875ZM8 7.25C10.071 7.25 11.75 8.92895 11.75 11V15.5H4.25V11C4.25 8.92895 5.92893 7.25 8 7.25ZM2.75 10.9999C2.75 10.4802 2.8255 9.9782 2.96613 9.5042L2.83898 9.5153C1.52377 9.6578 0.5 10.7718 0.5 12.1249V15.4999H2.75V10.9999ZM15.5 15.4999V12.1249C15.5 10.7283 14.4094 9.58647 13.0338 9.5042C13.1745 9.9782 13.25 10.4802 13.25 10.9999V15.4999H15.5Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Teams</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 16.5C0.5 13.1863 3.18629 10.5 6.5 10.5C9.81372 10.5 12.5 13.1863 12.5 16.5H0.5ZM6.5 9.75C4.01375 9.75 2 7.73625 2 5.25C2 2.76375 4.01375 0.75 6.5 0.75C8.98625 0.75 11 2.76375 11 5.25C11 7.73625 8.98625 9.75 6.5 9.75ZM12.0221 11.4249C14.3361 12.0163 16.0759 14.0426 16.2377 16.5H14C14 14.5427 13.2501 12.7604 12.0221 11.4249ZM10.5051 9.71767C11.7296 8.61915 12.5 7.02455 12.5 5.25C12.5 4.187 12.2235 3.18856 11.7387 2.32265C13.4565 2.66548 14.75 4.18099 14.75 6C14.75 8.07188 13.0719 9.75 11 9.75C10.8322 9.75 10.667 9.73897 10.5051 9.71767Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Friends</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 16.5C0.5 13.1863 3.18629 10.5 6.5 10.5C9.81372 10.5 12.5 13.1863 12.5 16.5H0.5ZM6.5 9.75C4.01375 9.75 2 7.73625 2 5.25C2 2.76375 4.01375 0.75 6.5 0.75C8.98625 0.75 11 2.76375 11 5.25C11 7.73625 8.98625 9.75 6.5 9.75ZM12.0221 11.4249C14.3361 12.0163 16.0759 14.0426 16.2377 16.5H14C14 14.5427 13.2501 12.7604 12.0221 11.4249ZM10.5051 9.71767C11.7296 8.61915 12.5 7.02455 12.5 5.25C12.5 4.187 12.2235 3.18856 11.7387 2.32265C13.4565 2.66548 14.75 4.18099 14.75 6C14.75 8.07188 13.0719 9.75 11 9.75C10.8322 9.75 10.667 9.73897 10.5051 9.71767Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Stream</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5039 2.49976H10.2539C7.76865 2.49976 5.75391 4.51447 5.75391 6.99976C5.75391 9.48504 7.76865 11.4998 10.2539 11.4998H15.5039V12.9998C15.5039 13.414 15.1681 13.7498 14.7539 13.7498H1.25391C0.839696 13.7498 0.503906 13.414 0.503906 12.9998V0.999756C0.503906 0.585538 0.839696 0.249756 1.25391 0.249756H14.7539C15.1681 0.249756 15.5039 0.585538 15.5039 0.999756V2.49976ZM10.2539 3.99976H16.2539V9.99976H10.2539C8.59702 9.99976 7.25392 8.65659 7.25392 6.99976C7.25392 5.3429 8.59702 3.99976 10.2539 3.99976ZM10.2539 6.24976V7.74976H12.5039V6.24976H10.2539Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Wallet</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col  lg:w-full h-[100px]">
          <div className="relative w-full h-[40px]">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 1.74632C0.25 0.919922 0.919465 0.25 1.74632 0.25H12.2537C13.0801 0.25 13.75 0.919465 13.75 1.74632V12.2537C13.75 13.0801 13.0806 13.75 12.2537 13.75H1.74632C0.919922 13.75 0.25 13.0806 0.25 12.2537V1.74632ZM2.76765 11.5H11.3856C10.4369 10.1399 8.86067 9.25 7.07665 9.25C5.29258 9.25 3.71637 10.1399 2.76765 11.5ZM7 7.75C8.44975 7.75 9.625 6.57475 9.625 5.125C9.625 3.67525 8.44975 2.5 7 2.5C5.55025 2.5 4.375 3.67525 4.375 5.125C4.375 6.57475 5.55025 7.75 7 7.75Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Profile</p>
            </div>
          </div>
          <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.46599 0.658071C7.46619 0.448701 8.51101 0.442093 9.53416 0.656008C9.66691 1.52567 10.1791 2.32931 11.0003 2.80339C11.8214 3.27747 12.7735 3.31925 13.5929 2.99935C14.2898 3.77851 14.8065 4.68664 15.1253 5.65751C14.4394 6.20731 14.0003 7.05212 14.0003 7.99952C14.0003 8.94752 14.4399 9.79277 15.1265 10.3425C14.968 10.8228 14.7583 11.2943 14.4954 11.7495C14.2325 12.2048 13.9292 12.6221 13.5924 12.9995C12.773 12.6798 11.8212 12.7217 11.0003 13.1957C10.1798 13.6694 9.66774 14.4722 9.53446 15.341C8.53434 15.5504 7.48951 15.557 6.46631 15.3431C6.3336 14.4734 5.82137 13.6697 5.00024 13.1957C4.17912 12.7216 3.22703 12.6798 2.40753 12.9998C1.71066 12.2206 1.19398 11.3124 0.875216 10.3415C1.56108 9.7918 2.00025 8.94692 2.00025 7.99952C2.00025 7.0516 1.56057 6.20632 0.874023 5.65655C1.03248 5.17624 1.24219 4.70484 1.50505 4.24954C1.76792 3.79425 2.07131 3.37694 2.40804 2.99955C3.22743 3.31923 4.17929 3.27737 5.00024 2.80339C5.82072 2.32969 6.33279 1.52695 6.46599 0.658071ZM8.00026 10.2495C9.24286 10.2495 10.2503 9.2422 10.2503 7.99952C10.2503 6.75692 9.24286 5.74954 8.00026 5.74954C6.75759 5.74954 5.75024 6.75692 5.75024 7.99952C5.75024 9.2422 6.75759 10.2495 8.00026 10.2495Z"
                  fill="white"
                />
              </svg>

              <p className="font-neue4 text-textColor-100 text-[14px]">Settings</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:absolute lg:bottom-0 lg:flex flex-col  lg:w-full h-[100px]">
        <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5ZM7.25 10.25V11.75H8.75V10.25H7.25ZM8.75 9.01632C9.83427 8.6936 10.625 7.68912 10.625 6.5C10.625 5.05025 9.44975 3.875 8 3.875C6.7265 3.875 5.66478 4.78189 5.42548 5.98509L6.8966 6.27933C6.9992 5.76367 7.45422 5.375 8 5.375C8.6213 5.375 9.125 5.87868 9.125 6.5C9.125 7.1213 8.6213 7.625 8 7.625C7.58577 7.625 7.25 7.96077 7.25 8.375V9.5H8.75V9.01632Z" fill="white"/>
</svg>


              <p className="font-neue4 text-textColor-100 text-[14px]">Faqs</p>
            </div>
          </div>
        <div className="relative w-full h-[40px] ">
            <div className="absolute top-[10px] left-[30px] lg:flex items-center justify-center gap-2">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 15.5C0.33579 15.5 0 15.1642 0 14.75V1.25C0 0.83579 0.33579 0.5 0.75 0.5H11.25C11.6642 0.5 12 0.83579 12 1.25V14.75C12 15.1642 11.6642 15.5 11.25 15.5H0.75ZM8.25 11L12 8L8.25 5V7.25H3.75V8.75H8.25V11Z" fill="white"/>
</svg>


              <p className="font-neue4 text-textColor-100 text-[14px]">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
