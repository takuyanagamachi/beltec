"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

const AccordionSales = () => {

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-lg sm:text-xl md:text-2xl">電気工事士 / 電気施工管理技士</span>
        <svg
          className="fill-yellow-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
              }`}
          />
        </svg>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
        ${accordionOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0'
        }`}>
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
                岡山県岡山市南区浜野四丁目17番6号
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
  );
};

export default AccordionSales;