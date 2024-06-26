"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { BtoU, LtoR } from "../motion";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactPage = () => {

  const text = "社員一同お待ちしています"

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    emailjs.sendForm(serviceID,
      templateID,
      form.current,
      publicKey)
      .then((result) => {
        console.log(result.text);
        toast.success("お問い合わせありがとうございます！返信まで少々お待ちください。");
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="mt-[50px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-96 relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image height={300} width={300}
            src="/contact.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10">
          <h1 className="w-full h-full flex justify-center items-center bg-black bg-opacity-80 sm:text-5xl text-4xl font-bold leading-tight">
            CONTACT
          </h1>
        </div>
      </motion.div>

      <section className="py-16 h-full container max-w-lg mx-auto">
        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="my-5">
          <h2 className="text-center font-extrabold text-yellow-500 text-4xl overline tracking-wide">
            CONTACT
          </h2>
          <p className="text-center text-yellow-500 tracking-wide">-お問い合わせ-</p>
        </motion.div>
        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR(0.5).onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 text-center">
          <p className="p-5 text-gray-600">
            私たちのサービスにご関心をお寄せいただきありがとうございます。<br />
            電気工事に関するご質問やお見積もりのご依頼、ご相談など、どのようなことでもお気軽にお問い合わせください。<br />
            専門のスタッフが迅速に対応させていただきます。
          </p>
          <a className="flex gap-3 items-center justify-center font-extrabold text-2xl"
            href="tel:000-1234-5678">
            <FiPhoneCall />000-1234-5678
          </a>
          <p className="py-2 text-gray-600">受付時間 / 9:00-18:00 (土日祝除く)</p>
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
      </section >



      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/* FORM CONTAINER */}


        <motion.form
          initial={BtoU().offscreen}
          whileInView={BtoU().onscreen}
          viewport={{ once: false, amount: 0 }}
          ref={form} onSubmit={sendEmail}
          className="w-full mx-auto my-[120px] bg-gray-50 p-[50px] rounded">

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="company" id="form_companyName"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" " />
            <label htmlFor="form_companyName"
              className="peer-focus:font-medium absolute text-lg text-gray-500 
            duration-300 transform -translate-y-6 scale-75 top-3 
            origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
            peer-focus:text-yellow-300
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              会社名
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="form_name"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" " required />
            <label htmlFor="form_name"
              className="peer-focus:font-medium absolute text-lg text-gray-500 
            duration-300 transform -translate-y-6 scale-75 top-3 
            origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
            peer-focus:text-yellow-300
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              担当者名<span className="text-red-700">*</span>
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="form_email"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" " required />
            <label htmlFor="form_email"
              className="peer-focus:font-medium absolute text-lg text-gray-500 
            duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] 
            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
            rtl:peer-focus:left-auto peer-focus:text-yellow-300 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">
              メールアドレス<span className="text-red-700">*</span>
            </label>
          </div>


          <div className="relative z-0 w-full mb-5 group">
            <textarea rows={8} name="message" id="form_message"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" " required />
            <label htmlFor="form_message"
              className="peer-focus:font-medium absolute text-lg text-gray-500 
            duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] 
            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
            rtl:peer-focus:left-auto peer-focus:text-yellow-300 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">
              内容<span className="text-red-700">*</span>
            </label>
          </div>


          {/* <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>
          </div> */}
          <button type="submit"
            className="text-white text-lg  bg-yellow-400 hover:bg-yellow-500 
            focus:ring-4 focus:outline-none focus:ring-yellow-300 font-bold 
            rounded-lg w-full sm:w-auto px-5 py-2.5 text-center
            ">
            送信
          </button>
          <div className="flex items-center justify-center text-4xl my-[80px]">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              😆
            </div>
          </div>
        </motion.form>

      </div>
    </div >
  )
}

export default ContactPage