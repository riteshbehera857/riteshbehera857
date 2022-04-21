import Link from 'next/link'
import PropTypes from 'prop-types'


const NavItems = ({ children, path }) => {
    return (
        <>
            <Link href={path}>
                <a className='font-body text-2xl text-center uppercase text-body_text hover:bg-primary rounded-[50%] hover:text-white transition-all ease-in-out delay-150 p-[1.2rem] active:ring active:ring-primary '>{children}</a>
            </Link>
        </>
    )
}

export default NavItems

NavItems.propTypes = {
    path: PropTypes.string,
}
