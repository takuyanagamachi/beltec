"use client"
import Image from "next/image";
import Link from "next/link"
import { FaMapLocationDot } from "react-icons/fa6";

const Recruit = () => {

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <div className="py-2">
        <div className="flex justify-between">
          <span className="text-lg sm:text-xl md:text-2xl">電気工事士 / 電気施工管理技士</span>
          <button className="relative inline-flex items-center justify-center 
          p-0.5 mb-2 me-2 overflow-hidden hover:text-black text-slate-600 text-lg font-semibold
          rounded-lg group bg-gradient-to-br from-red-200 
          to-yellow-200 group-hover:from-red-200 
          group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <Link href="mailto:soumu-beltec@beltec-e.co.jp?subject=電気工事士 / 電気施工管理技士応募の件">応募する</Link>
            </span>
          </button>

        </div>

        <div className="grid text-slate-600 text-sm">
          <div className="overflow-hidden">
            <h1 className="text-md md:text-xl py-2">＊未経験者：可<br />＊経験者：採用面、賃金面優遇あり</h1>

            <div className="bg-white rounded-md p-5 grid md:grid-cols-2">

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                雇用形態
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  正社員
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                雇用期間
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  定めなし
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                試用期間
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  あり（期間：３ヶ月）
                </li>
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  ※試用期間中の労働条件：同条件
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                勤務地
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  〒700-0845<br />
                  岡山県岡山市南区浜野四丁目17番6号
                  <Link className="text-blue-700"
                    target="_blank"
                    href="https://www.google.com/maps/place/%E3%80%92700-0845+%E5%B2%A1%E5%B1%B1%E7%9C%8C%E5%B2%A1%E5%B1%B1%E5%B8%82%E5%8D%97%E5%8C%BA%E6%B5%9C%E9%87%8E%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%97%E2%88%92%EF%BC%96/@34.6273108,133.9425634,17z/data=!3m1!4b1!4m6!3m5!1s0x355407e28a9f9071:0xc1f3a542f7fc71e5!8m2!3d34.6273108!4d133.9425634!16s%2Fg%2F11clncmclf?entry=ttu">
                    <FaMapLocationDot
                      className="text-2xl inline-block ml-5 mb-1" />
                  </Link>
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                年齢
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  制限あり（～59歳）
                </li>
              </ul>


              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                資格
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  必須：普通自動車運転免許<br />
                  （AT限定可）
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                基本給
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  158,900円～418,000円+各種手当等
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                固定残業代
              </h4>
              <div>
                <ul className="pl-4 md:pl-0">
                  <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                    あり
                  </li>
                  <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                    時間外労働の有無にかかわらず、25時間分を月32,300円～84,900円支給
                  </li>
                  <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                    上限を超える時間外労働は追加で支給
                  </li>
                </ul>
              </div>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                昇給
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  あり
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                賞与
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  あり（年２回）
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                勤務時間
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  8時00分～17時00分
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                休憩時間
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  120分
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                年間休日数
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  100日
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                休日
              </h4>
              <div>
                <ul className="pl-4 md:pl-0">
                  <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                    日曜日、第２・第４土曜日、祝日、その他
                  </li>
                  <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                    その他（GW・お盆・年末年始等）
                  </li>
                </ul>
              </div>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                加入保険等
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  雇用保険、労災保険、健康保険、厚生年金
                </li>
              </ul>

              <h4 className="mt-4 text-lg md:text-xl border-b border-yellow-200 w-full font-semibold">
                退職金共済
              </h4>
              <ul className="pl-4 md:pl-0">
                <li className="list-disc mt-4 text-md md:text-lg md:pb-1 md:border-b md:border-yellow-200 w-full">
                  加入
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Recruit;