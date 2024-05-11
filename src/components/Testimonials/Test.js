"use client";
import image from "@/constant/Images/image";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "DreamEdu.com",
      message:
        "We have a great business relationship with Dream Education. We had worked with several other companies in the past who did not deliver results and I am happy to say Dream Education is doing that for us. You guyz are amazing!!",
      imgUrl: image.client,
      imgurl: image.client2,
      Name: "Christna Bello"
    },
    {
      id: 2,
      name: "DreamEdu.com",
      message:
        "Dream Education has done a wonderful job and they are amazingly professional. We would highly recommend Dream Education to any business that needs a hand improving their internet traffic or their business.",
      imgUrl: image.client,
      Name: "Sophie Leonard"
    },
    {
      id: 3,
      name: "DreamEdu.com",
      message:
        "Today we work with statistics and more accurate data and realize the digital space SEO is an essential tool for Clinica da Mama to position itself in an increasingly competitive field and Dream Education helped us very well.",
      imgUrl: image.client,
      Name: "James Sheferd"
    },
    {
      id: 4,
      name: "DreamEdu.com",
      message:
        "It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!",
      imgUrl: image.client,
      Name: "Thomas Henary"
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselPaused) {
        setActiveSlide((prevState) => (prevState + 1) % testimonials.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselPaused, testimonials.length]);

  const handleMouseEnter = () => {
    setCarouselPaused(true);
  };

  const handleMouseLeave = () => {
    setCarouselPaused(false);
  };

  return (
    <section className="py-60 sm:py-52 bg-[#FAF1F2]">
      <div className="app__container -mt-24 grid grid-cols-1 md:grid-cols-2">
        <div className="relative left-[5%] right-[5%] h-80">
          <h4 className="highlight z-2 primary-heading mb-8 text-5xl lg:text-5xl font-extrabold capitalize tracking-tight">Testimonials</h4>
          <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-[#ffdbc2]" />
          <div className="absolute mt-5 md:top-12 pr-8">

            <h1 className="mt-10 mb-20 text-4xl font-extrabold">
              See What Our <br />
              <span className="highlight">Client</span> Says
            </h1>
            <div className="flex items-center justify-start gap-4 mt-6">
              <Image src={testimonials[0].imgurl} height={50} width={50} alt="" />
              <p className="ms-4 mt-4 text-lg font-semibold app__text relative bg-white h-30 w-96 shadow-lg px-6 py-6 rounded-xl">
                Discover what our clients are saying about our digital solutions. Read testimonials from satisfied customers </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white h-80 shadow-lg px-6 py-12 rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={image.quote}
            className="absolute bottom-0 right-20"
            height={150}
            width={150}
            alt=""
          />
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide-test app__text ${activeSlide === index ? "activeSlider-test" : ""
                }`}
            >
              <p className="font-semibold">&ldquo; {testimonial.message} &rdquo;</p>
              <div className="flex items-center justify-start gap-4 mt-6">
                <Image src={testimonial.imgUrl} height={50} width={50} alt="" />
                <div>
                  <h3 className="text-lg font-extrabold my-3" >{testimonial.name}</h3>
                  <h4 className="text-3xl font-extrabold">{testimonial.Name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
