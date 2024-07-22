"use client"
import Contact from "@/components/contact";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BtoU, HtoH, LtoR } from "../motion";
import Modal from "@/components/modal";
import { useState } from "react";
import Call_now from "@/components/call_now";
// images
import Service1 from '@/images/service/service1.jpg';
import Service2 from '@/images/service/service2.jpg';
import Service3 from '@/images/service/service3.jpg';

const PortfolioPage = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);


  return (
    <div className="bgImageWhite">
      {/* hero  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-96 relative bg-white text-white mt-20">
        <div className="absolute inset-0">
          <Image height={500} width={500}
            src="/images/service/haidenban.jpg"
            alt="ベルテック事業内容"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10 flex flex-col justify-center items-center">
          <h1 className="flex w-full h-full items-center justify-center bg-black bg-opacity-70 text-5xl font-bold">
            事業内容
          </h1>
        </div>
      </motion.div>

      {/* COMPANY */}
      <div className="container mx-auto">
        <div className="grid md:p-8 lg:p-20 xl:p-36">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16 text-center">
            <h2 className="font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              SERVICE
            </h2>
            <p className="text-yellow-500 tracking-wide text-xl">-事業内容-</p>
          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU().onscreen}
              viewport={{ once: false, amount: 0 }}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-lg" width={400} height={400} src="/images/service/systemOfDenki.jpg" alt="電気設備の設計、施工、管理" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  電気設備の設計、施工、管理
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  福祉施設などの建設工事における電気工事の
                  一般住宅、マンション、複合ビル、店舗、設計、積算、管理、施工を担います。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU(0.5).onscreen}
              viewport={{ once: false, amount: 0 }}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-lg" width={400} height={400} src="/images/service/denkiTsusin.jpg" alt="電気通信工事業" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  電気通信工事業
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  テレビ、インターネットなどの情報通信設備の設置や、防犯カメラ、インターホンなどの設備機器の設置を行っています。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={BtoU().offscreen}
              whileInView={BtoU(1).onscreen}
              viewport={{ once: false, amount: 0 }}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-lg" width={400} height={400} src="/images/service/systemOfAir.jpg" alt="空調設備工事業" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  空調設備工事業
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  室内および室外機器の設置、ダクトや配管の設置、および電気配線工事を行っています。
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="clear-both my-[120px]"></div>

        {/* EMContact */}
        <motion.div
          initial={HtoH().offscreen}
          whileInView={HtoH().onscreen}
          viewport={{ once: true, amount: 0 }}>
          <Call_now />
        </motion.div>

        <div className="flex flex-col gap-12 rounded p-[30px]">

          {/* GALLERY */}
          <motion.div
            initial={BtoU().offscreen}
            whileInView={BtoU().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16">
            <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              GALLERY
            </h2>
            <p className="text-center text-yellow-500 tracking-wide text-xl">-画像-</p>
          </motion.div>

          <motion.div
            initial={BtoU().offscreen}
            whileInView={BtoU().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto"
          >

            <button
              className="cursor text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setShowModal1(true)}
            >
              <Image width={500} height={500} className="max-w-full rounded-lg" src={Service1} alt="" />
            </button>
            <Modal isVisible={showModal1} image={Service1}
              onClose={() => setShowModal1(false)}
            />


            <button
              className="cursor text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setShowModal2(true)}
            >
              <Image width={500} height={500} className="max-w-full rounded-lg" src={Service2} alt="" />
            </button>
            <Modal isVisible={showModal2} image={Service2}
              onClose={() => setShowModal2(false)}
            />

            <button
              className="cursor text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setShowModal3(true)}
            >
              <Image width={500} height={500} className="max-w-full rounded-lg" src={Service3} alt="" />
            </button>
            <Modal isVisible={showModal3} image={Service3}
              onClose={() => setShowModal3(false)}
            />


            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service4.jpg" alt="" />
            </div>

            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service5.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service6.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service7.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service8.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service9.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service10.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service11.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="max-w-full rounded-lg" src="/images/service/service12.jpg" alt="" />
            </div>


          </motion.div>
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