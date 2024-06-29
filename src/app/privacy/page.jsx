"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { LtoR } from "../motion";
import { FaCheck } from "react-icons/fa";
const PrivacyPage = () => {

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-50, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-96 relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image height={300} width={300}
            src="/privacy-policy.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-96"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative h-full z-10">
          <h1 className="w-full h-full flex justify-center items-center bg-black bg-opacity-80 sm:text-5xl text-4xl font-bold leading-tight">
            PRIVACY POLICY
          </h1>
        </div>
      </motion.div>
      <section className="py-16 container max-w-2xl mx-auto">
        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="my-20">
          <h2 className="text-center font-extrabold text-yellow-500 text-4xl overline tracking-wide">
            PRIVACY POLICY
          </h2>
          <p className="text-center text-yellow-500 tracking-wide">-個人情報の取り扱い-</p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h2 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            1
          </h2>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、お客様の個人情報の取り扱いに関係する法令、その他の規範を遵守します。
          </p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h3 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            2
          </h3>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、個人情報の本人からの苦情及び相談に関しては、適切、迅速に対応いたします。
          </p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h3 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            3
          </h3>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、お客様の個人情報について適切な安全措置を講ずることにより、漏えい、改ざん、紛失等の危険防止に努めます。
          </p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h3 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            4
          </h3>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、お客様の個人情報を、正当な理由のない限り、第三者に提供いたしません。
          </p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h3 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            5
          </h3>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、個人情報の取り扱いに関して、定期的に監査を行い、常に継続的改善に努めます。
          </p>
        </motion.div>

        <motion.div
          initial={LtoR().offscreen}
          whileInView={LtoR().onscreen}
          viewport={{ once: false, amount: 0 }}
          className="p-5 my-20 text-center">
          <h3 className="p-2 pl-2 text-white font-extrabold border rounded-lg bg-gray-400">
            6
          </h3>
          <p className="p-5 rounded-lg border-4 border-gray-400 mx-4 mt-[-10px] text-xl">
            当社は、取得した個人情報を目的内で利用いたします。ご本人による事前の同意を得ることなく、その目的の範囲を超えて個人情報の取扱いを行うことはありません。
          </p>
        </motion.div>

      </section >
    </div>
  )
}

export default PrivacyPage