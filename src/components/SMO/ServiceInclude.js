'use client'
import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentMagnifyingGlassIcon, MagnifyingGlassIcon, PresentationChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

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

const ServiceInclude = () => {
  const services = [
    {
      heading: "Live Doubt Solving",
      desc: "Get instant answers to your academic questions. Our experts cover topics from JEE/NEET and other exams.",
      imgUrl: UserCircleIcon,
      hoverBg: "pink-hover",
      iconColor: "pink-text"
    },
    {
      heading: "Online Tutoring",
      desc: "Personalized one-on-one sessions with experienced tutors. Master concepts and boost your scores.",
      imgUrl: ChartBarIcon,
      hoverBg: "paste-hover",
      iconColor: "paste-text"
    },
    {
      heading: "Study Material",
      desc: "Access curated study resources, including NCERT solutions, sample papers, and previous year exam papers.",
      imgUrl: DocumentMagnifyingGlassIcon,
      hoverBg: "yellow-hover",
      iconColor: "yellow-text"
    },
    {
      heading: "Subject Diversity",
      desc: "Covering a wide range of subjects: Physics, Chemistry, Biology, Mathematics, and more.",
      imgUrl: MagnifyingGlassIcon,
      hoverBg: "purple-hover",
      iconColor: "purple-text"
    }
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="app__container">
        <div className="row">
          <div className="primary-heading pb-12 text-center">
            <h2>What Our <br /><span className='highlight'>SEM Services</span> Include</h2>
          </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            services.map((index, key) => {
              return (
                <motion.div variants={items} key={key}>
                  <div className={`common-single-card px-6 py-12 ${index.hoverBg}`}>
                    <div className={`common-card-icon mx-auto w-[4.5rem] bg-white p-4 shadow-lg rounded-full ${index.iconColor}`}>
                      <index.imgUrl />
                    </div>
                    <div className=" text-center">
                      <div className="card-title">
                        <h3 className="text-xl font-bold mt-6 mb-3">{index.heading}</h3>
                      </div>
                      <p className='app__text'>{index.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceInclude