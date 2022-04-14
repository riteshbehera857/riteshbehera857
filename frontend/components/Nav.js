import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'
import { MdWorkOutline, MdWork } from 'react-icons/md'

import NavItems from './NavItems'

const Nav = () => {

    const router = useRouter()
    const [activeElem, setActiveElem] = useState('#home')

    return (
        <div className="fixed flex items-center justify-center bottom-[30px] left-[50%] -translate-x-1/2 bg-[#fff] backdrop-blur-[100px] opacity-800 px-10 py-8 gap-[2rem] z-10 rounded-lg">
            <NavItems onClick={() => setActiveElem('#home')} path='/'>{activeElem === '#home' ? <AiFillHome className="text-[2.2rem]" /> : <AiOutlineHome className="text-[2.2rem]" />}
            </NavItems>
            <NavItems onClick={() => setActiveElem('#about')} path='#about'>{activeElem === '#about' ? <BsPeopleFill className="text-[2.2rem]" /> : <BsPeople className="text-[2.2rem]" />}</NavItems>
            <NavItems onClick={() => setActiveElem('#work')} path='#work'>{activeElem === '#work' ? <MdWorkOutline className="text-[2.2rem]" /> : <MdWork className="text-[2.2rem]" />}</NavItems>
        </div>
    )
}

export default Nav
