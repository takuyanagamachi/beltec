"use client"
import Contact from "@/components/contact";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BtoU, LtoR } from "../motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {

  return (
    <div className="">
      {/* hero  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-96 relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image height={300} width={300}
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
            alt="Background Image"
            className="object-cover object-center w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10 flex flex-col justify-center items-center">
          <h1 className="p-2 bg-black bg-opacity-50 rounded-md sm:text-5xl text-4xl font-bold leading-tight mb-4">
            事業内容
          </h1>
        </div>
      </motion.div>


      {/* COMPANY */}
      <div className="container mx-auto">
        <div className="grid grid-col md:p-8 lg:p-20 xl:p-36">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16 text-center">
            <h2 className="font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              WORK
            </h2>
            <p className="text-yellow-500 tracking-wide text-xl">-事業内容-</p>
          </motion.div>

          <div className="container mx-auto py-16 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <motion.div
                initial={LtoR().offscreen}
                whileInView={LtoR().onscreen}
                viewport={{ once: false, amount: 0 }}
                className="max-w-lg mx-auto"
              >
                <h2 className="text-center md:text-left font-extrabold text-yellow-500 text-2xl lg:text-4xl tracking-wide mb-8">
                  電気の安全、<br />私たちが守ります。
                </h2>
                <p className="mt-5 text-gray-600 text-md lg:text-xl">
                  私たちは、お客様の安心と満足を最優先に考えた電気工事サービスを提供します。
                  経験豊富なスタッフが最新の技術を駆使し、高品質な施工をお約束します。
                  小さな修理から大規模な電気工事まで
                </p>
                <div className="mt-8">

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

          <div className="container mx-auto py-16 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
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
              <motion.div
                initial={LtoR().offscreen}
                whileInView={LtoR().onscreen}
                viewport={{ once: false, amount: 0 }}
                className="max-w-lg mx-auto"
              >
                <h2 className="text-center md:text-right font-extrabold text-yellow-500 text-2xl lg:text-4xl tracking-wide mb-8">
                  電気の安全、<br />私たちが守ります。
                </h2>
                <p className="mt-5 text-gray-600 text-md lg:text-xl">
                  私たちは、お客様の安心と満足を最優先に考えた電気工事サービスを提供します。
                  経験豊富なスタッフが最新の技術を駆使し、高品質な施工をお約束します。
                  小さな修理から大規模な電気工事まで
                </p>
                <div className="mt-8">

                </div>
              </motion.div>
            </div>
          </div>

          <div className="clear-both my-[120px]"></div>

          <div className="flex flex-col gap-12 rounded p-[30px] bg-gray-50">

            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="my-16">
              <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
                History
              </h2>
              <p className="text-center text-yellow-500 tracking-wide text-xl">-沿革-</p>
            </motion.div>

            <motion.div
              initial={LtoR().offscreen}
              whileInView={LtoR().onscreen}
              viewport={{ once: false, amount: 0 }}
              className=""
            >








            </motion.div>
          </div>
        </div>
      </div>
      <Contact />
    </div >
  )
}

export default PortfolioPage

{/* <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My WOrks
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map(item => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >Hire Me
          </Link>
        </div>
      </div>
    </motion.div> */}