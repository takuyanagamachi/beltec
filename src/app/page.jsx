"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { LtoR, BtoU, RtoL } from "@/app/motion";

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
    <div>
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
          <h1 className="text-5xl px-5 font-bold leading-tight container mx-auto">
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

      {/* about */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="max-w-lg"
          >
            <h2 className="text-center md:text-left font-extrabold text-yellow-500 text-4xl overline tracking-wide">
              ABOUT US
            </h2>
            <p className="text-center md:text-left text-yellow-500 tracking-wide">-業務内容-</p>
            <ul className="list-disc pl-4 mt-8 text-gray-600">
              <li className="my-4">私たちは、お客様の安心と満足を最優先に考えた電気工事サービスを提供します。</li>
              <li className="my-4">経験豊富なスタッフが最新の技術を駆使し、高品質な施工をお約束します。</li>
              <li className="my-4">小さな修理から大規模な電気工事まで、多岐にわたるサービスを展開しており、
                常にお客様のニーズに応えることを目指しています。</li>
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="mb-[60px] flex justify-end">
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
            className="mt-12 md:mt-0 mx-auto max-w-96 shadow-2xl shadow-yellow-100"
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
          <h2 className="text-center font-extrabold text-yellow-500 text-4xl overline tracking-wide">
            SERVICE
          </h2>
          <p className="text-center text-yellow-500 tracking-wide">-事業内容-</p>
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
        <motion.div
          initial={BtoU().offscreen}
          whileInView={BtoU().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 mt-4 text-center">
          <MdOutlineMail className="mx-auto text-5xl mb-[20px]" />
          <Link href="/" className="py-2">
            <button class="inline-flex p-0.5 mb-2 text-md font-bold text-gray-700 rounded-lg group transition duration-100 bg-gradient-to-r from-yellow-200 via-red-200 to-blue-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
              <span class="px-9 py-4 transition-all ease-in duration-100 bg-white rounded-md group-hover:bg-opacity-0">
                メールでお問い合わせ
              </span>
            </button>
          </Link>
        </motion.div>
      </section >


      {/* <form ref={contactRef}>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fHww" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700" />
                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">お問い合わせ</h1>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        <a href="javascript:;" className="flex items-center mb-6">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">086-123-4567</h5>
                        </a>
                        <a href="https://veilmail.io/irish-geoff" className="flex items-center mb-6">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">example@gmail.com</h5>
                        </a>
                        <a href="javascript:;" className="flex items-center">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" stroke-width="2" />
                            <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" stroke-width="2" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">〒700-0845
                            岡山県岡山市南区浜野4丁目17番6号</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">メッセージを送信</h2>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone" />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label for="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label for="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> Phone
                      </label>
                    </div>
                  </div>
                </div>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" />
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">送信</button>
              </div>
            </div>
          </div>
        </section>
      </form> */}
    </div >
  );
};

export default Homepage;
