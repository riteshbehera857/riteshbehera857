import { useState } from 'react'
import Link from 'next/Link'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'
import { MdWorkOutline, MdOutlineContactSupport, MdWork } from 'react-icons/md'

import { motion } from 'framer-motion'

const Nav = () => {
    const [activeElem, setActiveElem] = useState('#')
    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 3 }}
            className="fixed flex items-center justify-center bottom-[30px] left-[50%] -translate-x-1/2 bg-[rgba(255,255,255,0.25)] backdrop-blur-[4px] opacity-800 px-10 py-8 gap-[2rem] z-10 rounded-lg" >
            <Link href="#">
                <a onClick={() => setActiveElem('#')} className={activeElem === '#' ? 'font-body text-2xl text-center uppercase rounded-[50%] text-white bg-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary' : 'font-body text-2xl text-center uppercase text-body_text rounded-[50%] hover:text-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary'}><AiOutlineHome className="text-[2.2rem]" /></a>
            </Link>
            <Link href="#about">
                <a onClick={() => setActiveElem('#about')} className={activeElem === '#about' ? 'font-body text-2xl text-center uppercase rounded-[50%] text-white bg-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary' : 'font-body text-2xl text-center uppercase text-body_text rounded-[50%] hover:text-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary'}><BsPeople className="text-[2.2rem]" /></a>
            </Link>
            <Link href="#work">
                <a onClick={() => setActiveElem('#work')} className={activeElem === '#work' ? 'font-body text-2xl text-center uppercase rounded-[50%] text-white bg-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary' : 'font-body text-2xl text-center uppercase text-body_text rounded-[50%] hover:text-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary'}><MdWorkOutline className="text-[2.2rem]" /></a>
            </Link>
            <Link href="#contact">
                <a onClick={() => setActiveElem('#contact')} className={activeElem === '#contact' ? 'font-body text-2xl text-center uppercase rounded-[50%] text-white bg-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary' : 'font-body text-2xl text-center uppercase text-body_text rounded-[50%] hover:text-primary transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary'}><MdOutlineContactSupport className="text-[2.2rem]" /></a>
            </Link>
        </motion.div>
    )
}

export default Nav
