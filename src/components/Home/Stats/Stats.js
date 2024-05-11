"use client"
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Cta from "@/components/CTA/Cta";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";
import image from "@/constant/Images/image";
import Image from "next/image";

// Define your styled components
const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 87%;
  animation: ${scrollX} 15s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const StyledImage = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 5px;
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

function Stats({ stats, heading, para }) {
  const [countingOn, setCountingOn] = useState(false);

  const row1 = [
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    // image.PW,
    // image.Unacademy,
    // // image.Vedantu,
    // image.Numerade,
    // image.Toppr,
    // image.Chegg,
    "https://directioneducare.com/wp-content/uploads/2024/01/unacademy.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/numrade-1.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/pw-logo-1.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/vedantu-logo.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/pw-logo-1.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/vedantu-logo.png",
    "https://directioneducare.com/wp-content/uploads/2024/01/numrade-1.png",
    //"https://directioneducare.com/wp-content/uploads/2024/01/unacademy.png",
  ];

  // const row2 = [
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  // ];

  return (
    <div className="bg-white app__stats py-24 sm:py-32 flex items-center flex-col gap-y-12">
      <Cta heading={heading} para={para} />
      <div className="relative max-w-6xl -mt-12 -mb-5 overflow-hidden">
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <StyledImage src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <StyledImage src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          {/* <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <StyledImage src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <StyledImage src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2> */}
        </Marquee>
      </div>
      <div className="app__container">
        <ScrollTrigger
          onEnter={() => setCountingOn(true)}
          onExit={() => setCountingOn(false)}
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, k) => {
              return (
                <div
                  key={k}
                  className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5"
                >
                  <div className="flex justify-center items-center text-[#ff6a00]">
                    <stat.icon className="h-12 w-12 " aria-hidden="true" />
                  </div>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {countingOn && (
                      <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {stat.value}+
                      </div>
                    )}
                  </dd>
                  <dt className="text-2xl leading-7 font-bold app__text">
                    {stat.name}
                  </dt>
                </div>
              );
            })}
          </dl>
        </ScrollTrigger>
        <div className=" mt-20 -mb-16 flex items-center justify-center gap-x-6 lg:justify-center">
          <Link href="/contact" className="primary-btn shadow-lg">
            Connect With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stats;
