import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from '../components/Button'
import WorkItem from '../components/WorkItem'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <main className="bg-body w-full h-screen relative">
      <Nav />
      <section id='home' className="container h-full flex flex-col justify-center items-center">
        <motion.h1
          animate={{ opacity: [1, 0.05] }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="font-body font-black uppercase stroke text-[8rem] lg:text-xxl text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 noselect z-0">
          ritesh <br />
          behera
        </motion.h1>
        <div className="z-50 px-[1rem]">
          <motion.h3
            animate={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ delay: 2.5 }}
            className="font-body font-medium text-[1.3rem] lg:text-3xl text-body_text"><span className='text-primary'>Hii</span>, Myself Ritesh Behera
          </motion.h3>
          <div>
            <motion.h1
              animate={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ delay: 3, type: "spring", stiffness: 10 }}
              className="font-body text-[3rem] lg:text-8xl font-black leading-normal capitalize text-body_text mb-10">
              web developer, <br />
              web designer, <br />
              <span className='text-primary'>and</span> <br />
              a life long learner
            </motion.h1>
            <Link href="/work" >
              <motion.a
                animate={{ opacity: [0, 1], x: [-100, 0] }}
                transition={{ delay: 3.5 }}
                className="bg-primary shadow-lg shadow-primary/50 text-white font-body text-xl lg:text-2xl rounded-lg   px-8 py-4 lg:px-9 lg:py-5">See My Work</motion.a>
            </Link>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full border-[20px] border-primary opacity-[0.5] top-[10rem] lg:top-[5rem] right-[5rem] lg:right-[50rem]"></motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute h-[15rem] w-[15rem] lg:h-[15rem] lg:w-[15rem] rounded-full border-[20px] border-primary opacity-[0.5] bottom-[0] left-[0] lg:left-[45rem] "></motion.div>
      </section>
      <section id='work' className="bg-body flex flex-col items-center justify-between pt-10 px-[2rem]">
        <h1 className="text-5xl font-body font-bold text-body_text underline decoration-primary decoration-double decoration-2 mb-8">My Work</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[4rem] lg:gap-10 place-items-center h-full w-full px-10">
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
      </section>
    </main>
  )
}
