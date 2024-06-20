"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const InfoPage = () => {

  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  // SKILL
  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef, {once:true})
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  // EXPERIENCE
  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })


  return (
    <motion.div
    // className="h-full"
    // initial={{ y: "-200vh" }}
    // animate={{ y: "0%" }}
    // transition={{ duration: 1 }}
    >
      {/* hero  */}
      <div className="h-96 relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
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
            企業情報
          </h1>
        </div>
      </div>
      {/* CONTAINER */}

      <div className="container mx-auto" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="grid grid-col p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36">
          {/* BIOGRAPHY CONTAINER */}
          <div className="mb-40">
            {/* BIOGRAPHY TITLE */}
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">会社概要</h2>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quo ipsa quibusdam, qui,
              cupiditate libero vel eligendi officiis aperiam commodi doloremque illum at laudantium sapiente quaerat distinctio quia, atque veritatis? Atque.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            {/* <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div> */}
            {/* BIOGRAPHY SCROLL SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
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
          </div>


          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h2
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              沿革
            </motion.h2>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >

              {/* EXPERIENCE LIST ITEM LEFT*/}
              <div className="grid grid-cols-4  justify-between h-28">

                <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                  1994年6月
                  <div className="p-1 text-sm italic">
                    株式会社ベルテック前身にあたるテクノサービス設立、家電事業開始
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>


              {/* EXPERIENCE LIST ITEM RIGHT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    1996年10月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    電気設備事業、空調設備事業、アンテナ設備事業、弱電・通信事業開始
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM LEFT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    1997年12月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    資本金3,000千円にて、有限会社ベルテック設立
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM RIGHT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    2002年1月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    資本金10,000千円に増資
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM LEFT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    2006年8月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    株式会社ベルテックに組織変更
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM RIGHT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    2010年9月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    給排水設備事業開始
                    太陽光事業開始
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM LEFT*/}
              <div className="flex justify-between h-28">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    2013年1月
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    資本金17,000千円に増資
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 grid justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        {/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div> */}
      </div>

    </motion.div >
  );
};

export default InfoPage