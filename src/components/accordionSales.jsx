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
        <span className="text-lg sm:text-xl md:text-2xl">セールス（法人営業担当）</span>
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
          <h1 className="text-lg md:text-2xl py-2">【法人営業担当】IT人材育成の法人研修サービスで組織課題を解決するセールス募集！</h1>

          <div className="bg-white rounded-md p-5">
            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1">仕事内容</h2>
            <div>
              <p className="py-1">法人向けに研修サービスを提供している「リスキリング事業部」の法人営業担当として、以下の業務をお任せします。</p>
              <h3 className="font-bold pt-2 text-lg md:text-xl">【業務の詳細】</h3>
              <h4 className="font-bold pt-4 text-lg md:text-xl">◎主にお任せしたい業務</h4>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>新規顧客（事業会社、自治体）への営業活動</li>
                <li>カスタマーサクセスと連携した既存顧客への深耕営業</li>
                <li>当社アセットを用いた商品のカスタマイズ、提案</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold pt-4 text-lg md:text-xl">◎経験に応じて or 将来的に挑戦できる業務</h4>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>営業戦略の立案と実行</li>
                <li>マーケティング、カスタマーサクセス、コンテンツ担当との社内連携</li>
                <li>メンバーマネジメント（組織の拡大とともに依頼予定）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold pt-4 text-lg md:text-xl">◎仕事のやりがい</h4>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>顧客のニーズに合わせて、社内のアセットを活用した研修提案ができる</li>
                <li>少数精鋭の組織のため、個人の裁量権が大きい</li>
                <li>大手企業への営業経験を積むことができる（複数の大手企業にて研修導入実績あり）</li>
              </ul>
            </div>


            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">応募資格</h2>
            <div>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【必須条件】</h3>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>営業経験3年以上</li>
                <li>営業で高い実績を出したご経験</li>
                <li>自身の意志を明確に他者に伝えられるコミュニケーション能力、文章作成能力がある方</li>
                <li>協調性のある方</li>
                <li>論理的思考能力のある方</li>
              </ul>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【歓迎条件】</h3>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>マネジメントのご経験</li>
                <li>経営層へのコンサルティング営業経験</li>
                <li>人事コンサルティングのご経験</li>
                <li>提案書を作成したご経験</li>
              </ul>
            </div>

            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">想定年収</h2>
            <div>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【年収】</h3>
              <ul className="text-md md:text-lg">
                <li>400万円〜960万円</li>
              </ul>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【月収】</h3>
              <ul className="text-md md:text-lg">
                <li>33万4000円〜80万円（固定残業代含む）</li>
                <li>※ 固定残業代は、時間外労働の有無に関わらず45時間分を月8万6082円〜20万6186円支給</li>
                <li>※ 上限を超える時間外労働分は追加で支給</li>
                <li>※ あなたの経験・能力を考慮した上で決定</li>
              </ul>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【昇降給】</h3>
              <ul className="text-md md:text-lg">
                <li>有（昇降給は年2回想定、業績により変動あり）</li>
              </ul>
              <h3 className="font-bold pt-4 text-lg md:text-xl">【試用期間】</h3>
              <ul className="text-md md:text-lg">
                <li>有（ 6か月・待遇に変動なし）</li>
              </ul>
            </div>

            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">募集人数</h2>
            <div>
              <ul className="pt-4 text-md md:text-lg">
                <li>1名</li>
              </ul>
            </div>

            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">選考プロセス</h2>
            <div>
              <ul className="pt-4 text-md md:text-lg">
                <li>（1）書類選考</li>
                <li>（2）一次面接（人事担当者）</li>
                <li>（3）二次面接（部署責任者）</li>
                <li>（4）最終面接（役員）</li>
                <li>（5）内定</li>
                <li>※選考回数は場合によって変更になる可能性がございます</li>
              </ul>
            </div>

            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">勤務地</h2>
            <div className="pt-4">
              <p className="text-md md:text-lg">
                本社/〒700-0943 岡山県岡山市南区浜野1-1-1
              </p>
            </div>

            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">勤務時間</h2>
            <div>
              <ul className="pt-4 text-md md:text-lg">
                <li>8:00〜17:00</li>
                <li>【実働】8時間</li>
                <li>【休憩】60分（基本的に休憩は各自の都合のいい時間に取得OK）</li>
                <li>【残業】有</li>
                <li>【備考】固定残業代の相当時間：45時間/月</li>
              </ul>
            </div>


            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1">待遇/福利厚生</h2>
            <div>
              <h4 className="font-bold pt-4 text-lg md:text-xl">■具体的な待遇/制度</h4>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>社会保険完備（雇用・労災・健康・厚生年金）</li>
                <li>交通費支給（上限：3万円）※条件あり</li>
              </ul>
              <h4 className="font-bold pt-4 text-lg md:text-xl">■その他</h4>
              <ul className="px-5 list-disc text-md md:text-lg">
                <li>月間表彰制度 ※特別報酬（※条件あり）</li>
                <li>各種研修制度</li>
                <li>週1回以上のリモートワークあり</li>
              </ul>
            </div>



            <h2 className="text-lg md:text-2xl border-b border-yellow-200 w-full font-semibold py-1 mt-5">休日/休暇</h2>
            <div>
              <ul className="pt-4 px-5 list-disc text-md md:text-lg">
                <li>年間休日120日以上（年末年始休日を含む）</li>
                <li>完全週休2日制（土日祝日休み）</li>
                <li>有給休暇（入社日より6か月経過後に付与 初年度10日）</li>
                <li>慶弔休暇（結婚、出産、近親者の没時等）</li>
                <li>産前・産後休暇（出産予定日6週間以前から、出産の翌日8週間後まで）※取得実績あり</li>
                <li>育児休業 ※取得実績あり</li>
              </ul>
            </div>


          </div>


        </div>
      </div>
    </div >
  );
};

export default AccordionSales;