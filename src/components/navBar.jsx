import React from 'react'
import { Search } from "../components/searchButton";
import { Profile } from './profileBar';
import { FiAlignCenter } from "react-icons/fi";  
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


export const Navbar = () => {
  return (
    <div className="w-full z-40 h-[80px] flex items-center px-4 justify-center gap-[20px]  lg:w-[83vw] lg:right-0 lg:h-[80px] lg:fixed lg:top-0 lg:flex lg:items-center lg:justify-between lg:pl-4 lg:pr-9">
    {/* Logo and text*/}
    <Sheet>
    <SheetTrigger> <FiAlignCenter className='text-customColor-300 text-[30px] font-custom  lg:hidden' /> </SheetTrigger>
  <SheetContent side="left" className="bg-customColor-300">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  <p className="font-custom text-textColor-100 text-[20px] lg:hidden">Boardman</p>
  {/* search bar and profiles */}
  <div className="flex items-center justify-between h-[48px] w-[1150px] ">
    {/* search button */}
    <Search />
    {/* profile bar */}
    <Profile />
  </div>

</div>
  )
}
