"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { LtoR, BtoU, RtoL } from "@/app/motion";
import Contact from "@/components/contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const items = [
  {
    id: 1,
    color: "from-gray-200 to-gray-300",
    title: "事業１",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-gray-300 to-gray-400",
    title: "事業２",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    title: "事業３",
    color: "from-gray-400 to-gray-500",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
];

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

        <div className="flex flex-col text-center">
          <h1 className="text-4xl md:text-6xl px-5 font-bold leading-tight container mx-auto">
            あなたの生活を<span className="text-yellow-500">明るく照らす💡</span>
            <br />安心の
            <span className="text-yellow-500">電気工事</span>
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
                <li className="my-4">私たちは、お客様の安心と満足を最優先に考えた電気工事サービスを提供します。</li>
                <li className="my-4">経験豊富なスタッフが最新の技術を駆使し、高品質な施工をお約束します。</li>
                <li className="my-4">小さな修理から大規模な電気工事まで、多岐にわたるサービスを展開しており、
                  常にお客様のニーズに応えることを目指しています。</li>
              </ul>
              <div className="mt-8">
                <Link href="/info" className="mb-[60px] flex justify-end">
                  <button className="flex justify-end 
            p-0.5 mb-2 me-2 text-md font-bold rounded-full text-gray-700 group 
            bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200">
                    <span className=" px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-opacity-0 hover:text-white">
                      {/* <FiPhoneCall className="text-xl inline mr-3" /> */}
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
              className="mt-10 md:mt-0 mx-auto max-w-96 shadow-2xl shadow-yellow-100"
            >
              <Image height={400} width={400}
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="my-[120px]"></div>

        {/* work */}
        <section className="py-16 h-full">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-5">
            <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              SERVICE
            </h2>
            <p className="text-center text-yellow-500 tracking-wide text-xl">-事業内容-</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-3 py-3 mt-[100px]">
            {/* first */}
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="relative p-1 bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 max-w-sm overflow-hidden bg-cover bg-no-repeat shadow-lg mx-auto rounded">
              <Image height={300} width={300}
                src="https://images.unsplash.com/photo-1636218685495-8f6545aadb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlY3RyaWNhbCUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
                class="w-full h-60 object-cover flex mx-auto transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre"
              />
              <div className="px-6 py-4 bg-white rounded-b">
                <div className="font-bold text-xl mb-2">電線の修理保全</div>
                <p className="text-gray-600 text-base">
                  私たちの生活に欠かせない「電気」と言うエネルギーのインフラを支えます。
                </p>
                <Link href="/" className="grid justify-items-end">もっと見る</Link>
              </div>
            </motion.div>

            {/* second */}
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU(0.2).onscreen}
              viewport={{ once: false, amount: 0 }}
              className="relative p-1 bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 max-w-sm overflow-hidden bg-cover bg-no-repeat shadow-lg mx-auto rounded">
              <Image height={300} width={300}
                src="https://images.unsplash.com/photo-1636218685495-8f6545aadb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlY3RyaWNhbCUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
                class="w-full h-60 object-cover flex mx-auto transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre"
              />
              <div className="px-6 py-4 bg-white rounded-b">
                <div className="font-bold text-xl mb-2">電線の修理保全</div>
                <p className="text-gray-600 text-base">
                  私たちの生活に欠かせない「電気」と言うエネルギーのインフラを支えます。
                </p>
                <Link href="/" className="grid justify-items-end">もっと見る</Link>
              </div>
            </motion.div>

            {/* third */}
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU(0.4).onscreen}
              viewport={{ once: false, amount: 0 }}
              className="relative p-1 bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 max-w-sm overflow-hidden bg-cover bg-no-repeat shadow-lg mx-auto rounded">
              <Image height={300} width={300}
                src="https://images.unsplash.com/photo-1636218685495-8f6545aadb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlY3RyaWNhbCUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
                class="w-full h-60 object-cover flex mx-auto transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre"
              />
              <div className="px-6 py-4 bg-white rounded-b">
                <div className="font-bold text-xl mb-2">電線の修理保全</div>
                <p className="text-gray-600 text-base">
                  私たちの生活に欠かせない「電気」と言うエネルギーのインフラを支えます。
                </p>
                <Link href="/" className="grid justify-items-end">もっと見る</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="my-[120px]"></div>

        {/* contact */}
        <Contact />
      </div>
    </div >
  );
};

export default Homepage;
