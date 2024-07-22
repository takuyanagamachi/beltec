"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { LtoR, BtoU, RtoL, HtoH } from "@/app/motion";
import Contact from "@/components/contact";
import Call_now from "@/components/call_now";

const InfoPage = () => {

  return (
    <div>
      {/* hero  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-96 relative bg-white text-white mt-20">
        <div className="absolute inset-0">
          <Image height={500} width={500}
            src="/images/about/company-from-up.jpg"
            alt="ベルテック企業情報"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10 flex flex-col justify-center items-center">
          <h1 className="flex w-full h-full items-center justify-center bg-black bg-opacity-70 text-5xl font-bold">
            企業情報
          </h1>
        </div>
      </motion.div>


      {/* COMPANY */}
      <div className="container mx-auto">
        <div className="grid grid-col md:p-12 lg:p-20 xl:p-36">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16 text-center">
            <h2 className="font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              COMPANY
            </h2>
            <p className="text-yellow-500 tracking-wide text-xl">-会社概要-</p>
          </motion.div>

          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="list-none grid grid-cols-2 backgroundImage min-h-[1600px] container mx-auto"
          >

            <li className=" w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              創業
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              1994年6月
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              設立
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              1997年12月
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              資本金
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              35,000千円
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              代表者
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              前場 恵介
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              従業員数
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              20名
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              有資格者
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              1級電気工事施工管理技士/3名<br />
              2級電気工事施工管理技士/3名<br />
              第一種電気工事士/15名<br />
              第二種電気工事士/5名<br />
              消防設備士 甲種4類/1名<br />
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              営業時間
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              8:00~17:00
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              定休日
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              日曜日、第2・4土曜日、祝日、年末年始
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              建設業許可
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              電気工事業 岡山県知事許可 特定 第25388号
            </li>
            {/* <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              営 業 許 可
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              一般貨物自動車運送事業許可<br />
              中国自貨第137号<br />
              産業廃棄物収集運搬業<br />
              岡山県第03300140828号<br />
              香川県第03709140828号<br />
              第一種フロン類充填回収業者<br />
              岡山県 登録番号 第331110157号
            </li> */}
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              事業所
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              本社 〒700-0845 岡山県岡山市南区浜野4丁目17番6号<br />
              TEL 086-264-8888/FAX 086-264-1988
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              取引先
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              岡山市、中国電力株式会社、中国建設工業株式会社、
              株式会社合田工務店、ライフデザイン・カバヤ株式会社
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              仕入先
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              八州電気工業株式会社  シンセイ株式会社  暁電業株式会社  双葉電機株式会社  小林電工株式会社  三親電材株式会社
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              協力会社
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              工事関連20社
            </li>
            <li className="w-full border-b border-yellow-200 my-2 p-1 pl-4 text-2xl font-semibold text-gray-800">
              取引先銀行
            </li>
            <li className="text-gray-700 w-full border-b border-yellow-200 p-1 pl-4 my-2 text-lg font-normal">
              中国銀行、トマト銀行、百十四銀行
            </li>
          </motion.div>
          {/* EMContact */}
          <motion.div
            initial={HtoH().offscreen}
            whileInView={HtoH().onscreen}
            viewport={{ once: true, amount: 0 }}>
            <Call_now />
          </motion.div>

          <div className="map mt-[70px] mx-auto w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.093133219025!2d133.93413985!3d34.6288519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355407e260208ed1%3A0xd4212be1dec9945d!2zKOagqinjg5njg6vjg4bjg4Pjgq8!5e0!3m2!1sja!2sjp!4v1719129325223!5m2!1sja!2sjp"
              width="1200" height="400"
              className="w-full aspect-video bordered"
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    1994年6月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    株式会社ベルテック前身にあたるテクノサービス設立、家電事業開始<br />
                    <span className="text-black font-bold">（現在：家電事業終了）</span>
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>


              {/* RIGHT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    1996年10月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    電気設備事業、空調設備事業、アンテナ設備事業、弱電・通信事業開始
                  </div>
                </div>
              </div>

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    1997年12月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    資本金3,000千円にて、有限会社ベルテック設立
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* RIGHT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2002年1月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    資本金10,000千円に増資
                  </div>
                </div>
              </div>

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2006年8月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    株式会社ベルテックに組織変更
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* RIGHT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2010年9月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    給排水設備事業開始<br />
                    太陽光事業開始<br />
                    <span className="text-black font-bold ">（現在：給排水設備事業、<br />太陽光事業終了）</span>
                  </div>
                </div>
              </div>

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2013年1月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    資本金17,000千円に増資
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* RIGHT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2014年2月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    資本金25,000千円に増資
                  </div>
                </div>
              </div>

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2014年4月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    四国営業所開設<br />
                    <span className="text-black font-bold ">（現在：閉鎖）</span>
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* RIGHT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2015年2月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    資本金35,000千円に増資
                  </div>
                </div>
              </div>

              {/* LEFT*/}
              <div className="flex justify-between h-28">
                <div className="w-1/3">
                  <div className="p-1 font-semibold text-lg lg:text-2xl">
                    2021年12月
                  </div>
                  <div className="text-gray-600 p-1 text-md lg:text-xl">
                    株式会社四電工グループとなる
                  </div>
                </div>
                <div className="w-1/6 grid justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
      <Contact />
    </div >
  );
};

export default InfoPage