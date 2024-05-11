'use client'
import { motion } from 'framer-motion'
import image from "@/constant/Images/image"
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
  const feature = [{
    name: "On Page SEO",
    description: "A website is the essence and the personality of the company, and unlike humans, this personality can change and can very profitably affect people around the world.",
    icon: ComputerDesktopIcon
  }, {
    name: "Live Tutoring & Doubt Solving",
    description: "To enhance doubt-solving and tutoring, we customize our product design for adaptability and thorough coverage.",
    icon: ArrowTrendingUpIcon
  }, {
    name: "Solution Writing",
    description: "Our solution writing crafts compelling, relatable content driving conversions and resonating with customers ",
    icon: ArrowPathIcon
  },]
  return (
    <div className="bg-slate-50">
      <div className="app__container py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
            <h1 className="primary-heading mb-8">Our Best <span className="highlight">Features</span></h1>
            {
              feature.map((i, k) => {
                return (
                  <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                    <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                      <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                        <div className="half-circle-child rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                      <p className='app__text font-bold'>{i.description}</p>
                    </div>
                  </motion.div>
                )
              })
            }
          </motion.div>
          <div className="ms-28 -me-7 my-auto">
            <Image src={image.aboutAni} alt="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestFeature