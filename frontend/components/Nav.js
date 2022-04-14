import { useRouter } from 'next/router'
import NavItems from './NavItems'

const Nav = () => {

    const router = useRouter()

    return (
        <div className="fixed flex items-center justify-center bottom-[30px] left-[50%] -translate-x-1/2 bg-[#fff] backdrop-blur-[100px] opacity-800 px-20 py-8 z-10 rounded-lg">
            {router.pathname === "/" ? (
                <>
                    <NavItems name='Work' path='/#work' />
                    <NavItems name='About Us' path='/#about' />
                    <NavItems name='Contact Us' path='/#contact' />
                </>
            ) : ""}
            {router.pathname === "/#about" ? (
                <>
                    <NavItems name='Home' path='/' />
                    <NavItems name='Work' path='/#work' />
                    <NavItems name='Contact Us' path='/#contact' />
                </>
            ) : ""}
            {router.pathname === "/#contact" ? (
                <>
                    <NavItems name='Home' path='/' />
                    <NavItems name='Work' path='/#work' />
                    <NavItems name='About Us' path='/#about' />
                </>
            ) : ""}
        </div>
    )
}

export default Nav
