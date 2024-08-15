import React from "react";
import pMan from "../assets/Prof-1.png";
import woMan from "../assets/boy-1.png";
import gift from "../assets/gift.png";
import diamond from "@/assets/diamond.png";
import strike from "@/assets/strike.png";
import treasure from "@/assets/treasure.png";
import bomb from "@/assets/bomb.png";
import coin from "@/assets/coin.png";
import pack from "@/assets/pack-1.png";

export const Main = () => {
  return (
    <div className=" overflow-y-auto overflow-x-hidden scrollbar-hide top-[90px] right-[0px] absolute w-[92vw] h-[85vh]  ">
      <div className="w-[99vw] h-[fit-content] py-4 flex flex-col items-center justify-center gap-5">
        {/* first content */}
        <div className="w-[78vw] h-[fit-content] flex items-center justify-center gap-8 ">
          {/* prof */}
          <div className="w-[750px] pr-8 h-[201px] flex items-center justify-between pl-8  bg-customColor-200 rounded-[4px]">
            {/* prof pic */}
            <div className="relative border-2  border-customColor-300 w-[150px] h-[150px] overflow-hidden rounded-full">
              <img
                src={pMan}
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
            {/* profile info */}
            <div className="h-[201px] w-[450px] flex flex-col ">
              <div className="  flex items-center justify-between  w-[450px] h-[65px]">
                <div className="">
                  <p className="text-[#979797] text-[12px] font-neue4">Gamer</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-textColor-100  font-neue3">Flunk god</p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM7.25195 11L4.06999 7.81805L5.13066 6.75732L7.25195 8.8787L11.4946 4.63604L12.5553 5.6967L7.25195 11Z"
                        fill="#FF5733"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex text-textColor-100 font-neue4 text-14px bg-customColor-300 px-2 py-1 rounded-[4px]">
                  View profile
                </div>
              </div>
              <div className=" border-b-[0.5px] flex items-center justify-between border-slate-400 w-[450px] h-[65px]">
                {/* latest */}
                <div className="flex flex-col items-start justify-center gap-2 first-line:">
                  <p className="text-[12px] font-neue4 text-[#979797]">
                    Latest Achievements
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <img className="w-[17px] h-[17px]" src={treasure} alt="" />
                    <img className="w-[17px] h-[17px]" src={diamond} alt="" />
                    <img className="w-[17px] h-[17px]" src={strike} alt="" />
                    <img className="w-[17px] h-[17px]" src={bomb} alt="" />
                    <img className="w-[17px] h-[17px]" src={gift} alt="" />
                    <img className="w-[17px] h-[17px]" src={coin} alt="" />
                    <p className="text-white text-[14px] font-neue4">10+</p>
                  </div>
                </div>
                {/* joined */}
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-[12px] font-neue4 text-[#979797]">
                    Joined team
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
                      <img
                        src={woMan}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-white text-[14px] font-neue4">10+</p>
                  </div>
                </div>
              </div>
              <div className=" w-[450px] h-[65px] flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2133 4.47608L12.3033 3.38604L13.364 4.4467L12.2739 5.53673C13.1976 6.69149 13.75 8.15625 13.75 9.75C13.75 13.478 10.728 16.5 7 16.5C3.27208 16.5 0.25 13.478 0.25 9.75C0.25 6.02208 3.27208 3 7 3C8.59375 3 10.0585 3.55235 11.2133 4.47608ZM7 15C9.8995 15 12.25 12.6495 12.25 9.75C12.25 6.85051 9.8995 4.5 7 4.5C4.10051 4.5 1.75 6.85051 1.75 9.75C1.75 12.6495 4.10051 15 7 15ZM6.25 6H7.75V10.5H6.25V6ZM4 0.75H10V2.25H4V0.75Z"
                      fill="white"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-neue4 text-[#979797]">
                      Played
                    </p>
                    <p className="text-textColor-100 text-[14px]">360 hours</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.5C10.3411 0.5 12.4317 1.57266 13.8071 3.25331L9.06065 8L13.8071 12.7467C12.4317 14.4273 10.3411 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.2924 14 10.5161 13.5898 11.523 12.858L11.6788 12.74L6.93943 8L11.6788 3.25925L11.523 3.14196C10.5753 2.45323 9.43565 2.04937 8.22732 2.00424L8 2ZM8 2.75C8.6213 2.75 9.125 3.25368 9.125 3.875C9.125 4.49632 8.6213 5 8 5C7.3787 5 6.875 4.49632 6.875 3.875C6.875 3.25368 7.3787 2.75 8 2.75Z"
                      fill="white"
                    />
                  </svg>

                  <div className="flex flex-col">
                    <p className="text-[12px] font-neue4 text-[#979797]">
                      Games
                    </p>
                    <p className="text-textColor-100 text-[14px]">340</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5039 3.25H14.7539C15.1681 3.25 15.5039 3.58578 15.5039 4V13C15.5039 13.4142 15.1681 13.75 14.7539 13.75H1.25391C0.839696 13.75 0.503906 13.4142 0.503906 13V1C0.503906 0.585782 0.839696 0.25 1.25391 0.25H12.5039V3.25ZM2.00391 4.75V12.25H14.0039V4.75H2.00391ZM2.00391 1.75V3.25H11.0039V1.75H2.00391ZM10.2539 7.75001H12.5039V9.25001H10.2539V7.75001Z"
                      fill="white"
                    />
                  </svg>

                  <div className="flex flex-col">
                    <p className="text-[12px] font-neue4 text-[#979797]">Won</p>
                    <p className="text-textColor-100 text-[14px]">170</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5039 3.25H14.7539C15.1681 3.25 15.5039 3.58578 15.5039 4V13C15.5039 13.4142 15.1681 13.75 14.7539 13.75H1.25391C0.839696 13.75 0.503906 13.4142 0.503906 13V1C0.503906 0.585782 0.839696 0.25 1.25391 0.25H12.5039V3.25ZM2.00391 4.75V12.25H14.0039V4.75H2.00391ZM2.00391 1.75V3.25H11.0039V1.75H2.00391ZM10.2539 7.75001H12.5039V9.25001H10.2539V7.75001Z"
                      fill="white"
                    />
                  </svg>

                  <div className="flex flex-col">
                    <p className="text-[12px] font-neue4 text-[#979797]">
                      Earned
                    </p>
                    <p className="text-textColor-100 text-[14px]">
                      12000 coins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* join */}
          <div className="w-[320px] h-[201px] flex flex-col justify-between ">
            <div className="w-[310px] h-[130px] bg-customColor-200 rounded-[4px] px-4 flex flex-col items-start justify-around">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[50%] bg-[#313337]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 0.333496C9.08092 0.333496 10.9392 1.28697 12.1618 2.78088L7.94272 7.00016L12.1618 11.2194C10.9392 12.7134 9.08092 13.6668 6.99992 13.6668C3.31802 13.6668 0.333252 10.682 0.333252 7.00016C0.333252 3.31826 3.31802 0.333496 6.99992 0.333496ZM6.99992 2.3335C6.44765 2.3335 5.99992 2.78121 5.99992 3.3335C5.99992 3.88578 6.44765 4.3335 6.99992 4.3335C7.55219 4.3335 7.99992 3.88578 7.99992 3.3335C7.99992 2.78121 7.55219 2.3335 6.99992 2.3335Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[11px] text-textColor-100">
                Looking for a new challenge or a way to increase earnings? Play
                your favourite games now
              </p>
              <div className="flex items-center justify-between gap-10">
                <button className=" border-[1px] border-customColor-300 text-[14px] text-customColor-300 w-[100px] h-[30px] flex items-center justify-center rounded-[4px]">
                  {" "}
                  Join game{" "}
                </button>
                <button className=" border-[1px] bg-customColor-300 border-customColor-300 text-[14px] text-textColor-100 w-[100px] h-[30px] flex items-center justify-center rounded-[4px]">
                  {" "}
                  Join game{" "}
                </button>
              </div>
            </div>
            <div className="w-[310px] h-[60px] bg-customColor-200 rounded-[4px] px-5 flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1707 7.00207V8.66874C19.1707 11.4302 15.0667 13.6687 10.0041 13.6687C5.03187 13.6687 0.984286 11.5094 0.841311 8.81624L0.837402 8.66874V7.00207C0.837402 9.76357 4.94146 12.0021 10.0041 12.0021C15.0667 12.0021 19.1707 9.76357 19.1707 7.00207ZM10.0041 0.335449C15.0667 0.335449 19.1707 2.57402 19.1707 5.33541C19.1707 8.09691 15.0667 10.3354 10.0041 10.3354C4.94146 10.3354 0.837402 8.09691 0.837402 5.33541C0.837402 2.57402 4.94146 0.335449 10.0041 0.335449Z"
                    fill="white"
                  />
                </svg>

                <div className="flex flex-col">
                  <p className="text-[12px] font-neue4 text-[#979797]">
                    Balance
                  </p>
                  <p className="text-textColor-100 text-[14px]">43000 coins</p>
                </div>
              </div>
              <button className=" border-[1px] bg-customColor-300 border-customColor-300 text-[14px] text-textColor-100 w-[80px] h-[30px] flex items-center justify-center rounded-[4px]">
                {" "}
                Deposit{" "}
              </button>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="w-[78vw] h-[240px] pr-1">
          <div className="w-[78ww] h-[40px] px-2 flex items-center justify-between">
            <p className="text-textColor-100 text-[20px] font-neue3">
              Featured Tournaments
            </p>
            <p className="text-customColor-300 text-[14px]">View All</p>
          </div>
          <div className="w-[78ww] h-[250px] flex items-center justify-center gap-5">
            <div className="w-[300px] h-[250px] px-4 bg-customColor-200 flex items-start justify-around flex-col  rounded-[4px] ">
              <div className="relative w-[230px] h-[90px] overflow-hidden rounded-[4px]">
                <img
                  src={pack}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <p className="text-customColor-300 text-[11px]">SEPT 02 - 05, 2023 <span className="text-[#979797]">STARTING AT 6 : 00 PM</span></p>
              <p className="text-textColor-100 font-neue4">Rebirth Resurgence express </p>
              <p className="text-textColor-100 text-[10px]">
                Join the call of duty tournament and get a chance to win up to $
                2000 prize.....{" "}
              </p>
              <div className="flex items-center justify-center gap-10">
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Prize</p>
                    <p className="text-textColor-100 font-neue4">3500</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game Mode</p>
                    <p className="text-textColor-100 font-neue4">3v3</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game slot</p>
                    <p className="text-textColor-100 font-neue4">60/64</p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[250px] px-4 bg-customColor-200 flex items-start justify-around flex-col  rounded-[4px] ">
              <div className="relative w-[230px] h-[90px] overflow-hidden rounded-[4px]">
                <img
                  src={pack}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <p className="text-customColor-300 text-[11px]">SEPT 02 - 05, 2023 <span className="text-[#979797]">STARTING AT 6 : 00 PM</span></p>
              <p className="text-textColor-100 font-neue4">Rebirth Resurgence express </p>
              <p className="text-textColor-100 text-[10px]">
                Join the call of duty tournament and get a chance to win up to $
                2000 prize.....{" "}
              </p>
              <div className="flex items-center justify-center gap-10">
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Prize</p>
                    <p className="text-textColor-100 font-neue4">3500</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game Mode</p>
                    <p className="text-textColor-100 font-neue4">3v3</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game slot</p>
                    <p className="text-textColor-100 font-neue4">60/64</p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[250px] px-4 bg-customColor-200 flex items-start justify-around flex-col  rounded-[4px] ">
              <div className="relative w-[230px] h-[90px] overflow-hidden rounded-[4px]">
                <img
                  src={pack}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <p className="text-customColor-300 text-[11px]">SEPT 02 - 05, 2023 <span className="text-[#979797]">STARTING AT 6 : 00 PM</span></p>
              <p className="text-textColor-100 font-neue4">Rebirth Resurgence express </p>
              <p className="text-textColor-100 text-[10px]">
                Join the call of duty tournament and get a chance to win up to $
                2000 prize.....{" "}
              </p>
              <div className="flex items-center justify-center gap-10">
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Prize</p>
                    <p className="text-textColor-100 font-neue4">3500</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game Mode</p>
                    <p className="text-textColor-100 font-neue4">3v3</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game slot</p>
                    <p className="text-textColor-100 font-neue4">60/64</p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[250px] px-4 bg-customColor-200 flex items-start justify-around flex-col  rounded-[4px] ">
              <div className="relative w-[230px] h-[90px] overflow-hidden rounded-[4px]">
                <img
                  src={pack}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <p className="text-customColor-300 text-[11px]">SEPT 02 - 05, 2023 <span className="text-[#979797]">STARTING AT 6 : 00 PM</span></p>
              <p className="text-textColor-100 font-neue4">Rebirth Resurgence express </p>
              <p className="text-textColor-100 text-[10px]">
                Join the call of duty tournament and get a chance to win up to $
                2000 prize.....{" "}
              </p>
              <div className="flex items-center justify-center gap-10">
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Prize</p>
                    <p className="text-textColor-100 font-neue4">3500</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game Mode</p>
                    <p className="text-textColor-100 font-neue4">3v3</p>
                </div>
                <div className="">
                    <p className="text-[#979797] text-[12px] font-neue2">Game slot</p>
                    <p className="text-textColor-100 font-neue4">60/64</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* thrird */}
      </div>
    </div>
  );
};
