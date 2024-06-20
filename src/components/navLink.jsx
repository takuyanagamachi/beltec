"use client"

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
  const pathName = usePathname();

  console.log(pathName)
  return (
    <Link className="text-gray-600 text-xl mt-3 group transition duration-500  hover:text-yellow-500 relative w-max" href={link.url}>
      {
        link.img ?
          <Image src={link.img} width={150} height={150} alt="" />
          : <></>
      }
      {link.title}
      <span class="absolute -bottom-1 left-1/2 w-0 transition-all duration-500 h-0.5 bg-yellow-500 group-hover:w-3/6"></span>
      <span class="absolute -bottom-1 right-1/2 w-0 transition-all duration-500 h-0.5 bg-yellow-500 group-hover:w-3/6"></span>
    </Link>
  );
};

export default NavLink;