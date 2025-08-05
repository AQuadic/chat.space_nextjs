import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/components/icons/404/HomeIcon";
import BulbIcon from "@/components/icons/404/BulbIcon";
import SearchIcon from "@/components/icons/404/SearchIcon";
import QuestionIcon from "@/components/icons/404/QuestionIcon";
import SupportIcon from "@/components/icons/404/SupportIcon";

const NotFound404 = () => {
  return (
    <div className="text-center mt-8 sm:mt-16">
      <h1 className="font-semibold text-[96px] text-[#D1D5DB]">404</h1>
      <h2 className="mt-10 mb-5 font-bold text-3xl">Page Not Found</h2>
      <p className="text-lg text-[#4B5563]">
        Oops! The Chati Space page you&#39;re looking for seems to have vanished
        into the digital void.
      </p>
      <div className="w-fit mx-auto relative">
        <Image
          src="/images/not-found/404mainImage.png"
          alt="404 Not Found"
          width={252}
          height={328}
          className="mx-auto mt-8 w-32 h-40 sm:w-[252px] sm:h-[328px]"
        />
        <Image
          src="/images/not-found/404sideImage.png"
          alt="404 Not Found"
          width={164}
          height={246}
          className="mx-auto mt-8 absolute -bottom-4 sm:-bottom-8 right-full left-auto w-20 h-32 sm:w-[164px] sm:h-[246px]"
          style={{ marginRight: "-1px" }}
        />
      </div>
      <div className="flex items-center justify-center max-sm:flex-col gap-4 my-[60px] sm:my-[100px]">
        <Link
          href="/"
          className="px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-colors duration-200 flex items-center gap-3 shadow-md"
        >
          <HomeIcon />
          <span>Back to Dashboard</span>
        </Link>
        <Link
          className="px-10 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center gap-3 shadow-[0px_10px_15px_0px_#0000001A] bg-white hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:shadow-lg  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          href="/#frequently-asked"
        >
          <BulbIcon />
          <span> Frequently Asked </span>
        </Link>
      </div>
      <div className="rounded-xl shadow-[0px_10px_15px_0px_#0000001A] p-4 bg-white max-w-[670px] mx-auto mb-10 sm:mb-20">
        <h3 className="font-semibold text-xl">Need Help?</h3>
        <div className="flex justify-center  gap-5 text-sm mt-6">
          <div className="flex flex-col items-center gap-3">
            <SearchIcon />
            <p className="max-w-[129px]">Search for existing campaigns</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <QuestionIcon />
            <p>Check our documentation</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SupportIcon />
            <p>Contact support team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
