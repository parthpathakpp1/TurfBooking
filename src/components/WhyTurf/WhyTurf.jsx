import React from 'react';
import { Call, Round, Soccer, Rect1, Rect2 } from '../../assets/images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WhyTurf() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Play animation only once
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } },
  };

  const slideInLeft = {
    hidden: { x: -100 },
    visible: { x: 0, transition: { duration: 2.5 } },
  };

  const slideInRight = {
    hidden: { x: 100 },
    visible: { x: 0, transition: { duration: 2.5 } },
  };

  return (
    <section id="whyTurfZone" className="content-center w-full bg-gray-100" ref={ref}>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <motion.h2
                className="pt-20 text-2xl font-extrabold text-center"
                initial={inView ? 'visible' : 'hidden'}
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
              >
                Why <span className="text-pink-600">TurfZone</span>
              </motion.h2>
              <motion.p
                className="text-base pt-10 text-black"
                initial={inView ? 'visible' : 'hidden'}
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
              >
                Turf zone is a sportsground and outdoor playground booking portal that provides easy booking facility for schools, clubs, and other sports organizations across Kenya. Enabling them to easily book a turf playground online - anytime.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-wrap pb">
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-6"
              initial={inView ? 'visible' : 'hidden'}
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-items-center bg-primary rounded-2xl mb-8">
                <img className="items-center" src={Call} alt="Call" />
              </div>
              <p className="text-black">
                No more calling around and being on hold for long periods of time.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4"
              initial={inView ? 'visible' : 'hidden'}
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
            >
              <div className='w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8'>
                <img src={Round} alt="Round" />
              </div>
              <p className='text-black'>
                Book a turf in advance.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 "
              initial={inView ? 'visible' : 'hidden'}
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
            >
              <div className='w-[70px] h-[70px] flex  items-center justify-center bg-primary rounded-2xl mb-8'>
                <img src={Soccer} alt="Soccer-field" />
              </div>
              <p className='text-black'>
                Finding a football pitch is much easier.
              </p>
            </motion.div>

            <motion.div
              className='flex justify-center gap-20 py-10 w-full rounded-lg mt-10 bg-purple-900 '
              initial={inView ? 'visible' : 'hidden'}
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInRight}
            >
              <img className='object-cover' src={Rect1} alt='User bookings' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTurf;
