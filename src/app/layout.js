import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "株式会社ベルテック 岡山市の電気工事",
  description: "株式会社ベルテック 電気設備工事・空調設備工事はお任せ下さい。／岡山県岡山市.",
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
