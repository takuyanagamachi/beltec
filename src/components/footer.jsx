"use client"
import Image from "next/image";
import Link from "next/link"

const Footer = () => {

  return (

    <footer className="bg-black text-white p-4">
      <div className="md:flex mt-4 mx-auto container max-w-screen-xl">
        <div className="">
          <Link href="/" className="flex justify-center">
            <Image src="/BeltecLogohen.png" width={150} height={150} className="h-12" alt="Flowbite Logo" />
          </Link>
        </div>
        <ul className="md:flex text-center justify-end items-center mt-3 w-full text-sm font-medium text-gray-300">
          <li className="py-1 text-lg">
            <Link href="#"
              className=" me-4 md:me-6 transition duration-100  hover:text-white">
              企業情報
            </Link>
          </li>
          <li className="py-1 text-lg">
            <Link href="#"
              className="me-4 md:me-6 transition duration-100  hover:text-white">
              事業内容
            </Link>
          </li>
          <li className="py-1 text-lg">
            <Link href="#"
              className="me-4 md:me-6 transition duration-100  hover:text-white">
              お問い合わせ
            </Link>
          </li>
          <li className="py-1 text-lg">
            <Link href="#"
              className="me-4 md:me-6 transition duration-100  hover:text-white">
              プライバシーポリシー
            </Link>
          </li>
        </ul>
      </div>
      <p className='text-center pt-[50px] pb-1'>
        &copy;1955 -{new Date().getFullYear()}  株式会社 ベルテックス
      </p>
    </footer>

  );
};

export default Footer;