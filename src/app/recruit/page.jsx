"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { BtoU, LtoR } from "../motion";
import { GrUserManager } from "react-icons/gr";
import { GrUserFemale } from "react-icons/gr";
import Recruit from "@/components/recruit";

const RecruitPage = () => {

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
            src="/recruite.jpg"
            alt="ベルテック事業内容"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10 flex flex-col justify-center items-center">
          <h1 className="flex w-full h-full items-center justify-center bg-black bg-opacity-70 text-5xl font-bold">
            採用情報
          </h1>
        </div>
      </motion.div>

      {/* COMPANY */}
      <div className="container mx-auto">

        <div className="clear-both my-[100px]"></div>


        <div className="flex flex-col gap-12 rounded p-[30px]">

          {/* GALLERY */}
          <motion.div
            initial={BtoU().offscreen}
            whileInView={BtoU().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16">
            <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              RECRUIT
            </h2>
            <p className="text-center text-yellow-500 tracking-wide text-xl">-募集職種-</p>
          </motion.div>

          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="w-full"
          >
            <Recruit />
          </motion.div>
        </div>

      </div>

    </div >
  )
}

export default RecruitPage