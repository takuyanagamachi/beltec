import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_XHOST,
    port: process.env.NEXT_PUBLIC_XPORT,
    auth: {
      user: process.env.NEXT_PUBLIC_XMAILUSER,
      pass: process.env.NEXT_PUBLIC_XPASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const toHostMailData = {
    from: req.body.email,
    to: process.env.NEXT_PUBLIC_XMAILUSER, // 送信先
    subject: `お問い合わせ完了`, // タイトル
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
        <p>${req.body.name} 様</p>
        <p>この度は、お問い合わせいただきありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>

        <div style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
          <h4>【会社名】</h4>
          <p>${req.body.companyName}</p>
          <h4>【名前】</h4>
          <p>${req.body.name}</p>
          <h4>【メールアドレス】</h4>
          <p>${req.body.email}</p>
          <h4>【メッセージ内容】</h4>
          <p>${req.body.message}</p>
         </div>

        
        `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}

// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { data } = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: NEXT_PUBLIC_XHOST,
//       port: NEXT_PUBLIC_XPORT,
//       auth: {
//         user: process.env.NEXT_PUBLIC_XMAILUSER,
//         pass: process.env.NEXT_PUBLIC_XPASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: data.email,
//       to: 'nagamachi.create.team@gmail.com',
//       subject: 'お問い合わせありがとうございます',
//       html: `
//         <p>${data.name} 様</p>

//         <p>この度は、お問い合わせいただきありがとうございます。</p>
//         <p>以下の内容でお問い合わせを受け付けました。</p>

//         <div style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
//           <p>お問い合わせ種別:</p>
//           <p>${data.companyName}</p>
//           <p>お問い合わせ内容:</p>
//           <p>${data.message}</p>
//         </div>

//         <p>お問い合わせいただいた内容につきまして、確認次第ご返信させていただきます。</p>
//         <p>何卒よろしくお願い申し上げます。</p>
//       `,
//     };

//     const res = await transporter.sendMail(mailOptions);

//     return NextResponse.json(res, { status: 200 });
//   } catch (error) {
//     throw error;
//   }
// }
