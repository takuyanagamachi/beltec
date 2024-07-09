"use client"
import Link from "next/link"
import { FiPhoneCall } from "react-icons/fi";

const Call_now = () => {

  return (
    <Link className="fixed bottom-10 right-8 rounded-full font-extrabold"
      href="tel:086-264-8888">
      <button className="relative inline-flex justify-center 
      p-0.5 mb-2 me-2 text-sm md:text-lg font-bold text-gray-700 group 
      bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 rounded-full">
        <span className="flex items-center px-3 py-2 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-opacity-0 hover:text-white">
          <FiPhoneCall className="mr-2.5" />CALL NOW
        </span>
      </button>
    </Link>
  );
};

export default Call_now;