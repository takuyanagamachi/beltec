"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { LtoR, BtoU } from "@/app/motion";
const Contact = () => {
  return (
    <section className="py-16 h-full container max-w-lg mx-auto">
      <motion.div
        initial={LtoR().offscreen}
        whileInView={LtoR().onscreen}
        viewport={{ once: false, amount: 0 }}
        className="my-5">
        <h2 className="text-center font-extrabold text-yellow-500 text-5xl overline tracking-wide">
          CONTACT
        </h2>
        <p className="text-center text-yellow-500 tracking-wide text-xl">-お問い合わせ-</p>
      </motion.div>
      <motion.div
        initial={LtoR().offscreen}
        whileInView={LtoR(0.5).onscreen}
        viewport={{ once: false, amount: 0 }}
        className="p-5 text-center">
        <p className="p-5 text-gray-600 text-lg lg:text-xl">
          私たちのサービスにご関心をお寄せいただき<br />ありがとうございます。
          <br />電気工事に関するご質問やお見積もりのご依頼、ご相談など、どのようなことでもお気軽にお問い合わせください。<br />
          専門のスタッフが迅速に対応させていただきます。
        </p>
        <Link className="flex gap-3 items-center justify-center font-extrabold text-3xl"
          href="tel:086-264-8888">
          <FiPhoneCall />086-264-8888
        </Link>
        <p className="py-2 text-gray-600 text-lg lg:text-xl">受付時間 / 8:00~17:00 (土日祝除く)</p>
      </motion.div>

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
      <motion.div
        initial={BtoU().offscreen}
        whileInView={BtoU().onscreen}
        viewport={{ once: false, amount: 0 }}
        className="p-5 mt-4 text-center">
        <MdOutlineMail className="mx-auto text-5xl mb-[20px]" />
        <Link href="/contact" className="py-2">
          <button class="inline-flex p-0.5 mb-2 text-md font-bold text-gray-700 rounded-lg group transition duration-100 bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
            <span class="px-9 py-4 transition-all ease-in duration-100 bg-white rounded-md group-hover:bg-opacity-0">
              メールでお問い合わせ
            </span>
          </button>
        </Link>
      </motion.div>
    </section >

  );
};

export default Contact;