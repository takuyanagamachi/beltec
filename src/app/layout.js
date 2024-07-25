import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "（株）ベルテック｜電気工事の事ならお任せください",
  description: "岡山市に拠点を置く株式会社ベルテックは、電気設備の設計、施工、管理、電気通信、空調設備等、幅広く提案させて頂きます。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <ToastContainer position="top-center" />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
