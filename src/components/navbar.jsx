"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  // { url: "/", img: "/BeltecLogohen.png" },
  { url: "/about", title: "企業情報" },
  { url: "/service", title: "事業内容" },
  { url: "/contact", title: "お問い合わせ" },
  { url: "/privacy", title: "プライバシーポリシー" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [-50, 0] }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >

      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/BeltecLogohen.png" width={150} height={150} className="h-12" alt="Flowbite Logo" />
          </Link>
          <div>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 md:mt-0">
                {links.map(link => (
                  <NavLink link={link} key={link.title} />
                ))}
              </ul>
            </div>

            {/* Responsive Menu */}
            <div className="md:hidden">
              {/* Menu Button */}
              <button
                className="w-10 h-8 flex flex-col justify-between z-50 relative"
                onClick={() => setOpen((prev) => !prev)}>
                <motion.div
                  variants={topVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black rounded origin-left">
                </motion.div>
                <motion.div
                  variants={centerVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black rounded">
                </motion.div>
                <motion.div
                  variants={bottomVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black rounded origin-left">
                </motion.div>
              </button>
              {/* Menu list */}
              {open && (
                <motion.div
                  variants={listVariants}
                  initial="closed"
                  animate="opened"
                  className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                >
                  {links.map((link) => (
                    <motion.div variants={listItemVariants} className="" key={link.title}>
                      <Link href={link.url} onClick={() => setOpen((prev) => !prev)}>
                        {link.img ?
                          <Image src={link.img} width={150} height={150} alt="" />
                          : <></>
                        }
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

          </div>


        </div>
      </nav>
    </motion.div>
  )
}

export default Navbar