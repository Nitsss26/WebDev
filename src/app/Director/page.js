'use client'
import Image from "next/image"
import './page.css'
import image from "@/constant/Images/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import director from "./Director.png"


const Director = () => {
  return (
    <section className="app__hero1 p-7 bg-slate-50 relative">
      <div className="mx-auto ms-40 max-w-7xl p-20 lg:px-1 z-2">
        <div className="flex items-center justify-between py-0 mr-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="flex-1 ">
            <h1 className="text-6xl lg:text-6xl font-extrabold mb-3 capitalize">To Our Customers </h1><br />
            {/* <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> Welcome To</h1>
            <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> Dream Education !</h1> */}
            <p className="text-2xl mb-12">At Dream Education, our vision transcends conventional learning. We strive to ignite curiosity, cultivate creativity, and foster values that shape responsible global citizens. With dedication and innovation, we empower individuals <br /> to unlock their potential and realize their dreams.</p>
            <div className="absolute half-circle-animation ms-20 rounded-full animate-[spin_3s_linear_infinite] z-7">
              <div className="half-circle-animation-child rounded-full"></div>
            </div>
            <div className="mt-5 flex gap-5">
              <Link href="/team" className="primary-btn mt-5 Sshadow-lg">Learn More</Link>
              <h2 className=" italic text-lg justify-end ms-40"> Reprentative Director and President <br /><span className="mt-1 not-italic font-bold text-2xl">Mr. Ajay Bansal</span></h2>
            </div>
          </motion.div>
          <div className=" -me-8 -pr-5 pb-10 flex-1 hidden lg:block">
            <Image src={director} alt="dm" /></div>
        </div>
      </div>

      <div className="absolute circle-animation rounded-full mb-20 animate-[spin_4s_linear_infinite] z-1">
        <div className="circle-animation-child rounded-full"></div>
      </div>

      <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
        <div className="square-animation-child"></div>
      </div>
      <div className="absolute bubble-animation gap-5 flex h-3 w-3 z-1">
        <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
      </div>
      <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
        <div className="square-animation-child-2"></div>
      </div>
      <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
        {/* <div className="square-animation-child-3"></div> */}
      </div>
    </section>
  )
}

export default Director