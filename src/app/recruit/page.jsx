"use client"
import Contact from "@/components/contact";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BtoU, HtoH, LtoR } from "../motion";
import Call_now from "@/components/call_now";
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
        <div className="grid md:p-8 lg:p-20 xl:p-36">
          <motion.div
            initial={LtoR().offscreen}
            whileInView={LtoR().onscreen}
            viewport={{ once: false, amount: 0 }}
            className="my-16 text-center">
            <h2 className="font-extrabold text-yellow-500 text-5xl overline tracking-wide">
              TEAM&apos;S VOICE
            </h2>
            <p className="text-yellow-500 tracking-wide text-xl">-働く人の声-</p>
          </motion.div>

          <div className="flex flex-col p-5 bg-white shadow-2xl rounded-xl">


            <div className="flex flex-row justify-start mt-2 mb-2">
              <GrUserManager className="flex flex-col rounded-full outline w-10 h-10" />
            </div>
            <div className="flex justify-start">
              <div className="flex flex-col w-full max-w-[400px] leading-1.5 p-4 border-gray-200
                 bg-gray-100 rounded-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-xl font-semibold text-gray-700">社長からスタッフへの声</span>
                </div>
                <p className="text-md font-normal text-gray-500">
                  日々の業務において、皆様のご尽力に心から感謝申し上げます。<br />
                  各部署、各自がそれぞれの持ち場で最大限の力を発揮してくださっていることが、当社の成長と成功に繋がっていると確信しています。<br />
                  特に最近のプロジェクトでは、皆様の協力とチームワークのおかげで、困難な状況を乗り越えることができました。新しいアイデアを出し合い、課題に対して前向きに取り組む姿勢には、いつもながら感銘を受けています。
                  皆様の努力と献身があってこそ、当社はここまで来ることができました。<br />
                  今後も引き続き、共に力を合わせて素晴らしい未来を築いていきましょう。<br />
                  本当にありがとうございます。
                </p>
              </div>
            </div>


            <div className="flex flex-row justify-end mt-2 mb-2">
              <GrUserManager className="flex flex-col rounded-full outline w-10 h-10" />
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col w-full max-w-[400px] leading-1.5 p-4 border-gray-200
                 bg-gray-100 rounded-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-xl font-semibold text-gray-700">技術部から総務部への声</span>
                </div>
                <p className="text-md font-normal text-gray-500">
                  総務部のおかげで、オフィスがスムーズに運営されています。<br />
                  皆さんの手配した設備やサービスがあって初めて、私たちは仕事に集中できます。
                </p>
              </div>
            </div>


            <div className="flex flex-row justify-start mt-2 mb-2">
              <GrUserFemale className="flex flex-col rounded-full outline w-10 h-10" />
            </div>
            <div className="flex justify-start">
              <div className="flex flex-col w-full max-w-[400px] leading-1.5 p-4 border-gray-200
                 bg-gray-100 rounded-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2 mb-2">
                  <span className="text-xl font-semibold text-gray-700">総務部から技術部への声</span>
                </div>
                <p className="text-md font-normal text-gray-500">
                  日々、皆様の専門知識と技術力が存分に発揮され、無事に工事を完了することができました。<br />
                  各現場での安全管理や緻密な作業、突発的な問題への迅速な対応には、感謝の念が絶えません。<br />
                  また、工事に必要な書類や資材の手配においても、技術部の皆様の協力とコミュニケーションのおかげで、スムーズに進めることができました。<br />
                  皆様の連携とサポートがあってこそ、私たち総務部も業務を円滑に進めることができています。<br />
                  皆様のプロフェッショナルな姿勢と努力に、心から感謝しています。<br />
                  今後も、互いに支え合いながら、更なる高みを目指して一緒に頑張っていきましょう。
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="clear-both my-[120px]"></div>


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

          <div className="w-full ">
            <Recruit />
          </div>
        </div>



      </div>

    </div >
  )
}

export default RecruitPage