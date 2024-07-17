"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { LtoR, BtoU, HtoH } from "@/app/motion";
import Contact from "@/components/contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Call_now from "@/components/call_now";



const Homepage = () => {

  return (
    <div className="">
      <ToastContainer position="top-center" />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="mt-[100px]"></div>
        <Image height={800} width={800}
          src="/Bluer.png"
          alt="Background Image"
          className="w-auto max-w-full mx-auto"
        />

        <div className="text-center">
          <p className="text-gray-400 mb-[30px] text-sm sm:text-md md:text-2xl lg:text-3xl">BEST ELECTRIFY LIFE TECHNICAL</p>
          <h1 className="line-height text-gray-700 mb-[80px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-5 font-bold">
            電気工事を通じて地域社会の<br />発展と豊かな生活に貢献します
          </h1>
          <Link href="/contact" className="my-[60px]">
            <button className="relative inline-flex justify-center 
            p-0.5 mb-2 me-2 text-md font-bold rounded-full text-gray-700 group 
            bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-opacity-0 hover:text-white">
                <FiPhoneCall className="text-xl inline mr-3" />
                CONTACT US
              </span>
            </button>
          </Link>
        </div>
        <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          className="mt-[40px] mx-auto"
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#000000"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
          <path
            d="M15 11L12 14L9 11"
            stroke="#000000"
            strokeWidth="1"
          ></path>
        </motion.svg>
      </motion.div>
      <div className="my-[120px]"></div>

      <div className="bgImageWhite">
        {/* about */}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              initial={LtoR().offscreen}
              whileInView={LtoR().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="max-w-lg"
            >
              <h2 className="text-center md:text-left font-extrabold text-yellow-500 text-5xl overline tracking-wide">
                ABOUT US
              </h2>
              <p className="mb-11 text-center md:text-left text-xl text-yellow-500 tracking-wide">-ベルテックについて-</p>
              <ul className="pl-4 mt-8 text-gray-600 text-md lg:text-xl">
                <li className="my-4">私たちは決して現状に満足することなく、
                  技術水準の向上、新たな知識・技術の習得を常に心掛け、
                  お客様一人ひとりのニーズを把握し、
                  的確なご提案が出来るよう挑戦を続けてまいります。
                </li>
                <li className="my-4">誠実な仕事、お客様本位の細やかな対応を社員一同のモットーとし、
                  株式会社ベルテックの持つ技術がお客様に喜んでいただける
                  サービス提供につながると確信しております。
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/about" className="mb-[60px] flex justify-end">
                  <button className="flex justify-end 
            p-0.5 mb-2 me-2 text-md font-bold rounded-full text-gray-700 group 
            bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200">
                    <span className=" px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-opacity-0 hover:text-white">
                      もっと見る
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="rounded-lg mt-10 md:mt-0 mx-auto w-full shadow-2xl shadow-gray-700"
            >
              <Image height={400} width={400}
                className="object-cover rounded-lg shadow-md w-full"
                src="/images/top/company.jpg" alt="株式会社ベルテックの会社" />
            </motion.div>
          </div>
        </div>

        {/* EMContact */}
        <motion.div
          initial={HtoH().offscreen}
          whileInView={HtoH().onscreen}
          viewport={{ once: true, amount: 0 }}>
          <Call_now />
        </motion.div>

        <div className="my-[120px]"></div>

        {/* service */}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div className=""
            initial={BtoU().offscreen}
            whileInView={BtoU().onscreen}
            viewport={{ once: false, amount: 0 }}
          >
            <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              SERVICE
            </h2>
            <p className="mb-11 text-center text-xl text-yellow-500 tracking-wide">-事業内容-</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="rounded-lg mt-10 md:mt-0 mx-auto shadow-2xl shadow-gray-700"
            >
              <Image height={400} width={400}
                src="/images/top/service.jpg"
                alt="株式会社ベルテック電気工事中"
                className="object-cover rounded-lg shadow-md w-full"
              />
            </motion.div>
            <motion.div
              initial={LtoR().offscreen}
              whileInView={LtoR().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="max-w-lg"
            >
              <ul className="pl-4 mt-8 text-gray-600 text-md lg:text-xl">
                <li className="my-4">
                  一般住宅からビル・マンション・工場まで全てに対応いたします。
                </li>
                <li className="my-4">電気工事を中心とし、通信、空調等設備分野で
                  設計・施工・管理を行っています。
                </li>
                <li className="my-4">
                  修繕から新設まで、迅速、確実、丁寧に対応いたします。
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/service" className="mb-[60px] flex">
                  <button className="flex justify-end 
            p-0.5 mb-2 me-2 text-md font-bold rounded-full text-gray-700 group 
            bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200">
                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-opacity-0 hover:text-white">
                      もっと見る
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="my-[120px]"></div>

        {/* contact */}
        <Contact />
      </div>
    </div >
  );
};

export default Homepage;
