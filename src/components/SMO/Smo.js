import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Smo = () => {
  return (
    <section className="we-are-area -mt-24 py-16 md:py-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">

        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                Your Trusted <span className="highlight">Doubt Solving</span> <br /> and <span className="highlight">Online Tutor</span> Partner
              </h2>
            </div>

            <p className="app__text font-bold -mt-3">
              At Direction Educare, we offer more than just doubt solving. Our comprehensive services encompass both quick doubt resolution <br /> and in-depth online tutoring. Here&rsquo;s what we offer :-
            </p>

            <div className="flex mt-6 -ms-8">
              <div className="">
                <h1 className="ms-8 text-xl font-extrabold highlight">Doubt Solving </h1>
                <ul role="list" className="mt-5 space-y-8 app__text">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Up to Postgraduate Level:</span> Whether it’s high school, undergraduate, or postgraduate level, we’ve got you covered.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Wide Range of Subjects:</span> Explore various subjects with us, from mathematics to literature, for your educational journey.</span>
                  </li>
                  {/* <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>Providing value to users</span>
                  </li> */}
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Quick Turnaround:</span> Our team of experts can solve any doubt within 30 minutes.</span>
                  </li>
                </ul>
              </div>
              <div className="ms-10">
                <h1 className="ms-8 text-xl font-extrabold highlight">Online Tutoring</h1>
                <ul role="list" className="mt-5 space-y-8 app__text">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Boost Academic Skills:</span> Sharpen knowledge to crack competitive exams like <b>JEE, NEET, GATE, CAT, UPSC, and PSU.</b></span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Personalized Learning:</span> Our experienced tutors provide one-on-one sessions tailored to each student’s needs.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span> <span className="font-bold">Flexible Schedules:</span> No need to travel students can learn from the comfort of their homes.</span>
                  </li>
                  {/* <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>Rewarding loyal followers</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.semMarketing} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smo;
