"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CodeBracketSquareIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import image from '@/constant/Images/image'
import WeCan from '../WeCan/WeCan'

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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function WeMake() {
  return (
    <div className="bg-slate-50 py-12 sm:py-12 mb-36 -pb-40 relative">
      <Image
        src={image.Bg}
        className="w-auto h-0"
        height={150}
        width={150}
        alt=""
      />
      <div className="absolute inset-0 opacity-12">
        <Image
          src={image.Bg}
          layout="fill"
          objectFit="cover"
          alt=""
          style={{ opacity: 0.12 }} // Change the opacity here
        />
      </div>
      <div className="app__container relative z-10 -mb-20">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-gray-900 text-center">
            We Make Your <span className='highlight'>Service</span> Faster
          </p>
          <p className="mt-4 text-base leading-8 app__text text-center font-bold">
            For more expert opinions about better investments and cute promotional aspects, contact DreamEdu Private Limited. Because,
          </p>
        </div>
        <div className="flex flex-row">
          <div className="mx-auto mt-6 ms-20 max-w-2xl sm:mt-6 lg:mt-8 lg:max-w-4xl">
            <motion.dl variants={variants} initial="hidden" whileInView="show" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <motion.div variants={items} className="relative pl-24">
                <dt className="text-xl bg- white font-extrabold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-[#ff6a00] text-[#ff6a00] hover:text-white">
                    <CodeBracketIcon className="h-6 w-6 " aria-hidden="true" />
                  </div >
                  <span className=' font-extrabold'>Our Mission</span>
                </dt>
                <dd className="mb-10 mt-2 text-base bg-white p-3 rounded-3xl font-bold leading-7 app__text">
                  Crafting <span className='highlight font-extrabold'>engaging</span> educational content that sparks curiosity and fosters <span className='highlight font-extrabold'>innovation</span>.Our dedication lies in tailoring solutions to meet a <span className='highlight font-extrabold'>broad spectrum</span> of learning needs, ensuring a personalized solutions </dd>
              </motion.div>
            </motion.dl>

            <motion.dl variants={variants} initial="hidden" whileInView="show" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mt-8 lg:mt-0">
              <motion.div variants={items} className="relative pl-24">
                <dt className="text-xl font-extrabold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-[#ff6a00] text-[#ff6a00] hover:text-white">
                    <CodeBracketSquareIcon className="h-6 w-6 " aria-hidden="true" />
                  </div>
                  <span className='font-extrabold'>Our Vision</span>
                </dt>
                <dd className="mt-2 text-base bg-white p-3 rounded-3xl font-bold leading-7 app__text">
                  In our vision, we strive to create vibrant <span className='highlight font-extrabold'>educational content</span> that sparks innovation. We are <span className='highlight font-extrabold'>dedicated</span> to crafting tailored solutions for diverse learning needs <span className='highlight font-extrabold'>globally.</span></dd>
              </motion.div>
            </motion.dl>
          </div>
          <div className="flex-auto">
            <WeCan />
          </div>
        </div>
      </div>
    </div>
  )
}
