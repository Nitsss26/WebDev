import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function DigitalMarketing() {
  return (
    <section className="-mt-14">
      <div class="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-4xl font-extrabold leading-7 mb-10">Expert<span className='highlight' > Writing Services</span></p>
                <h1 class="mt-2 primary-heading">THE IMPACT OF WRITING CONTENT ON <span class='highlight'>YOUR BUSINESS</span></h1>
                <p class="mt-7 text-xl leading-8 text-gray-700">
                  Transform your business with effective digital<br />marketing strategies.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">

            <Image
              className="w-full max-w-none mt-24 ms-16"
              src={image.webStrategy}
              alt=""
            />
          </div>
          <div class="-mt-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 lg:max-w-lg">
                <p class='app__text'>
                  Elevate your business with our expert writing services tailored <br />to your needs.
                </p>
                <ul role="list" class="mt-8 space-y-8 app__text">
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Engage a global audience and boost your online presence.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Stay ahead of the competition with targeted marketing strategies.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Build customer loyalty and drive engagement with compelling content.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Measure and analyze the impact of your marketing efforts for continuous improvement.
                    </span>
                  </li>
                </ul>
                <p class="mt-8 app__text">
                  Do not let your business fall behind. Take advantage of our writing services to establish a strong online presence and drive growth.
                </p>
                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">OUR SERVICES INCLUDE:</h2>
                <ul role="list" class="mt-8 space-y-8 app__text">
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      High-quality content creation tailored to your brand and audience.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      SEO optimization to improve your website visibility and search engine rankings.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Social media management to enhance your online presence and engagement.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      Email marketing campaigns to reach and nurture your target audience.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
